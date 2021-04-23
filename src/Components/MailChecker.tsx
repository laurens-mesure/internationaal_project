import React, { useEffect, useState } from "react";

// Google login
import GoogleLogin, {
    GoogleLoginResponse,
    GoogleLoginResponseOffline,
} from "react-google-login";

// Interfaces
import IGmailList from "../Interfaces/GmailList";
import IMailchecker from "../Interfaces/Mailchecker";

// Hooks
import useMailChecker from "../Hooks/Mailchecker";

// Components
import MailItem from "./MailItem";

const MailChecker: React.FC = () => {
    const [rawMail, setMail] = useState<string | undefined>();
    const data = useMailChecker<IMailchecker | undefined>(rawMail);
    const [accessToken, setAccessToken] = useState<string>();
    const [mailList, setMailList] = useState<IGmailList>();
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        if (accessToken) {
            fetch(
                "https://gmail.googleapis.com/gmail/v1/users/me/messages?includeSpamTrash=True&labelIds=SPAM",
                {
                    method: "GET",
                    headers: { Authorization: `Bearer ${accessToken}` },
                    redirect: "follow",
                }
            ).then(async (r) => {
                const mailList = (await r.json()) as IGmailList;
                setMailList(mailList);
            });
        }
    }, [accessToken]);

    useEffect(() => {
        if (data) {
            setLoading(false);
        }
    }, [data]);

    return (
        <section className="p-4 mx-auto w-11/12 sm:w-2/3 xl:w-1/3 text-lg mt-4 mb-20">
            <h1 className="mb-2 dark:text-white">
                You can paste a raw email here to check if it is spam or not.
                <br />
                Or you can choose an email from your own <em>Gmail account</em>!
            </h1>
            <form onSubmit={(e) => handleSubmit(e)}>
                <textarea
                    required
                    name="mail"
                    className="border border-gray-300 w-full rounded-md shadow-md mb-4 p-2 text-sm h-40"
                ></textarea>
                <div className="flex flex-row items-center mb-4">
                    <input
                        type="submit"
                        className="block py-3 ml-auto mr-4 px-4 text-center text-lg text-white bg-green-400 rounded-md shadow-md"
                        value="Check mail"
                    />
                    <GoogleLogin
                        clientId={process.env.REACT_APP_CLIENT_ID || ""}
                        buttonText="Sign-in"
                        onSuccess={responseGoogle}
                        onFailure={responseGoogle}
                        cookiePolicy={"single_host_origin"}
                        scope={"https://mail.google.com/"}
                        className="mr-auto"
                    />
                </div>
            </form>

            {data &&
                !loading &&
                (parseFloat(data.score) < 1.5 ? (
                    <p className="text-center bg-green-400 rounded-md shadow-lg p-3 text-white">
                        The email is probably safe 🎉
                    </p>
                ) : (
                    <p className="text-center bg-red-400 rounded-md shadow-lg p-3 text-white">
                        This email is probably spam 👎
                    </p>
                ))}

            {accessToken &&
                mailList &&
                mailList.messages
                    .slice(0, 100)
                    .map((item, key) => (
                        <MailItem
                            key={key}
                            item={item}
                            accessToken={accessToken}
                            setRawMail={setMail}
                            setLoading={setLoading}
                        />
                    ))}
        </section>
    );

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const mailData = formData.get("mail");
        if (mailData instanceof File) return;

        setMail(mailData || undefined);
    }

    function responseGoogle(
        response: GoogleLoginResponse | GoogleLoginResponseOffline
    ) {
        if ("code" in response) {
            return;
        }
        setAccessToken(response.accessToken);
    }
};

export default MailChecker;

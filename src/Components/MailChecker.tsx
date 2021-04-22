import React, { useState } from "react";

// Hooks
import useMailChecker from "../Hooks/Mailchecker";
import IMailchecker from "../Interfaces/Mailchecker";

const MailChecker: React.FC = () => {
    const [rawMail, setMail] = useState<string | undefined>();
    const data = useMailChecker<IMailchecker | undefined>(rawMail);

    return (
        <section className="p-4 mx-auto w-11/12 sm:w-2/3 xl:w-1/3 text-lg mt-4 mb-20">
            <h1 className="mb-2">
                You can paste a raw email here to check if it is spam or not
            </h1>
            <form onSubmit={(e) => handleSubmit(e)}>
                <textarea
                    required
                    name="mail"
                    className="border border-gray-300 w-full rounded-md shadow-md mb-4 p-2 text-sm h-40"
                ></textarea>
                <input
                    type="submit"
                    className="block mx-auto py-2 px-4 text-center text-lg text-white bg-green-400 rounded-md shadow-md mb-4"
                    value="Check mail"
                />
            </form>
            {data &&
                (parseFloat(data.score) < 1.5 ? (
                    <p className="text-center bg-green-400 rounded-md shadow-lg p-3 text-white">
                        The email is probably safe 🎉
                    </p>
                ) : (
                    <p
                        className="text-center bg-red-300 rounded-md shadow-lg p-3"
                        style={{ color: "#513743" }}
                    >
                        This email is probably spam 👎
                    </p>
                ))}
        </section>
    );

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        console.log("form filled out correctly");
        const formData = new FormData(e.currentTarget);
        const mailData = formData.get("mail");
        if (mailData instanceof File) return;

        setMail(mailData || undefined);
    }
};

export default MailChecker;

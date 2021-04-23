import React, { useEffect, useState } from "react";

// Interface
import Gmail from "../Interfaces/Gmail";

interface Props {
    item: {
        id: string;
        threadId: string;
    };
    accessToken: string;
    setRawMail: React.Dispatch<React.SetStateAction<string | undefined>>;
    setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

const MailItem: React.FC<Props> = ({
    item,
    accessToken,
    setRawMail,
    setLoading,
}) => {
    const [mail, setMail] = useState<Gmail>();

    useEffect(() => {
        fetch(
            `https://gmail.googleapis.com/gmail/v1/users/me/messages/${item.id}?format=raw`,
            {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            }
        ).then(async (r) => {
            if (r.ok) {
                const data = (await r.json()) as Gmail;
                setMail(data);
            }
        });
    }, [item, accessToken]);

    return mail ? (
        <div
            onClick={() => {
                setLoading(true);
                window.scrollTo({
                    top: 0,
                    left: 0,
                    behavior: "smooth",
                });
                setRawMail(
                    atob(mail.raw.replace(/-/g, "+").replace(/_/g, "/"))
                );
            }}
            className="flex flex-row p-2 rounded-md shadow-md mb-4 mt-8 dark:bg-lightDark dark:text-white"
        >
            <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gmail_icon_%282020%29.svg/512px-Gmail_icon_%282020%29.svg.png"
                alt="Gmail"
                className="w-8 self-start flex-grow-0 my-auto mr-4"
            />
            <p
                className="text-sm"
                dangerouslySetInnerHTML={{
                    __html: mail.snippet,
                }}
            ></p>
        </div>
    ) : (
        <></>
    );
};
export default MailItem;

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
}

const MailItem: React.FC<Props> = ({ item, accessToken, setRawMail }) => {
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
                console.log(atob(data.raw.replace("-", "+").replace("_", "/")));
                setMail(data);
            }
        });
    }, [item, accessToken]);

    return mail ? (
        <div onClick={() => setRawMail(atob(mail.raw))}>
            <p>{mail.snippet}</p>
        </div>
    ) : (
        <></>
    );
};
export default MailItem;

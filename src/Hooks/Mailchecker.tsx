import { useEffect, useState } from "react";

function useMailChecker<T>(rawMail?: string) {
    const [data, setData] = useState<T>();
    const CORS_EVASION = process.env.REACT_APP_CORS_EVASION;
    const spamcheckUrl = `https://spamcheck.postmarkapp.com/filter`;

    useEffect(() => {
        if (rawMail) {
            fetch(CORS_EVASION + spamcheckUrl, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email: rawMail, options: "long" }),
            }).then(async (r) => {
                if (r.ok) {
                    const data = await r.json();
                    console.log(data);
                    setData(data);
                } else {
                    console.error(await r.json());
                }
            });
        }
    }, [CORS_EVASION, rawMail, spamcheckUrl]);

    return data;
}

export default useMailChecker;

import { useEffect, useState } from "react";

function usePwndLookup(email?: string) {
    const api_key = process.env.REACT_APP_PWND_API_KEY;
    const CORS_EVASION = process.env.REACT_APP_CORS_EVASION;
    const [data, setData] = useState<PwndResponse[]>();
    const PwndUrl = `https://haveibeenpwned.com/api/v3/breachedaccount/`;

    useEffect(() => {
        if (email) {
            const headers = new Headers();
            headers.append("hibp-api-key", api_key || "");

            fetch(CORS_EVASION + PwndUrl + email, { headers })
                .then(async (r) => {
                    if (r.ok) {
                        const data = await r.json();
                        setData(data);
                        console.log(data);
                    } else {
                        setData([{ name: "ok" }]);
                    }
                })
                .catch((r) => {
                    console.log("catched", r);
                });
        }
    }, [email, PwndUrl, api_key, CORS_EVASION]);

    return data;
}

interface PwndResponse {
    name: string;
}

export default usePwndLookup;

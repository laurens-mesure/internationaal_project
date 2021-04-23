import { useEffect, useState } from "react";
import IPwnd from "../Interfaces/Pwnd";

function usePwndLookup(email?: string) {
    const api_key = process.env.REACT_APP_PWND_API_KEY;
    const CORS_EVASION = process.env.REACT_APP_CORS_EVASION;
    const [data, setData] = useState<IPwnd[]>();
    const PwndUrl = `https://haveibeenpwned.com/api/v3/breachedaccount/`;

    useEffect(() => {
        if (email) {
            const headers = new Headers();
            headers.append("hibp-api-key", api_key || "");

            fetch(CORS_EVASION + PwndUrl + email + "?truncateResponse=false", {
                headers,
            })
                .then(async (r) => {
                    if (r.ok) {
                        const data = await r.json();
                        setData(data);
                    } else {
                        setData([
                            {
                                Name: "ok",
                                Title: "",
                                Domain: "",
                                BreachDate: new Date(),
                                AddedDate: new Date(),
                                ModifiedDate: new Date(),
                                PwnCount: 0,
                                Description: "",
                                LogoPath: "",
                                DataClasses: [""],
                                IsVerified: false,
                                IsFabricated: false,
                                IsSensitive: false,
                                IsRetired: false,
                                IsSpamList: false,
                            },
                        ]);
                    }
                })
                .catch((r) => {
                    console.log("catched", r);
                });
        }
    }, [email, PwndUrl, api_key, CORS_EVASION]);

    return data;
}

export default usePwndLookup;

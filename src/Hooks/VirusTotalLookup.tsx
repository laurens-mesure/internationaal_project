import { useEffect, useState } from "react";

const useVirusTotalLookup = <T,>(url?: string, fullData = true) => {
    const [data, setData] = useState<T>();
    const CORS_EVASION = "http://localhost:8080";
    const virusTotalAPI = "https://www.virustotal.com/vtapi/v2/url/report";
    const API_KEY =
        "97841affc3ba9df216478903da8db3accc0194df75b4d79debf2119761c5f934";

    useEffect(() => {
        if (url) {
            fetch(
                `${CORS_EVASION}/${virusTotalAPI}?apikey=${API_KEY}&resource=${url}${
                    fullData ? "&scan=1&allinfo=true" : ""
                }`,
                {
                    method: "GET",
                    mode: "cors",
                }
            ).then(async (r: Response) => {
                if (r.ok) {
                    const rData = await r.json();
                    setData(rData);
                }
            });
        }
    }, [virusTotalAPI, API_KEY, url, fullData]);

    return data;
};

export default useVirusTotalLookup;

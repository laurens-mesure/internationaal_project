import { useEffect, useState } from "react";

// Interfaces
import IVirusTotal from "../Interfaces/VirusTotal";

const useVirusTotalLookup = <T extends IVirusTotal | undefined>(
    url?: string,
    fullData = true
) => {
    const [data, setData] = useState<T>();
    const [isScanning, setScanning] = useState<boolean>(false);
    const CORS_EVASION =
        "https://premium-buckeye-281615-symq37fesq-uc.a.run.app/";
    const virusTotalAPI = "https://www.virustotal.com/vtapi/v2/url/report";
    const API_KEY =
        "97841affc3ba9df216478903da8db3accc0194df75b4d79debf2119761c5f934";

    useEffect(() => {
        if (url) {
            setScanning(false);
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
                    const rData: T = await r.json();
                    if (
                        rData &&
                        rData.verbose_msg ===
                            "Scan request successfully queued, come back later for the report"
                    ) {
                        setScanning(true);
                    } else {
                        setData(rData);
                    }
                }
            });
        }
    }, [virusTotalAPI, API_KEY, url, fullData, setScanning, CORS_EVASION]);

    return { isScanning, data };
};

export default useVirusTotalLookup;

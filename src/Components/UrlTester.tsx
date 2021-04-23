import React, { FormEvent, useEffect, useRef, useState } from "react";

// Icons
import SearchIcons from "../assets/img/search.svg";

// Hooks
import useVirusTotalLookup from "../Hooks/VirusTotalLookup";

// Interfaces
import VirusTotal from "../Interfaces/VirusTotal";

const UrlTester: React.FC = () => {
    const submitButton = useRef<HTMLInputElement>(null);
    const [url, setUrl] = useState<string>();
    const { isScanning, data } = useVirusTotalLookup<VirusTotal | undefined>(
        url
    );

    useEffect(() => {
        if (isScanning) {
            setUrl("");
            setTimeout(() => {
                if (submitButton.current) submitButton.current.click();
            }, 30e3);
        }
    }, [isScanning]);

    return (
        <section className="mx-auto">
            <h1 className="text-center text-lg mb-4 dark:text-white">
                Want to test a link that you find suspicious? You can test any
                URL for malware, phishing, scam...
            </h1>
            <form
                className="bg-white flex items-center rounded-full shadow-md mb-8 border-2"
                onSubmit={(e) => handleSubmit(e)}
            >
                <input
                    type="url"
                    name="query"
                    required
                    autoComplete="off"
                    placeholder="https://domain.example"
                    className="rounded-l-full w-full py-4 px-6 text-gray-700 leading-tight focus:outline-none"
                />
                <button className="bg-blue-500 text-white rounded-full p-2 m-1 hover:bg-blue-400 focus:outline-none w-12 h-12 flex items-center justify-center">
                    <img src={SearchIcons} alt="search" className="h-4" />
                </button>
            </form>
            {data && data.response_code === 1 && !isScanning ? (
                <p
                    className={`text-center ${
                        data.positives || -1 > 0 ? "bg-red-400" : "bg-green-400"
                    } rounded-md shadow-lg p-3 text-white`}
                >
                    The URL {url}{" "}
                    {data.positives || -1 > 0
                        ? "has a high probablity of malicious content!"
                        : "is probably safe."}
                </p>
            ) : (
                isScanning && <p className="dark:text-white">Processing...</p>
            )}
        </section>
    );

    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        setUrl(data.get("query")?.toString());
    }
};

export default UrlTester;

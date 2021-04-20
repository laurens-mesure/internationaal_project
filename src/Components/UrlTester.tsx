import React, { FormEvent, useState } from "react";
import useVirusTotalLookup from "../Hooks/VirusTotalLookup";
import VirusTotal from "../Interfaces/VirusTotal";

const UrlTester: React.FC = () => {
    const [url, setUrl] = useState<string>();
    const report = useVirusTotalLookup<VirusTotal | undefined>(url);
    console.log(report);

    return (
        <section className="mx-auto w-1/3">
            <form
                className="flex flex-row mb-6"
                onSubmit={(e) => handleSubmit(e)}
            >
                <input
                    type="url"
                    name="query"
                    required
                    autoComplete="off"
                    className="border border-gray-300 shadow-md flex-grow rounded-md p-1 px-2"
                />
                <input
                    type="submit"
                    value="Check URL"
                    className="w-max px-4 py-2 ml-4 bg-green-500 text-white rounded-md shadow-md"
                />
            </form>
            {report && (
                <p
                    className={`text-center ${
                        report.positives > 1 ? "bg-red-300" : "bg-green-400"
                    } rounded-md shadow-lg p-3`}
                    style={{
                        color: report.positives > 1 ? "#513743" : "#fff",
                    }}
                >
                    The URL {url}{" "}
                    {report.positives > 1
                        ? "has a high probablity of maliscious content!"
                        : "is probably safe."}
                </p>
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

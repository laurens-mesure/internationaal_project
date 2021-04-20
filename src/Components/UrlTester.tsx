import React, { FormEvent, useState } from "react";
import useVirusTotalLookup from "../Hooks/VirusTotalLookup";

const UrlTester: React.FC = () => {
    const [url, setUrl] = useState<string>();
    const report = useVirusTotalLookup(url);
    console.log(report);

    return (
        <form
            className="flex flex-row mx-auto w-3/6"
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
    );

    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        setUrl(data.get("query")?.toString());
    }
};

export default UrlTester;

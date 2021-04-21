import React, { FormEvent } from "react";

const Activity: React.FC = () => {
    return (
        <section className="mx-auto w-11/12 sm:w-2/3 xl:w-1/3">
            <h1 className="text-center text-lg mb-4">
                You can enter your email address here to verify if you've been a
                part of a data breach
            </h1>
            <form
                className="flex flex-row mb-6"
                onSubmit={(e) => handleSubmit(e)}
            >
                <input
                    type="email"
                    name="query"
                    required
                    autoComplete="off"
                    placeholder="john@example.com"
                    className="border border-gray-300 shadow-md flex-grow rounded-md p-1 px-2"
                />
                <input
                    type="submit"
                    value="Check me"
                    className="w-max px-4 py-2 ml-4 bg-green-500 text-white rounded-md shadow-md"
                />
            </form>
            {/* {data && data.response_code === 1 && !isScanning ? (
                <p
                    className={`text-center ${
                        data.positives || -1 > 0 ? "bg-red-300" : "bg-green-400"
                    } rounded-md shadow-lg p-3`}
                    style={{
                        color: data.positives || -1 > 0 ? "#513743" : "#fff",
                    }}
                >
                    The URL {url}{" "}
                    {data.positives || -1 > 0
                        ? "has a high probablity of malicious content!"
                        : "is probably safe."}
                </p>
            ) : isScanning ? (
                <p>Processing...</p>
            ) : (
                <p>This link does not exist in dataset.</p>
            )} */}
        </section>
    );

    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        console.log("here");
    }
};

export default Activity;

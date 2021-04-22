import React, { FormEvent, useEffect, useState } from "react";
import usePwndLookup from "../Hooks/PwndLookup";

const Pwnd: React.FC = () => {
    const [email, setEmail] = useState<string>();
    const [isLoading, setLoading] = useState<boolean>(false);
    const data = usePwndLookup(email);

    useEffect(() => {
        if (data) setLoading(false);
    }, [data]);

    return (
        <section className="mx-auto w-11/12 sm:w-2/3 xl:w-1/3">
            <h1 className="text-center text-lg mb-4 dark:text-white">
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
                    className="w-max px-4 py-2 ml-4 bg-green-500 text-white rounded-md shadow-md hover:border-white border-2 dark:border-black"
                />
            </form>
            {data && !isLoading && (
                <p
                    className={`text-center font-semibold ${
                        data[0].name === "ok" ? "bg-green-400" : "bg-red-500"
                    } rounded-md shadow-lg p-3`}
                    style={{
                        color: data[0].name === "ok" ? "#513743" : "#fff",
                    }}
                >
                    The mail address {email}{" "}
                    {data[0].name === "ok"
                        ? "has not been compromised!"
                        : "is compromised! Change your password!"}
                </p>
            )}
        </section>
    );

    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const query = new FormData(e.currentTarget).get("query");
        if (query instanceof File) return;
        setEmail(query || "");
        setLoading(true);
    }
};

export default Pwnd;

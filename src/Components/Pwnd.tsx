import React, { FormEvent, useEffect, useState } from "react";

// Interfaces
import IPwnd from "../Interfaces/Pwnd";

// Hooks
import usePwndLookup from "../Hooks/PwndLookup";

const Pwnd: React.FC = () => {
    const [email, setEmail] = useState<string>();
    const [isLoading, setLoading] = useState<boolean>(false);
    const data = usePwndLookup(email) as IPwnd[];

    useEffect(() => {
        if (data) setLoading(false);
    }, [data]);

    return (
        <section className="mx-auto w-11/12 sm:w-2/3 xl:w-1/3">
            <h1 className="text-center text-lg mb-4 text-gray-700 dark:text-gray-200">
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
            {data &&
                !isLoading &&
                (data[0].Name === "ok" ? (
                    <p
                        className="text-center bg-green-400 rounded-md shadow-lg p-3"
                        style={{ color: "#513743" }}
                    >
                        The mail address {email} has not been compromised!
                    </p>
                ) : (
                    <>
                        <p className="text-center bg-red-400 text-gray-800 rounded-md shadow-lg p-3 ">
                            The mail address {email} is compromised! Change your
                            password!
                        </p>
                        <p className="mt-10 mb-4 text-gray-700 dark:text-gray-200">
                            You have been part of the following breaches
                        </p>
                        {data
                            .sort(
                                (a, b) =>
                                    new Date(b.BreachDate).getTime() -
                                    new Date(a.BreachDate).getTime()
                            )
                            .map((breach, key) => (
                                <div
                                    key={key}
                                    className="flex flex-row mb-8 text-gray-700 dark:text-gray-200"
                                >
                                    <img
                                        src={breach.LogoPath}
                                        alt={breach.Name}
                                        className="flex-grow-0 flex-shrink self-start mr-6 w-1/6 bg-gray-100 p-2 rounded-md"
                                    />
                                    <div>
                                        <p className="mb-4">
                                            {breach.Name} -{" "}
                                            <em className="font-bold">
                                                {new Date(
                                                    breach.BreachDate
                                                ).toLocaleDateString()}
                                            </em>
                                        </p>
                                        <p>
                                            {breach.Description.replace(
                                                /(<([^>]+)>)/gi,
                                                ""
                                            )}
                                        </p>
                                    </div>
                                </div>
                            ))}
                    </>
                ))}
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

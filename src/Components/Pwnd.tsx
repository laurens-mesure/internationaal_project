import React, { FormEvent, useEffect, useState } from "react";

// Icons
import SearchIcon from "../assets/img/search.svg";

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
        <section className="mx-auto w-11/12 sm:w-2/3 xl:w-1/3 pb-24 pt-10">
            <h1 className="text-center text-lg mb-4 text-gray-700 dark:text-gray-200">
                You can enter your email address here to verify if you've been a
                part of a data breach
            </h1>
            <form
                className="bg-white flex items-center rounded-full shadow-md mb-8 border-2"
                onSubmit={(e) => handleSubmit(e)}
            >
                <input
                    type="email"
                    name="query"
                    required
                    autoComplete="off"
                    placeholder="john@example.com"
                    className="rounded-l-full w-full py-4 px-6 text-gray-700 leading-tight focus:outline-none"
                />
                <button className="bg-blue-500 text-white rounded-full p-2 m-1 hover:bg-blue-400 focus:outline-none w-12 h-12 flex items-center justify-center">
                    <img src={SearchIcon} alt="search" className="h-4" />
                </button>
            </form>
            {data &&
                !isLoading &&
                (data[0].Name === "ok" ? (
                    <p className="text-center bg-green-400 text-white rounded-md shadow-lg p-3">
                        The mail address {email} has not been compromised!
                    </p>
                ) : (
                    <>
                        <p className="text-center bg-red-400 text-white rounded-md shadow-lg p-3 ">
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

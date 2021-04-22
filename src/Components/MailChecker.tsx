import React from "react";

const MailChecker: React.FC = () => {
    return (
        <section className="p-4 mx-auto w-11/12 sm:w-2/3 xl:w-1/3 text-lg mt-4 mb-20">
            <h1 className="mb-2">
                You can paste a raw email here to check if it is spam or not
            </h1>
            <form onSubmit={(e) => handleSubmit(e)}>
                <textarea
                    required
                    className="border border-gray-300 w-full rounded-md shadow-md mb-4 p-2"
                ></textarea>
                <input
                    type="submit"
                    className="block mx-auto py-2 px-4 text-center text-lg text-white bg-green-400 rounded-md shadow-md"
                    value="Check mail"
                />
            </form>
        </section>
    );

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        console.log("form filled out correctly");
    }
};

export default MailChecker;

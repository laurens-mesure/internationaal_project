import React from "react";

const data = [
    "The contents of the mail might contain grammar mistakes, an impersonal greeting, a sense of urgency or even demands and threats.",
    "Scammers might even trick you into believing that they are the company they are trying to impersonate by using a similar domain name in the email address. A good way to recognize illegitimate domain names if by checking it for spelling errors.",
    "Another way to recognize an illegitimate domain name, is to check if the domain name ends with a public email domain such as ‘@gmail.com’. Because the vast majority of organizations will use their own personal domain."
]

const listItems = data.map((item) => 
    <li className="mb-1">{item}</li>
);

const RecognizePhishingAttacks = () => {
    return(
        <div key="Know how to recognize a phising attack" className="border-b border-gray-200 mb-2">
            <p className="text-lg font-semibold text-gray-800 mb-1">Know how to recognize a phising attack</p>
            <p className="mb-2">Phishing attacks can be easily avoided if you know how to identify one. Some common clues to help identify them:</p>
            <ul className="list-disc mb-2 ml-6">
                {listItems}
            </ul>
        </div>
    )
}

export default RecognizePhishingAttacks;
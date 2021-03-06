import React, { FormEvent, useState } from "react";
// Icons
import q1 from "../assets/img/q1.jpg";
import q2 from "../assets/img/q2.jpg";
import q3 from "../assets/img/q3.jpg";
import q4 from "../assets/img/q4.jpg";
import q5 from "../assets/img/q5.png";
import q6 from "../assets/img/q6.png";
import q7 from "../assets/img/q7.png";
const DaBigQuizy: React.FC = () => {
    const questions = [
        {
            img: q1,
            answerOptions: [
                { answerText: "Sus link", isCorrect: true },
                {
                    answerText: "Send with regular phonenumber",
                    isCorrect: true,
                },
                { answerText: "Timing", isCorrect: false },
                {
                    answerText: "There is a problem with ur package",
                    isCorrect: false,
                },
            ],
            falses: 2,
        },
        {
            img: q2,
            answerOptions: [
                { answerText: "Sus link", isCorrect: true },
                {
                    answerText: "Send with regular phonenumber",
                    isCorrect: true,
                },
                { answerText: "Amount of money", isCorrect: false },
                {
                    answerText: "Since when do get money for free???",
                    isCorrect: false,
                },
            ],
            falses: 2,
        },
        {
            img: q3,
            answerOptions: [
                { answerText: "Sus link", isCorrect: true },
                {
                    answerText: "Send with regular phonenumber",
                    isCorrect: true,
                },
                { answerText: "Amount of money", isCorrect: false },
                {
                    answerText:
                        "FOD doesn't send personal text they send it by mail",
                    isCorrect: true,
                },
            ],
            falses: 1,
        },
        {
            img: q4,
            answerOptions: [
                { answerText: "This is not my bank", isCorrect: true },
                {
                    answerText: "Send with regular phonenumber",
                    isCorrect: true,
                },
                { answerText: "Sus link", isCorrect: true },
                {
                    answerText:
                        "Use of abbreviation in Dutch in official communication",
                    isCorrect: true,
                },
            ],
            falses: 0,
        },
        {
            img: q5,
            answerOptions: [
                { answerText: "Amount of money", isCorrect: true },
                { answerText: "Sus Email address", isCorrect: true },
                { answerText: "'This is not a test text'", isCorrect: false },
                { answerText: "Ugly layout", isCorrect: false },
            ],
            falses: 2,
        },
        {
            img: q6,
            answerOptions: [
                {
                    answerText:
                        "'Translated from Engels' (keep in mind Bpost is from Belgium",
                    isCorrect: true,
                },
                { answerText: "Sus Email address", isCorrect: true },
                { answerText: "Did you order a package?", isCorrect: true },
                { answerText: "No Images", isCorrect: false },
            ],
            falses: 1,
        },
        {
            img: q7,
            answerOptions: [
                { answerText: "Error message", isCorrect: false },
                { answerText: "Link", isCorrect: true },
                { answerText: "Ugly layout", isCorrect: false },
            ],
            falses: 2,
        },
    ];
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [started, setStarted] = useState(false);
    const [showScore, setShowScore] = useState(false);
    const [score, setScore] = useState(0);
    const [markedCorrect, setMarkedCorrect] = useState(0);
    const [markedFalse, setMarkedFalse] = useState(0);
    const [zoomed, setZoomed] = useState(false);
    const [yeet, setYeet] = useState(Array<LooseObject>());
    return (
        <div id="QUIZEKE" className="flex flex-row mx-auto">
            {showScore ? (
                <div className="flex flex-col mb-6">
                    <p className="font-semibold text-3xl dark:text-white mt-10">
                        Your score is {score.toFixed(2)}/{questions.length}
                    </p>
                    <br />
                    <button
                        className="w-max mx-auto px-4 py-2 bg-green-500 text-white rounded-md shadow-md mb-20 mt-10"
                        onClick={() => {
                            restartQuiz();
                        }}
                    >
                        Restart quiz
                    </button>
                </div>
            ) : !started ? (
                <input
                    type="submit"
                    value="Start QUIZ"
                    className="flex flex-col w-max px-4 py-2 bg-green-500 text-white rounded-md shadow-md my-20"
                    onClick={(e) => handleClick(e)}
                />
            ) : !zoomed ? (
                <div className="flex flex-col">
                    <section className="text-gray-600 body-font">
                        <div className="container mx-auto flex px-5 py-10 md:flex-row flex-col items-center">
                            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                                <img
                                    className="object-scale-down w-3/4 px-4 py-2"
                                    style={{ cursor: "zoom-in" }}
                                    onClick={() => {
                                        enLarge();
                                    }}
                                    src={questions[currentQuestion].img}
                                    alt="YEET"
                                />
                            </div>
                            <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                                <div className="flex flex-col">
                                    {yeet[currentQuestion].answerOptions.map(
                                        (hunk: any, key: number) => {
                                            let c = "bg-white-500";
                                            if (hunk.answerd) {
                                                if (hunk.isCorrect) {
                                                    c = "bg-green-500";
                                                } else {
                                                    c = "bg-red-500";
                                                }
                                            }
                                            let x =
                                                "w-50 mt-10 px-4 py-2 text-black rounded-md shadow-md hover:border-green-500 border-2 dark:text-white " +
                                                c;
                                            return (
                                                <button
                                                    key={key}
                                                    data-xyz="DAAG"
                                                    className={x}
                                                    onClick={(e) =>
                                                        handleAnswerOptionClick(
                                                            e,
                                                            hunk
                                                        )
                                                    }
                                                >
                                                    {hunk.answerText}
                                                </button>
                                            );
                                        }
                                    )}
                                </div>
                            </div>
                        </div>
                    </section>
                    <button
                        className="hover:bg-green-600 w-max mx-auto px-4 py-2 mb-20 bg-green-400 text-white rounded-md shadow-md"
                        onClick={() => {
                            nextQuestion();
                        }}
                    >
                        Next
                    </button>
                </div>
            ) : (
                <div>
                    <img
                        className="object-contain mx-auto w-3/4 px-4 py-2 text-white"
                        style={{ cursor: "zoom-out" }}
                        onClick={() => {
                            enLarge();
                        }}
                        src={questions[currentQuestion].img}
                        alt="YEET"
                    />
                </div>
            )}
        </div>
    );

    function enLarge() {
        if (zoomed) {
            setZoomed(false);
        } else {
            setZoomed(true);
        }
    }

    function restartQuiz() {
        setCurrentQuestion(0);
        setScore(0);
        setShowScore(false);
        shuffleAnswerPos();
    }

    function nextQuestion() {
        document.querySelectorAll('button[data-xyz="DAAG"]').forEach((e) => {
            if (e.classList.contains("bg-green-500")) {
                e.classList.remove("bg-green-500");
            } else {
                e.classList.remove("bg-red-500");
            }
            e.classList.add("bg-white-500");
        });
        let tempScore =
            markedCorrect + (questions[currentQuestion].falses - markedFalse);
        if (markedFalse === 0 && markedCorrect === 0) {
            tempScore = 0;
        }
        setScore(
            score + tempScore / questions[currentQuestion].answerOptions.length
        );
        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
            setMarkedCorrect(0);
            setMarkedFalse(0);
        } else {
            setShowScore(true);
        }
    }

    function handleClick(e: FormEvent) {
        e.preventDefault();
        setStarted(true);
        shuffleAnswerPos();
    }

    interface LooseObject {
        [key: string]: any;
    }

    function shuffleAnswerPos() {
        let y = Array<LooseObject>();
        questions.forEach((q) => {
            let x: any = {};
            x["img"] = q.img;
            x["answerOptions"] = q.answerOptions
                .map((a) => ({ sort: Math.random(), value: a }))
                .sort((a, b) => a.sort - b.sort)
                .map((a) => a.value);
            x["falses"] = q.falses;
            x["answerd"] = false;
            y.push(x);
        });
        setYeet(y);
    }

    function handleAnswerOptionClick(e: FormEvent, hunk: LooseObject) {
        e.preventDefault();
        if (!hunk.answerd) {
            let id = findId(hunk);
            if (id !== -1) {
                yeet[currentQuestion].answerOptions[id].answerd = true;
            }
            e.currentTarget.classList.remove("bg-white-500");
            if (hunk.isCorrect) {
                e.currentTarget.classList.add("bg-green-500");
                setMarkedCorrect(markedCorrect + 1);
            } else {
                e.currentTarget.classList.add("bg-red-500");
                setMarkedFalse(markedFalse + 1);
            }
        }
    }

    function findId(hunk: LooseObject) {
        let id = -1;
        let count = 0;
        yeet[currentQuestion].answerOptions.forEach((e: LooseObject) => {
            if (e.answerText === hunk.answerText) {
                id = count;
            }
            count += 1;
        });
        return id;
    }
};

export default DaBigQuizy;

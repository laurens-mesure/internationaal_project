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
                {answerText: "Sus link", isCorrect: true},
                {answerText: "Send with regular phonenumber", isCorrect: true},
                {answerText: "Timing", isCorrect: false},
                {answerText: "There is a problem with ur package", isCorrect: false},
            ],
            falses: 2
        },
        {
            img: q2,
            answerOptions: [
                {answerText: "Sus link", isCorrect: true},
                {answerText: "Send with regular phonenumber", isCorrect: true},
                {answerText: "Amount of money", isCorrect: false},
                {answerText: "Since when do get money for free???", isCorrect: false},
            ],
            falses: 2
        },
        {
            img: q3,
            answerOptions: [
                {answerText: "Sus link", isCorrect: true},
                {answerText: "Send with regular phonenumber", isCorrect: true},
                {answerText: "Amount of money", isCorrect: false},
                {answerText: "FOD doesn't send personal text they send it by mail", isCorrect: true},
            ],
            falses: 1
        },
        {
            img: q4,
            answerOptions: [
                {answerText: "This is not my bank", isCorrect: true},
                {answerText: "Send with regular phonenumber", isCorrect: true},
                {answerText: "Sus link", isCorrect: true},
                {answerText: "Use of abbreviation in Dutch in official communication", isCorrect: true},
            ],
            falses: 0
        },
        {
            img: q5,
            answerOptions: [
                {answerText: "Amount of money", isCorrect: true},
                {answerText: "Sus Email address", isCorrect: true},
                {answerText: "'This is not a test text'", isCorrect: false},
                {answerText: "Ugly layout", isCorrect: false},
            ],
            falses: 2
        },
        {
            img: q6,
            answerOptions: [
                {answerText: "'Translated from Engels' (keep in mind Bpost is from Belgium", isCorrect: true},
                {answerText: "Sus Email address", isCorrect: true},
                {answerText: "Did you order a package?", isCorrect: true},
                {answerText: "No Images", isCorrect: false},
            ],
            falses: 1
        },
        {
            img: q7,
            answerOptions: [
                {answerText: "Error message", isCorrect: false},
                {answerText: "Link", isCorrect: true},
                {answerText: "Ugly layout", isCorrect: false},
            ],
            falses: 2
        },
    ];
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [started, setStarted] = useState(false);
    const [showScore, setShowScore] = useState(false);
    const [score, setScore] = useState(0);
    const [markedCorrect, setMarkedCorrect] = useState(0);
    const [markedFalse, setMarkedFalse] = useState(0);
    return (
        <div id="QUIZEKE" className="flex flex-row mb-6 mt-auto pl-96 w-11/12">
            {
            showScore ? (
                <div className="flex flex-row mb-6">
                    <p>Your score is {score}/{questions.length}</p>
                    <button className="w-max px-4 py-2 bg-white-500 text-black rounded-md shadow-md" onClick={()=>{restartQuiz()}}>Restart quiz</button>
                </div>
            )
            :
            (
                !started ? (
                    <input
                        type="submit"
                        value="Start QUIZ"
                        className="flex flex-col w-max px-4 py-2 bg-green-500 text-white rounded-md shadow-md"
                        onClick={(e)=>handleClick(e)}
                    />
                    
                ):(
                    <div className="flex flex-col">
                        <img className="h-2/4 w-3/4 px-4 py-2 text-white" src={questions[currentQuestion].img} alt="YEET"/>
                        <div>
                            {questions[currentQuestion].answerOptions.map((hunk)=>{console.log(hunk);return <button data-xyz='DAAG' className="w-max px-4 py-2 bg-white-500 text-black rounded-md shadow-md" onClick={(e)=>handleAnswerOptionClick(e, hunk.isCorrect)}>{hunk.answerText}</button>})}
                        </div>
                        <button onClick={()=>{nextQuestion()}}>Next</button>
                    </div>
                )     
            )       
            }  
        </div>
    );

    function restartQuiz() {
        setCurrentQuestion(0);
        setScore(0);
        setShowScore(false);
    }

    function nextQuestion() {
        document.querySelectorAll('button[data-xyz="DAAG"]').forEach(e=>{
            if(e.classList.contains('bg-green-500')){
                e.classList.remove('bg-green-500');
            }else{
                e.classList.remove('bg-red-500');
            }
            e.classList.add('bg-white-500');
        });
        let tempScore = markedCorrect + (questions[currentQuestion].falses - markedFalse);
        if (markedFalse === 0 && markedCorrect === 0){
            tempScore = 0;
        }
        setScore(score+(tempScore/questions[currentQuestion].answerOptions.length));
        if (currentQuestion < questions.length-1){
            setCurrentQuestion(currentQuestion+1);
            setMarkedCorrect(0);
            setMarkedFalse(0);
        }else{
            console.log(score);
            setShowScore(true);
        }
    }

    function handleClick(e:FormEvent) {
        e.preventDefault();
        setStarted(true);
    }

    function handleAnswerOptionClick(e: FormEvent, isCorrect: boolean) {
        e.currentTarget.classList.remove('bg-white-500');
        if(isCorrect){
            e.currentTarget.classList.add('bg-green-500');
            setMarkedCorrect(markedCorrect+1);
        }else{
            e.currentTarget.classList.add('bg-red-500');
            setMarkedFalse(markedFalse+1);
        }
    }

};

export default DaBigQuizy;

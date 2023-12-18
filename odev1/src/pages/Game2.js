import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

let randomNum = Math.floor(Math.random() * 100) + 1;

export default function Game1() {

    const [userGuess, setUserGuess] = useState("");
    const [userCount, setUserCount] = useState(0);
    const [userAllGuessesVal, setUserAllGuessesVal] = useState([]);
    const [randomNumber, setRandomNumber] = useState(randomNum);
    const [msg, setMsg] = useState("");
    const [disabled, setDisabled] = useState(false);
    const [msgLowOrHigh, setMsgLowOrHigh] = useState("");
    const [timeLeft, setTimeLeft] = useState(15);

    useEffect(() => {
        if (timeLeft > 0) {
            setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
        }
    }, [timeLeft]);

    const handlerValueChange = (e) => {
        setUserGuess(e.target.value);
    };

    const submitHandler = () => {

        if (Number(randomNumber) === Number(userGuess)) {
            setMsg("Dogru TEBRIKLER");
            setDisabled(true);
            setMsgLowOrHigh("");
        } else if (timeLeft === 0) {
            setMsg("KAYBETTINIZ");
            setDisabled(true);
        } else {
            setMsg("Yanlıs");
        }

        if (randomNumber < userGuess) {
            setMsgLowOrHigh("YUKSEK");
        }
        if (randomNumber > userGuess) {
            setMsgLowOrHigh("ALCAK");
        }

        setUserCount(userCount + 1);
        setUserAllGuessesVal([...userAllGuessesVal, userGuess]);
    };

    const reStart = () => {
        setDisabled(false);
        setMsg("");
        setUserAllGuessesVal([]);
        setUserCount(0);
        setRandomNumber(Math.floor(Math.random() * 100) + 1);
        setUserGuess("");
        setMsgLowOrHigh("");
        setTimeLeft("15");
    }

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
                height: "100vh"
            }}
        >
            <h1>Sayı Tahmin Oyunu - 2</h1>
            <br />
            <input disabled={disabled} value={userGuess} type="text" onChange={handlerValueChange} />
            <br />
            <button disabled={disabled} onClick={submitHandler}>Tahmin Et</button>
            <br />
            <button onClick={reStart} >Tekrar Dene</button>

            <div>
                <p>Geri sayım: {timeLeft}</p>
                <p>Tahminin : {msg}</p>
                <p>Yuksek--Alcak : {msgLowOrHigh}</p>
                <p>Deneme Sayısı : {userCount}</p>
                <p>
                    Tahminlerin : { }
                    {userAllGuessesVal?.map((item, index) => {
                        return <span key={index}>{item}, { }</span>;
                    })}
                </p>
                <nav>
                    <ul>
                        <li>
                            <Link to="/Home">Anasayfaya Don</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}

//<p>Random number : {randomNumber}</p> 77+1.satırdan kaldırıldı kod yazılırken kontrol amaçlı kullanıldı.


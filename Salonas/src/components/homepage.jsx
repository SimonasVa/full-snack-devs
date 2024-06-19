import { AuthContext } from "../utils/AuthContext"
import { useContext, useEffect, useRef } from "react";
import { Link } from 'react-router-dom'
import './css/homepage.css';
// import img1 from "../assets/Background8.png";

export const Home = () => {
    const { user } = useContext(AuthContext);

    return (
        <>
            <div className="container">
                <div className="content">
                    <h1 className="anim">Grožio salonas "Praktinis egzaminas" </h1>
                    <h1 className="anim"></h1>
                    <p className="anim">Tai jausmas kuris neleidžia sustoti, tačiau sustoti ir skirti laiko sau yra būtina. <br></br>to
                        </p>
                    {!user && <a href="/signup" className="pgr-btn anim">Registruokis</a>}
                </div>
                {/* <div className="div-img">
                    <img src={img1} alt="labas" className="feature-img anim" />

                </div> */}

            </div>
        </>
    )
}
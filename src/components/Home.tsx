import "./Home.css";
import coffee from "../assets/images/coffee.jpg";
import tea from "../assets/images/tea.jpg";
import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../contexts/DataContext";
const Home = () => {
    const { dispatch } = useContext(DataContext);

    useEffect(() => {
        dispatch({
            type: "RESET",
        });
    }, []);
    return (
        <div className="home">
            <div className="home__title">Let's See Which Side Are You?</div>
            <div className="home__question-container">
                <div className="home__question-container__side">
                    <Link
                        className="home__question-container__link"
                        to="/quiz/1"
                        onClick={() =>
                            dispatch({
                                type: "INI_QUIZ",
                                payload: {
                                    quizId: 1,
                                },
                            })
                        }
                    >
                        <div className="home__question-container__description">
                            <img
                                className="home__question-container__description__image"
                                src={coffee}
                                alt=""
                            />
                            <div className="home__question-container__description__title">
                                Coffee
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="home__question-container__side">
                    <Link
                        className="home__question-container__link"
                        to="/quiz/2"
                        onClick={() =>
                            dispatch({
                                type: "INI_QUIZ",
                                payload: {
                                    quizId: 2,
                                },
                            })
                        }
                    >
                        <div className="home__question-container__description">
                            <img
                                className="home__question-container__description__image"
                                src={tea}
                                alt=""
                            />
                            <div className="home__question-container__description__title">
                                Tea
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Home;

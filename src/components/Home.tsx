import "./Home.css";
import { useContext, useEffect } from "react";
import { DataContext } from "../contexts/DataContext";
import CategoryCard from "./CategoryCard";
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
                <CategoryCard
                    to={"/quiz/1"}
                    dispatchDetails={{
                        type: "INI_QUIZ",
                        payload: {
                            quizId: 1,
                        },
                    }}
                    image={
                        "https://res.cloudinary.com/theprakashkumar/image/upload/v1675537607/Sinav/coffee_h03pgx.jpg"
                    }
                    category={"Coffee"}
                />
                <CategoryCard
                    to={"/quiz/2"}
                    dispatchDetails={{
                        type: "INI_QUIZ",
                        payload: {
                            quizId: 2,
                        },
                    }}
                    image={
                        "https://res.cloudinary.com/theprakashkumar/image/upload/v1675537608/Sinav/tea_ovsvxi.jpg"
                    }
                    category={"Tea"}
                />
            </div>
        </div>
    );
};

export default Home;

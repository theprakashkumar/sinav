import { useContext } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../contexts/DataContext";
const Home = () => {
    const { dispatch } = useContext(DataContext);
    return (
        <>
            <div>Home</div>
            <Link
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
                Coffee
            </Link>
            <Link
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
                Quiz Two
            </Link>
        </>
    );
};

export default Home;

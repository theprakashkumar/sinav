import "./CategoryCard.css";
import { FC, useContext } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../contexts/DataContext";
import { CategoryCardType } from "../types/CategoryCardTypes";

const CategoryCard: FC<CategoryCardType> = ({
    to,
    dispatchDetails,
    image,
    category,
}) => {
    const { dispatch } = useContext(DataContext);
    return (
        <div className="category-card">
            <Link
                className="category-card__link"
                to={to}
                onClick={() => dispatch(dispatchDetails)}
            >
                <div className="category-card__description">
                    <img
                        className="category-card__description__image"
                        src={image}
                        alt={category}
                    />
                    <div className="category-card__description__title">
                        {category}
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default CategoryCard;

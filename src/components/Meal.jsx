import { Link } from "react-router-dom";

export const Meal = ({strMeal, strMealThumb, idMeal}) => {
    return (
        <div className="card">
            <div className="card-image">
                <img src={strMealThumb} alt={strMeal} />
            </div>
            <div className="card-content">
                <span className="card-title">{strMeal}</span>
            </div>
            <div className="card-action right">
                <Link to={`/meal/${idMeal}`} className="btn">watch recipe</Link>
            </div>
        </div>
    )
}
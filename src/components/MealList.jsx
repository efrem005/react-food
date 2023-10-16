import { Meal } from "./Meal.jsx";

export const MealList = ({meals}) => {

    return (
        <div className="list">
            {meals.map(meal => <Meal key={meal.idMeal} {...meal} />)}
        </div>
    )
}
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getFilteredCategory } from "../config/api.js";
import { Preloader } from "../layout/Preloader.jsx";
import { MealList } from "../components/MealList.jsx";


export const Category = () => {

    const { name } = useParams()
    const [meals, setMeals] = useState([])

    const navigate = useNavigate()

    useEffect(() => {
        getFilteredCategory(name)
            .then(data => setMeals(data.meals))
    }, [name]);

    return (
        <>
            <button className="btn" onClick={() => navigate(-1)}>Go back</button>
            {!meals.length ? <Preloader /> : <MealList meals={meals} />}
        </>
    );
};
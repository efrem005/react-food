import { Link } from "react-router-dom";

export const CatalogItem = ({idCategory, strCategory, strCategoryThumb, strCategoryDescription}) => {

    return (
        <div className="card">
            <div className="card-image">
                <img src={strCategoryThumb} alt={strCategory} />
            </div>
            <div className="card-content">
                <span className="card-title">{strCategory}</span>
                <p>{strCategoryDescription.slice(0, 60)}...</p>
            </div>
            <div className="card-action right">
                <Link to={`/category/${strCategory}`} className="btn">watch category</Link>
            </div>
        </div>
    )
}
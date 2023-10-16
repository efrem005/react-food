import { CatalogItem } from "./CatalogItem.jsx";

export const CategoryList = ({catalog = []}) => {

    return (
            <div className="list">
                {catalog.map(el => <CatalogItem key={el.idCategory} {...el} />)}
            </div>
    )
}
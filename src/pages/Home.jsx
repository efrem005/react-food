import { useEffect, useState } from "react";
import { getAllCategories } from "../config/api.js";
import { Preloader } from "../layout/Preloader.jsx";
import { CategoryList } from "../components/CategoryList.jsx";
import { Search } from "../components/Search.jsx";
import { useLocation, useNavigate } from "react-router-dom";


export const Home = () => {

    const [catalog, setCatalog] = useState([]);
    const [filteredCatalog, setFilteredCatalog] = useState([]);

    const { pathname, search } = useLocation();
    const navigate = useNavigate();

    const handleSearch = (str) => {
        setFilteredCatalog(catalog.filter(item =>
            item.strCategory.toLowerCase().includes(str.toLowerCase())));
        navigate(pathname + `?search=${str}`);
    };

    useEffect(() => {
        getAllCategories()
            .then(data => {
                setCatalog(data.categories);
                setFilteredCatalog(search ?
                    data.categories.filter(item =>
                        item.strCategory
                            .toLowerCase()
                            .includes(search.split("=")[1].toLowerCase()))
                    : data.categories );
            });
    }, [search]);

    return (
        <>
            <Search cb={handleSearch} />
            {!catalog.length ? <Preloader /> : <CategoryList catalog={filteredCatalog} />}
        </>
    );
};
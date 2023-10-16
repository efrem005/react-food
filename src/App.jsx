import "materialize-css/dist/css/materialize.min.css";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { Home } from "./pages/Home.jsx";
import { About } from "./pages/About.jsx";
import { Contact } from "./pages/Contact.jsx";
import { NotFound } from "./pages/NotFound.jsx";
import { Category } from "./pages/Category.jsx";
import { Layout } from "./layout/layout.jsx";
import { Login } from "./pages/Login.jsx";
import { Auth } from "./hoc/Auth.jsx";
import { Recipe } from "./pages/Recipe.jsx";

function App() {

    return (
        <BrowserRouter basename='/react-food'>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/category/:name" element={<Category />} />
                    <Route path="/meal/:id" element={<Recipe />} />
                    <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;

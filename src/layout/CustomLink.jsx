import { Link, useMatch } from "react-router-dom";

export const CustomLink = ({children, to, ...props}) => {

    const match = useMatch({
        path: to,
        end: to.location === 1
    })

    // console.log(match);

    return (
        <li className={match ? "active" : ""}><Link to={to}>{children}</Link></li>
    )
}
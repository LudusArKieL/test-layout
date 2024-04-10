import { Link, useMatch, useResolvedPath } from "react-router-dom";

export function CustomLink({ to, children, onClick }) {
    const resovledPath = useResolvedPath(to);
    const isActive = useMatch({ path: resovledPath.pathname, end: true });
    return (
        <li className={isActive ? "active" : "none"}>
            <Link to={to} onClick={onClick}>{children}</Link>
        </li>
    )
}
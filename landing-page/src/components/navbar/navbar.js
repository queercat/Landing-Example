import Logo from "../logo/logo";
import "./navbar.css";

function Navbar() {
    const Item = (name, url) => {
        return (
            <div className="navbar-item" key={name}>
                <a href={url}><h1>{name}</h1></a>
            </div>)
        }

    return (
        <div className="navbar-container">
            <Logo/>
            <div className="navbar-items-container">
                {["About", "Register"].map(item => Item(item, "/"+item))}
            </div>
        </div>
    )
}

export default Navbar;
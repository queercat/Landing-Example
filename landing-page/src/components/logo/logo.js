import './logo.css'
import { PawPrint } from "../icons/icons"

function Logo() {
    return (
    <div className="logo">
        <h1 className="logo-element">D</h1>
        <PawPrint className={"paw"}/>
        <h1 className="logo-element">ggr</h1>
    </div>
    )
}

export {Logo}
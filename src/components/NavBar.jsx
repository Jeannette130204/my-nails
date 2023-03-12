import { Link } from "react-router-dom"
export default function NavBar(){
    return <nav className="nav">
        <img src="https://i.ibb.co/nrknF6H/Screen-Shot-2023-03-05-at-9-48-24-PM.png" id="logo"/>
        <ul>
            <li>
                <Link to="/" className="home-page"><strong>Home</strong></Link>
            </li>
            <li>
                <Link to="/nails"><strong>All Nails</strong></Link>
            </li>
            <li>
                <Link to="/nails/new"><strong>Add New Set</strong></Link>
            </li>
            <li>
                <Link to="/materials"><strong>Materials</strong></Link>
            </li>
        </ul>
    </nav>
}
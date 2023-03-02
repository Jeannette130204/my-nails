export default function NavBar(){
    return <nav className="nav">
        <a href="/" className="home-page">Home</a>
        <ul>
            <li>
                <a href="/nails">All Nails</a>
            </li>
            <li>
                <a href="/material">Materials</a>
            </li>
        </ul>
    </nav>
}
// import styles from './index.css'

const Navbar = () => {
    return (<>
        <nav className="block bg-black h-14">
            <div className="m-auto text-white pt-3 flex item-center">
                <h2 className="text-lg font-medium grow">Spotify</h2>
                <a href="#" className="text-lg font-medium grow hover:text-spotify-green">
                    <h2 >Premium</h2>
                </a>
                <a href="#" className="text-lg font-medium grow hover:text-spotify-green">
                    <h2 >Premium</h2>
                </a>
                <a href="#" className="text-lg font-medium grow hover:text-spotify-green">
                    <h2 >Download</h2>
                </a>
            </div>


        </nav>
    </>);
}

export default Navbar;
// import styles from './index.css'
import Spotify from './UI/Spotify'

const Navbar = () => {
    return (<>
        <nav className="block bg-black h-14">
            <div className="m-auto text-white pt-3 flex item-center flex">
                <Spotify classes="ml-4 grow-1 basis-24" />
                {/* <a href="#" className="text-lg font-medium grow hover:text-spotify-green">
                    <h2 >Premium</h2>
                </a>
                <a href="#" className="text-lg font-medium grow hover:text-spotify-green">
                    <h2 >Premium</h2>
                </a>
                <a href="#" className="text-lg font-medium grow hover:text-spotify-green">
                    <h2 >Download</h2>
                </a> */}
            </div>


        </nav>
    </>);
}

export default Navbar;
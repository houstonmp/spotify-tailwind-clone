// import { Children } from "react";

const Card = (props) => {
    return (<>
        <aside className="block bg-white w-full m-auto max-w-400  rounded-lg  shadow-lg shadow-zinc-400 mb-4">
            <header className="text-white bg-black text-xl pl-3.5 py-1.5 rounded-t-lg mb-3.5">
                Your Current Plan
            </header>
            <div className="p-4">
                <h2 className="text-2xl font-[650]">Individual</h2>
                <p>$9.99/month</p>
                <p>1 account</p>
                <hr className="my-5"></hr>
                <div>
                    <ul>
                        <li className="checked list-item">Ad-free music listening</li>
                        <li className="checked list-item">Play anywhere -even offline</li>
                        <li className="checked list-item">On-demand playback</li>
                    </ul>

                    <p className="text-sm underline decoration-solid"><a href="#">Terms and conditions apply.</a></p>
                    {/* <button className="bg-spotify-light-black hover:bg-black btn-transition w-full rounded-full mb-3.5 py-3.5   text-white font-[700]">Get Started</button> */}
                </div>
                <footer className=""></footer>
            </div>

        </aside>

    </>)
}

export default Card;
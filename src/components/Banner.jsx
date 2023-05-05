const Banner = () => {
    return (
        <>
            <article className="block bg-spotify-light-blue px-3.5 m-auto h-480 w-full">
                <header className="py-12 text-white">
                    <div className="text-3xl font-[750]">
                        Listen without limits
                    </div>
                    <div>
                        <h2 className="my-8 text-lg font-[450]">
                            Play millions of songs ad-free, on-demand, and offline.
                        </h2>
                    </div>
                    <div>
                        <button className="bg-spotify-light-black hover:bg-black btn-transition w-full rounded-full mb-3.5 py-3.5  ">Get Started</button>
                        <button className=" hover:bg-spotify-btn-blue btn-transition w-full rounded-full border-2 border-white py-3.5">View Plans</button>
                    </div>
                    <footer className="mt-10">
                        <a href="#" >
                            <p className="text-xs underline decoration-solid">Terms and conditions apply.
                            </p>
                        </a>
                    </footer>
                </header>
            </article>
        </>
    );
}

export default Banner;
const Privacy = () => {
    return (<>
        <div className="flex py-2.5">
            <span className="text-xs text-gray-300">USA</span>
        </div>
        <div className="flex flex-nowrap">
            <ul className="flex flex-wrap">
                <li className="text-xs  inline-block py-3.5 text-gray-400 basis-5 grow-1 min-w-max">Legal</li>
                <li className="text-xs  inline-block py-3.5 text-gray-400 grow-1 basis-5 min-w-max">Privacy Center</li>
                <li className="text-xs  inline-block py-3.5 text-gray-400 grow-1 basis-5 min-w-max">Privacy Policy</li>
                <li className="text-xs  inline-block py-3.5 text-gray-400 grow-1 basis-5 min-w-max">Cookies</li>
                <li className="text-xs  inline-block py-3.5 text-gray-400 grow-1 basis-5 min-w-max">About Ads</li>
                <li className="text-xs  inline-block py-3.5 text-gray-400 grow-1 basis-5 min-w-max">Your Privacy Choices</li>
            </ul>
            <span className="basis-3 text-xs grow-1 min-w-max pt-3.5">© 2023 Spotify AB</span>
        </div>
    </>);
}

export default Privacy;
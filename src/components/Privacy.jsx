const Privacy = () => {
    return (<>
        <div className="flex py-2.5 justify-end">
            <span className="text-xs text-gray-300">USA</span>
        </div>
        <div className="flex flex-nowrap">
            <ul className="flex flex-wrap grow-2">
                <li className="text-xs  inline-block py-3.5 text-gray-400 basis-5 grow-1 min-w-max mr-5">Legal</li>
                <li className="text-xs  inline-block py-3.5 text-gray-400 grow-1 basis-5 min-w-max mr-5">Privacy Center</li>
                <li className="text-xs  inline-block py-3.5 text-gray-400 grow-1 basis-5 min-w-max mr-5">Privacy Policy</li>
                <li className="text-xs  inline-block py-3.5 text-gray-400 grow-1 basis-5 min-w-max mr-5">Cookies</li>
                <li className="text-xs  inline-block py-3.5 text-gray-400 grow-1 basis-5 min-w-max mr-5">About Ads</li>
                <li className="text-xs  inline-block py-3.5 text-gray-400 grow-1 basis-5 min-w-max mr-5">Your Privacy Choices</li>
            </ul>
            <span className="basis-5 text-xs shrink-1 min-w-max pt-3.5">© 2023 Spotify AB</span>
        </div>
    </>);
}

export default Privacy;
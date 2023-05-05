import Card from './UI/Card'

const Plans = () => {
    return (<>
        <article className="bg-spotify-bg-gray py-4 px-3.5">
            <h2 className="text-3xl font-[700] text-center">Pick your Premium</h2>
            <p className="text-center my-3">Listen without limits on your phone, speaker, and other devices.</p>
            <div className="flex mt-4 justify-center">
                <div>
                    Placeholder
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>

            </div>
            <Card />
            <Card />
            <Card />
            <Card />
        </article>
    </>)
}

export default Plans;
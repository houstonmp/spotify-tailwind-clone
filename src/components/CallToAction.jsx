import Actions from "./Actions";

const CallToAction = () => {
    const actionList = [
        {
            'action': 'Download music.',
            'prompt': 'Listen anywhere',
            'photo': 'url("/src/assets/img/music-notes.png")'
        },
        {
            'action': 'Ad-free music listening.',
            'prompt': 'Enjoy nonstop music',
            'photo': 'url("/src/assets/img/phone-skips.png")'
        },
        {
            'action': 'Play any song.',
            'prompt': 'Even on mobile.',
            'photo': 'url("/src/assets/img/music.png")'
        },
        {
            'action': 'Unlimited skips.',
            'prompt': 'Just hit next',
            'photo': 'url("/src/assets/img/phone.png")'
        },
    ]
    return (<>
        <article className="py-5 px-3.5">
            <h2 className="text-3xl font-[700] text-center">Why go Premium?</h2>
            <ul>
                <Actions actionList={actionList} />
            </ul>
        </article>
    </>);
}

export default CallToAction;
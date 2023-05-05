const FooterLinks = (props) => {
    return (
        <>
            <dl className="px-3.5">
                <dt className="text-sm text-zinc-600 font-[500] mt-12 mb-5">{props.section.name}</dt>

                {props.section.Links.map((el, index) => {
                    return (<a href={el.hyperlink} key={el.name + index} className="text-white hover:text-spotify-green font-base ">
                        <dl className="pt-px pb-3">{el.name}</dl>
                    </a>);
                })}
            </dl>
        </>
    );
}

export default FooterLinks;
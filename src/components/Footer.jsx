import Privacy from './Privacy'
import FooterLinks from './FooterLinks';
import SocialMedia from './SocialMedia';
import Spotify from './UI/Spotify'

const Footer = () => {
    const Links = [
        {
            name: 'Company',
            Links: [
                {
                    name: 'About',
                    hyperlink: '#'
                },
                {
                    name: 'Jobs',
                    hyperlink: '#'
                },
                {
                    name: 'For the Record',
                    hyperlink: '#'
                },
            ]
        },
        {
            name: 'Communities',
            Links: [
                {
                    name: 'For Artists',
                    hyperlink: '#'
                },
                {
                    name: 'Developers',
                    hyperlink: '#'
                },
                {
                    name: 'Advertising',
                    hyperlink: '#'
                },
                {
                    name: 'Investors',
                    hyperlink: '#'
                },
                {
                    name: 'Vendors',
                    hyperlink: '#'
                },
                {
                    name: 'Spotify For Work',
                    hyperlink: '#'
                },
            ]
        },
        {
            name: 'Useful Links',
            Links: [
                {
                    name: 'Support',
                    hyperlink: '#'
                },
                {
                    name: 'Web Player',
                    hyperlink: '#'
                },
                {
                    name: 'Free Mobile App',
                    hyperlink: '#'
                },
            ]
        },

    ]

    return (
        <>
            <footer className="block bg-black pb-5">

                <div className="block m-auto text-white pt-3 px-3.5 item">
                    <Spotify classes="w-24 ml-3.5 mt-12" />
                    <FooterLinks section={Links[0]} />
                    <FooterLinks section={Links[1]} />
                    <FooterLinks section={Links[2]} />

                    <SocialMedia />


                    <Privacy />
                </div>
            </footer>
        </>);
}

export default Footer;
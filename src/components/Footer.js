import "./Footer.css"
const Footer = () => {
    return (
        <div className="footer">
            <div className="top">
                <div>
                    <h1>Travelbuddy</h1>
                    <p>Choose your favourite</p>
                </div>
                <div>
                    <a href="https://twitter.com/Ashas_twt?t=5eVLHdITUDXO_E6srHCq9w&s=08"><i className="fa-brands fa-twitter-square"></i></a>
                    <a href="/"><i className="fa-brands fa-instagram-square"></i></a>
                    <a href="https://github.com/Ashasindhu"><i className="fa-brands fa-github-square"></i></a>

                </div>
            </div>
            <div className="bottom">
                <div><h4>Project</h4>
                    <a href="/">Change log</a>
                    <a href="/">Status</a>
                    <a href="/">Licence</a>
                    <a href="/">All Version</a>
                </div>
                <div><h4>Community</h4>
                    <a href="/">Github</a>
                    <a href="/">Issues</a>
                    <a href="/">Project</a>
                    <a href="/">Twitter</a>
                </div>
                <div><h4>Help</h4>
                    <a href="/">Support</a>
                    <a href="/">Troubleshooting</a>
                    <a href="/">Contact Us</a>
                    <a href="/">All Version</a></div>

                <div><h4>Others</h4>
                    <a href="/">Terms of Service</a>
                    <a href="/">Privacy Policy</a>
                    <a href="/">Licence</a>
                </div>
            </div>
        </div>

    )
}
export default Footer
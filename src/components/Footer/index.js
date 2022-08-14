function Footer() {
    return (
        <footer>
            <div className="footer-img-container text-center p-2">
                <a href="http://github.com/andrewfaugno" target="_blank">
                    <img src={require("../../assets/logos/GitHub-Mark-64px.png")} alt="github logo" />
                </a>
                <a href="https://www.linkedin.com/" target="_blank">
                    <img src={require('../../assets/logos/linkedin.png')} alt="linkedin logo" />
                </a>
                <a href="https://stackoverflow.com/" target="_blank">
                    <img src={require('../../assets/logos/stack-overflow.png')} alt="stack overflow logo" />
                </a>
            </div>
        </footer>
    );
}

export default Footer;

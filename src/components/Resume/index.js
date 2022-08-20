function Resume() {
    return (
        <div className="w-75 text-left mx-auto mt-5 pb-5 quicksand resume-page">
            <h1 className="font-weight-bold dynapuff">Resume</h1>
            <h4 className="py-4 resume-container">Download my <a href="https://www.google.com/" target="_blank" className="resume">resume</a></h4>
            <h3 className="dynapuff">Front-end Proficiencies:</h3>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>jQuery</li>
                <li>Responsive Design</li>
                <li>React</li>
                <li>BootStrap</li>
            </ul>
            <h3 className="pt-3 dynapuff">Back-end Proficiencies:</h3>
            <ul>
                <li>APIs</li>
                <li>Node</li>
                <li>Express</li>
                <li>MySQL, Sequelize</li>
                <li>MongoDB, Mongoose</li>
                <li>REST</li>
                <li>GraphQL</li>
            </ul>
        </div>
    )
}

export default Resume;
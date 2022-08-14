function Portfolio() {
    const projects = [
        {
            name: "The Tech Blog",
            githubLink: "https://github.com/AndrewFaugno/the-tech-blog",
            websiteLink: "https://the-tech-blog-andrewfaugno.herokuapp.com/",
            description: "RESTFUL",
            imageName: "techblog",
        },
        {
            name: "Spotify Now",
            githubLink: "https://github.com/ajjaswal/spotify-now",
            websiteLink: "https://spotify-wrapped-now.herokuapp.com/",
            description: "FULL STACK",
            imageName: "spotifynow",
        },
        {
            name: "Run Buddy",
            githubLink: "https://github.com/AndrewFaugno/run-buddy",
            websiteLink: "https://andrewfaugno.github.io/run-buddy/",
            description: "HTML CSS",
            imageName: "runbuddy",
        },
        {
            name: "Budget Tracker",
            githubLink: "https://github.com/AndrewFaugno/budget-tracker",
            websiteLink: "https://budget-tracker-andrewfaugno.herokuapp.com/",
            description: "PWA",
            imageName: "budget-tracker",
        },
        {
            name: "Weather Dashboard",
            githubLink: "https://github.com/AndrewFaugno/weather-dashboard",
            websiteLink: "https://andrewfaugno.github.io/weather-dashboard/",
            description: "API",
            imageName: "weatherdashboard",
        },
        {
            name: "Photo Port",
            githubLink: "https://github.com/AndrewFaugno/photo-port",
            websiteLink: "https://andrewfaugno.github.io/photo-port/",
            description: "REACT",
            imageName: "photo-port",
        },
    ];

    return (
        <div className="mt-5 mb-5 container quicksand">
            <div className="row ">
            {projects.map((project, i) => (
                <div key={i} className="m-auto pb-4 img-wrap">
                    <div className="img-text d-flex">
                        <a href={project.websiteLink} target="_blank" className="pr-3 pt-2 project-name">{project.name}</a>
                        <a href={project.githubLink} target="_blank">
                            <img src={require("../../assets/logos/GitHub-Mark-64px.png")} alt="github logo" />
                        </a>
                    </div>
                    <div className="desc-container">
                        <h4 className="desc-text">{project.description}</h4>
                    </div>
                    <div className="pimg-container">
                        <img 
                        src={require(`../../assets/projects/${project.imageName}.PNG`)} 
                        className='project-img'
                        alt={`Front page of ${project.name} website`}
                        key={project.name} 
                        />
                    </div>
                </div>
            ))}
            </div>
        </div>
    );
}

export default Portfolio;

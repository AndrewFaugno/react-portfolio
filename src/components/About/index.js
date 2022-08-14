function About() {
    return (
        <div className="m-auto w-50 aboutme-container">
            <h3 className='dynapuff'>About Me</h3>
            <img 
            className='my-4 about-me-img rounded-circle w-25'
            src={require('../../assets/images/skydive-profile.JPG')} 
            alt="andrew faugno skydiving"
            />
            <p className='aboutme-text quicksand'>
                Hi! My name's Andrew, I'm 21 years old and I'm currently a full-stack web developer!
                I haven't been coding for too long, but in the last six 
                months (thanks to UCONN's coding bootcamp!) I've 
                learned how to create full-stack web applications from scratch!
                I'm still pushing myself to learn more because I realize how
                much I enjoy doing this!  
            </p>
        </div>
    );
}

export default About;

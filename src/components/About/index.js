function About() {
    return (
        <div className="m-auto w-50 aboutme-container">
            <h3 className='dynapuff'>About Me</h3>
            <img 
            className='py-4 about-me-img rounded-circle w-25'
            src={require('../../assets/images/IMG_4188.JPG')} 
            alt="stock profile placeholder"
            />
            <p className='aboutme-text quicksand'>
                Hi! My name's Andrew, I'm 21 years old and I'm currently a full-stack web developer!
                I haven't been coding for too long, but in the last six 
                months (thanks to UCONN's coding bootcamp!) I've 
                learned how to create full-stack web applications from scratch!
                I'm still pushing myself to learn more because I realized how
                much I enjoy doing this stuff!  
            </p>
        </div>
    );
}

export default About;

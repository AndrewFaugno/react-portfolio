function About() {
    return (
        <div className="m-auto w-75 margin-top">
            <h3 className='dynapuff'>About Me</h3>
            <img 
            className='py-4 about-me-img rounded-circle w-25'
            src={require('../../assets/images/image-placeholder.png')} 
            alt="stock profile placeholder"
            />
            <p className='aboutme-text quicksand'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Nec dui nunc mattis
                enim ut tellus elementum. Consectetur adipiscing elit ut aliquam purus sit amet. 
                Dui ut ornare lectus sit amet est placerat in egestas. Sit amet
                risus nullam eget felis eget nunc lobortis.
            </p>
        </div>
    );
}

export default About;

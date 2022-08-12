
function Nav({ currentPage, changePage }) {
    return (
        <div className="d-flex justify-content-center text-center">
            <a href="#About" 
            className={currentPage === 'About' ? 'navbar nav-link active-nav' : 'navbar nav-link'} 
            onClick={() => changePage('About')}>About Me</a>

            <a href="#" 
            className={currentPage === 'Portfolio' ? 'navbar nav-link active-nav' : 'navbar nav-link'} 
            onClick={() => changePage('Portfolio')}>Portfolio</a>

            <a href="#" 
            className={currentPage === 'Contact' ? 'navbar nav-link active-nav' : 'navbar nav-link'} 
            onClick={() => changePage('Contact')}>Contact Me</a>

            <a href="#" 
            className={currentPage === 'Resume' ? 'navbar nav-link active-nav' : 'navbar nav-link'} 
            onClick={() => changePage('Resume')}>Resume</a>

        </div>
    )
}  

export default Nav

function Nav({ changePage }) {
    return (
        <div>
            <h2 onClick={() => changePage('About')}>About Me</h2>
            <h2 onClick={() => changePage('Portfolio')}>Portfolio</h2>
            <h2 onClick={() => changePage('Contact')}>Contact Me</h2>
            <h2 onClick={() => changePage('Resume')}>Resume</h2>
        </div>
    )
}  

export default Nav
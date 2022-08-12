import Nav from "../Nav";

function Header({setCurrentPage}) {
    const changePage = (page) => setCurrentPage(page);

    return (
        <header className="">
            <h1 className="p-4">Andrew Faugno</h1>
            <div>
                <Nav changePage={changePage} />
            </div>
        </header>
    );
}

export default Header;

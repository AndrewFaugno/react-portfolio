import Nav from "../Nav";

function Header({currentPage, setCurrentPage}) {
    const changePage = (page) => setCurrentPage(page);

    return (
        <header className="w-100">
            <h1 className="p-4 text-center">Andrew Faugno</h1>
            <div>
                <Nav currentPage={currentPage} changePage={changePage} />
            </div>
        </header>
    );
}

export default Header;

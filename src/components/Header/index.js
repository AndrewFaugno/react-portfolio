import Nav from "../Nav";

function Header({currentPage, setCurrentPage}) {
    const changePage = (page) => setCurrentPage(page);

    return (
        <header className="w-100 dynapuff pt-4 align-text-bottom">
            <h1 className="p-5 text-center title">Andrew Faugno</h1>
            <div className="w-75 mx-auto">
                <Nav currentPage={currentPage} changePage={changePage} />
            </div>
        </header>
    );
}

export default Header;

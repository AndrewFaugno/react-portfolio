import { useState } from "react";
import Header from "./components/Header";
import Nav from "./components/Nav";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Resume from "./components/Resume";

function App() {
    const [currentPage, setCurrentPage] = useState("About");

    const renderPage = () => {
        switch (currentPage) {
            case "About":
                return <About />;
            case "Portfolio":
                return <Portfolio />;
            case "Contact":
                return <Contact />;
            case "Resume":
                return <Resume />;
        }
    };

    const changePage = (page) => setCurrentPage(page);

    return (
        <div>
            <Header />
            <Nav changePage={changePage} />
            {renderPage()}
        </div>
    );
}

export default App;

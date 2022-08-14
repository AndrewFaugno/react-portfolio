import { useState, useEffect } from "react";
import Header from "./components/Header";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import Footer from './components/Footer'

function App() {
    const [currentPage, setCurrentPage] = useState("About");

    useEffect(() => {
        document.title = currentPage;
    });

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

    return (
        <div>
            <div>
                <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
            </div>
            <div className="pb-5 mb-5">
                {renderPage()}
            </div>
            <Footer />
        </div>

    );
}

export default App;

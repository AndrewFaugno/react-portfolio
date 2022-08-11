import { useState } from 'react';
import Header from './components/Header'
import Nav from './components/Nav';

function App() {
  const [currentPage, setCurrentPage] = useState();

  const renderPage = () => {
    if (currentPage === 'About')
    return <About />
  }

  return (
    <div>
      <Header />
      <Nav currentPage={currentPage} />
    </div>
  );
}

export default App;

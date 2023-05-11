import { BrowserRouter } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Pages from './components/Pages/Pages';


function App() {
  return (
      <> 
        <BrowserRouter>
          <Header />
          <Pages />
          <Footer />
        </BrowserRouter>
      </>
  );
}

export default App;

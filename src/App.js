import './reset.scss';
import './App.scss';
import Header from './components/Header';
import MainBlock from './components/MainBlock';
import OffersBlock from './components/OffersBlock';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <main>
        <MainBlock />
        <OffersBlock />
      </main>
      <Footer />
    </>
  );
}

export default App;

import React from 'react';
import Expert from '../Expert/Expert';
import Header from '../Header/Header';
import Promo from '../Promo/Promo';
import Profi from '../Profi/Profi';
import Quiz from '../Quiz/Quiz';
import './App.css';
import VacancyMentor from '../Vacancy/VacancyMentor';
import { Route, Redirect } from 'react-router-dom';
import VacancyReview from '../Vacancy/VacancyReview';
import Banner from '../Banner/Banner';
import FeedBack from '../FeedBack/FeedBack';
import Footer from '../Footer/Footer';
import Roli from '../Roli/Roli';
import Forma from '../Forma/Forma';

function App() {

  const [pageWidth, setPagewidth] = React.useState(document.documentElement.scrollWidth);
  const [countCards, setCountCards] = React.useState(9);

  const vacancyRef = React.useRef(null);

  function executeScroll() {
    vacancyRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  window.onresize = newPageSize;

  function countCardsOnPage() {

    if (pageWidth >= 1440) {
      setCountCards(9);
      return;
    } else if (769 <= pageWidth < 1440) {
      setCountCards(5);
      return;
    } else if (pageWidth < 480) {
      setCountCards(3);
      return;
    }
  }

  function newPageSize() {
    setTimeout(() => {
      setPagewidth(document.documentElement.scrollWidth)
    }, 1000)
  }

  return (
    <div className="App">
      <Route exact path='/'>
        <Redirect to='/mentor/programming' />
      </Route>
      <Header />
      <Promo />
      <Expert />
      <Quiz executeScroll={executeScroll} />
      <Roli />
      <Profi />
      <Banner />
      <Route path='/mentor'>
        <VacancyMentor vacancyRef={vacancyRef} countCards={countCards} />
      </Route>
      <Route path='/review'>
        <VacancyReview vacancyRef={vacancyRef} countCards={countCards} />
      </Route>
      <FeedBack />
      <Forma />
      <Footer />
    </div>
  );
}

export default App;

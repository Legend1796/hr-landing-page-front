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

function App() {

  const [pageWidth, setPagewidth] = React.useState(document.documentElement.scrollWidth);
  const [countCards, setCountCards] = React.useState(9);

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
      <Quiz />
      <Profi />
      <Banner />
      <Route path='/mentor'>
        <VacancyMentor countCards={countCards} />
      </Route>
      <Route path='/review'>
        <VacancyReview countCards={countCards} />
      </Route>
    </div>
  );
}

export default App;

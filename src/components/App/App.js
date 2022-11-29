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
import Popup from '../Popup/Popup';
import * as popupTexts from '../utils/texts';

function App() {

  const [pageWidth, setPagewidth] = React.useState(document.documentElement.scrollWidth);
  const [countCards, setCountCards] = React.useState(9);
  const [cardTitle, setCardTitle] = React.useState('');
  const [openPopup, setOpenPopup] = React.useState(false);
  const [btnId, setBtnId] = React.useState(1);
  const [texts, setTexts] = React.useState(popupTexts.texts1);

  window.onresize = newPageSize;

  function handleActivateButton(num) {
    setBtnId(num);
    if (num === 1) {
      setTexts(popupTexts.texts1);
    } else if (num === 2) {
      setTexts(popupTexts.texts2);
    } else if (num === 3) {
      setTexts(popupTexts.texts3);
    } else if (num === 4) {
      setTexts(popupTexts.texts4);
    } else if (num === 5) {
      setTexts(popupTexts.texts5);
    } else {
      setTexts(popupTexts.texts6);
    }
  }

  function handleClickOnVacancie(title) {
    setCardTitle(title);
    setOpenPopup(true);
  }

  function handleCloseAllPopups() {
    setOpenPopup(false);
  }

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
        <VacancyMentor countCards={countCards} clickOnVacancie={handleClickOnVacancie} />
      </Route>
      <Route path='/review'>
        <VacancyReview countCards={countCards} clickOnVacancie={handleClickOnVacancie} />
      </Route>
      <FeedBack />
      <Popup isOpen={openPopup} title={cardTitle} onClose={handleCloseAllPopups} btnId={btnId} activateButton={handleActivateButton} texts={texts} />
    </div>
  );
}

export default App;

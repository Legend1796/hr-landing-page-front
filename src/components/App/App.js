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
import Footer from '../Footer/Footer';
import Roli from '../Roli/Roli';
// import Forma from '../Forma/Forma';
import Navigation from '../Navigation/Navigation';

function App() {

  const [pageWidth, setPagewidth] = React.useState(document.documentElement.scrollWidth);
  const [countCards, setCountCards] = React.useState(9);
  const [addCountCards, setAddCountCards] = React.useState(3);
  const [cardTitle, setCardTitle] = React.useState('');
  const [openPopup, setOpenPopup] = React.useState(false);
  const [openNavigation, setOpenNavigation] = React.useState(false);
  const [btnId, setBtnId] = React.useState(1);
  const [texts, setTexts] = React.useState(popupTexts.texts1);

  const vacancyRef = React.useRef(null);

  function executeScroll() {
    vacancyRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  window.onresize = newPageSize;

  React.useEffect(() => {
    countCardsOnPage();
  }, [pageWidth])

  function handleOpenNavigation() {
    setOpenNavigation(!openNavigation);
  }

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
    setOpenNavigation(false);
  }

  function countCardsOnPage() {
    if (pageWidth >= 1440) {
      setCountCards(9);
      setAddCountCards(3);
      return;
    } else if (pageWidth > 768) {
      setCountCards(6);
      setAddCountCards(2);
      return;
    } else if (768 > pageWidth) {
      setCountCards(3);
      setAddCountCards(2);
      return;
    }
  }

  function handleAddMoreCards() {
    countCardsOnPage();
    setCountCards(countCards + addCountCards);
  }

  function newPageSize() {
    setTimeout(() => {
      setPagewidth(getWidth())
    }, 1000)
  }

  function getWidth() {

    if (document.documentElement && document.documentElement.clientWidth) {
      return document.documentElement.clientWidth;
    }

    if (document.body) {
      return document.body.clientWidth;
    }
  }

  return (
    <div className="App">
      <Route exact path='/'>
        <Redirect to='/mentor/programming' />
      </Route>
      <Header pageWidth={pageWidth} openNavigation={handleOpenNavigation} />
      <Promo pageWidth={pageWidth} />
      <Expert />
      <Quiz executeScroll={executeScroll} />
      <Roli />
      <Profi pageWidth={pageWidth} />
      <Banner />
      <Route path='/mentor'>
        <VacancyMentor vacancyRef={vacancyRef} countCards={countCards} clickOnVacancie={handleClickOnVacancie} addMoreCards={handleAddMoreCards} />
      </Route>
      <Route path='/review'>
        <VacancyReview vacancyRef={vacancyRef} countCards={countCards} clickOnVacancie={handleClickOnVacancie} addMoreCards={handleAddMoreCards} />
      </Route>
      <FeedBack />
      <Popup isOpen={openPopup} title={cardTitle} onClose={handleCloseAllPopups} btnId={btnId} activateButton={handleActivateButton} texts={texts} />
      {/* <Forma /> */}
      <Footer />
      <Navigation isOpen={openNavigation} onClose={handleCloseAllPopups} />
    </div>
  );
}

export default App;

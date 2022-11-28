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
        <VacancyMentor />
      </Route>
      <Route path='/review'>
        <VacancyReview />
      </Route>
    </div>
  );
}

export default App;

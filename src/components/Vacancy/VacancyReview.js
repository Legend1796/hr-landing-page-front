import React from 'react';
import { Link, Route } from 'react-router-dom';
import { vacancies } from '../utils/vacancies';
import Vacancy from './Vacancy';

function VacancyReview({ pageWidth, countCards, vacancyRef, clickOnVacancie, addMoreCards }) {

  const [cards, setCards] = React.useState(vacancies);
  const [specs, setSpecs] = React.useState('programming');
  const [resultCards, setResultCards] = React.useState([]);
  const [isNeedMoreButton, setNeedMoreButton] = React.useState(false);
  const vacancyTable = document.getElementById('vacancy__table');

  React.useEffect(() => {
    vacancyTable.style = 'margin-left: 0';
  }, [pageWidth])

  React.useEffect(() => {
    filterCards(specs, cards);
  }, [specs, countCards])

  function setProgramming() {
    setSpecs('programming');
    if (pageWidth < 930) {
      vacancyTable.style = 'margin-left: 0';
    }
  }

  function setAnalitics() {
    setSpecs('analitics');
    if (pageWidth < 930) {
      console.log(pageWidth);
      vacancyTable.style = 'margin-left: -100px';
    }
  }

  function setDesigh() {
    setSpecs('design');
    if (pageWidth < 930) {
      vacancyTable.style = 'margin-left: -200px';
    }
  }

  function setMarketing() {
    setSpecs('marketing');
    if (pageWidth < 930) {
      vacancyTable.style = 'margin-left: -300px';
    }
  }

  function setMenegement() {
    setSpecs('menegement');
    if (pageWidth < 930) {
      vacancyTable.style = 'margin-left: -400px';
    }
  }

  function filterCards(specs, cards) {
    var vacanciesOnFilter = (cards.filter((i) => i.role === 'mentor').filter((i) => i.specs === specs));
    if (vacanciesOnFilter.length > countCards) {
      setNeedMoreButton(true);
    } else { setNeedMoreButton(false) }
    setResultCards(vacanciesOnFilter.slice(0, countCards));
  }

  return (
    <>
      <section className='vacancy' ref={vacancyRef} id='vacancy'>
        <div className='vacancy__filter'>
          <h1 className='vacancy__title'>Кого мы ищем</h1>
          <div className='vacancy__links'>
            <Link className='vacancy__link' to='/mentor/programming'><p className='vacancy__link-text'>Наставников</p></Link>
            <Link className='vacancy__link vacancy__link-active' to='/review/programming'><p className='vacancy__link-text'>Ревьюеров</p></Link>
          </div>
          <div className='vacancy__table' id='vacancy__table'>
            <Route path='/review/programming'>
              <Link className='vacancy__choise vacancy__choise-active' to='/review/programming'>
                <button type='button' onClick={setProgramming} className='vacancy__button'>
                  <p className='vacancy__choise-text'>Программирование</p>
                </button>
              </Link>
              <Link className='vacancy__choise' to='/review/analitics'>
                <button type='button' onClick={setAnalitics} className='vacancy__button'>
                  <p className='vacancy__choise-text'>Аналитика</p>
                </button>
              </Link>
              <Link className='vacancy__choise' to='/review/design'>
                <button type='button' onClick={setDesigh} className='vacancy__button'>
                  <p className='vacancy__choise-text'>Дизайн</p>
                </button>
              </Link>
              <Link className='vacancy__choise' to='/review/marketing'>
                <button type='button' onClick={setMarketing} className='vacancy__button'>
                  <p className='vacancy__choise-text'>Маркетинг</p>
                </button>
              </Link>
              <Link className='vacancy__choise' to='/review/menegement'>
                <button type='button' onClick={setMenegement} className='vacancy__button'>
                  <p className='vacancy__choise-text'>Менеджмент</p>
                </button>
              </Link>
            </Route>
            <Route path='/review/analitics'>
              <Link className='vacancy__choise' to='/review/programming'>
                <button type='button' onClick={setProgramming} className='vacancy__button'>
                  <p className='vacancy__choise-text'>Программирование</p>
                </button>
              </Link>
              <Link className='vacancy__choise  vacancy__choise-active' to='/review/analitics'>
                <button type='button' onClick={setAnalitics} className='vacancy__button'>
                  <p className='vacancy__choise-text'>Аналитика</p>
                </button>
              </Link>
              <Link className='vacancy__choise' to='/review/design'>
                <button type='button' onClick={setDesigh} className='vacancy__button'>
                  <p className='vacancy__choise-text'>Дизайн</p>
                </button>
              </Link>
              <Link className='vacancy__choise' to='/review/marketing'>
                <button type='button' onClick={setMarketing} className='vacancy__button'>
                  <p className='vacancy__choise-text'>Маркетинг</p>
                </button>
              </Link>
              <Link className='vacancy__choise' to='/review/menegement'>
                <button type='button' onClick={setMenegement} className='vacancy__button'>
                  <p className='vacancy__choise-text'>Менеджмент</p>
                </button>
              </Link>
            </Route>
            <Route path='/review/design'>
              <Link className='vacancy__choise' to='/review/programming'>
                <button type='button' onClick={setProgramming} className='vacancy__button'>
                  <p className='vacancy__choise-text'>Программирование</p>
                </button>
              </Link>
              <Link className='vacancy__choise' to='/review/analitics'>
                <button type='button' onClick={setAnalitics} className='vacancy__button'>
                  <p className='vacancy__choise-text'>Аналитика</p>
                </button>
              </Link>
              <Link className='vacancy__choise vacancy__choise-active' to='/review/design'>
                <button type='button' onClick={setDesigh} className='vacancy__button'>
                  <p className='vacancy__choise-text'>Дизайн</p>
                </button>
              </Link>
              <Link className='vacancy__choise' to='/review/marketing'>
                <button type='button' onClick={setMarketing} className='vacancy__button'>
                  <p className='vacancy__choise-text'>Маркетинг</p>
                </button>
              </Link>
              <Link className='vacancy__choise' to='/review/menegement'>
                <button type='button' onClick={setMenegement} className='vacancy__button'>
                  <p className='vacancy__choise-text'>Менеджмент</p>
                </button>
              </Link>
            </Route>
            <Route path='/review/marketing'>
              <Link className='vacancy__choise' to='/review/programming'>
                <button type='button' onClick={setProgramming} className='vacancy__button'>
                  <p className='vacancy__choise-text'>Программирование</p>
                </button>
              </Link>
              <Link className='vacancy__choise' to='/review/analitics'>
                <button type='button' onClick={setProgramming} className='vacancy__button'>
                  <p className='vacancy__choise-text'>Аналитика</p>
                </button>
              </Link>
              <Link className='vacancy__choise' to='/review/design'>
                <button type='button' onClick={setDesigh} className='vacancy__button'>
                  <p className='vacancy__choise-text'>Дизайн</p>
                </button>
              </Link>
              <Link className='vacancy__choise vacancy__choise-active' to='/review/marketing'>
                <button type='button' onClick={setMarketing} className='vacancy__button'>
                  <p className='vacancy__choise-text'>Маркетинг</p>
                </button>
              </Link>
              <Link className='vacancy__choise' to='/review/menegement'>
                <button type='button' onClick={setMenegement} className='vacancy__button'>
                  <p className='vacancy__choise-text'>Менеджмент</p>
                </button>
              </Link>
            </Route>
            <Route path='/review/menegement'>
              <Link className='vacancy__choise' to='/review/programming'>
                <button type='button' onClick={setProgramming} className='vacancy__button'>
                  <p className='vacancy__choise-text'>Программирование</p>
                </button>
              </Link>
              <Link className='vacancy__choise' to='/review/analitics'>
                <button type='button' onClick={setProgramming} className='vacancy__button'>
                  <p className='vacancy__choise-text'>Аналитика</p>
                </button>
              </Link>
              <Link className='vacancy__choise' to='/review/design'>
                <button type='button' onClick={setDesigh} className='vacancy__button'>
                  <p className='vacancy__choise-text'>Дизайн</p>
                </button>
              </Link>
              <Link className='vacancy__choise' to='/review/marketing'>
                <button type='button' onClick={setMarketing} className='vacancy__button'>
                  <p className='vacancy__choise-text'>Маркетинг</p>
                </button>
              </Link>
              <Link className='vacancy__choise vacancy__choise-active' to='/review/menegement'>
                <button type='button' onClick={setMenegement} className='vacancy__button'>
                  <p className='vacancy__choise-text'>Менеджмент</p>
                </button>
              </Link>
            </Route>
          </div>
        </div>

      </section>
      <section className='vacancy__list'>
        <div className='vacancy__container'>
          {resultCards.length === 0
            ?
            <p className='vacancy__not-found'>Таких вакансий пока нет. <br />Чтобы посмотреть другие, поменяйте роль или направление.</p>
            :
            <>
              <ul className='vacancy__items'>
                {resultCards.map((vacancy) => (
                  <Vacancy title={vacancy.title} textPay={vacancy.textPay} textCash={vacancy.textCash} url={vacancy.url} key={vacancy.id} clickOnVacancie={clickOnVacancie} />
                ))}
              </ul>
              <div>

              </div>
            </>
          }
          <div className='vacancy__more'>
            <button className={`vacancy__more-button ${isNeedMoreButton ? 'vacancy__more-button_active' : ''}`} type='button' onClick={addMoreCards}>Смотреть еще</button>
          </div>
        </div>
      </section>
    </>
  )
}

export default VacancyReview;
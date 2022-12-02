import logo from '../../images/RU-logo-short-comp2.svg';
import navigationBtn from '../../images/icon-menu.svg';

function Header({ openNavigation, pageWidth, executeProfiScroll, executeQuizScroll, executeVacancyScroll, executeFormScroll }) {

  return (
    <header className='header'>
      <img className='header__logo' src={logo} alt='Логотип сайта' />
      {pageWidth > 820
        ?
        <>
          <div className='header__links'>
            <a onClick={executeQuizScroll} className='header__link'><p className='header__link-text'>Наставник или ревьюер</p></a>
            <a onClick={executeProfiScroll} className='header__link'><p className='header__link-text'>Направления</p></a>
            <a onClick={executeVacancyScroll} className='header__link'><p className='header__link-text'>Предложения</p></a>
          </div>
          <button onClick={executeFormScroll} className='header__send-request' type='button'>
            <a className='header__link' href='#send'><p className='header__link-text'>Оставить заявку</p></a>
          </button>
        </>
        :
        <button type='button' className='header__navigation-button' onClick={openNavigation}><img className='header__navigation-image' src={navigationBtn} alt='кнопка навигации' /></button>
      }


    </header >
  )
}

export default Header;
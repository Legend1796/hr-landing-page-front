import logo from '../../images/RU-logo-short-comp2.svg';
import navigationBtn from '../../images/icon-menu.svg';

function Header({ openNavigation, pageWidth }) {

  return (
    <header className='header'>
      <img className='header__logo' src={logo} alt='Логотип сайта' />
      {pageWidth > 768
        ?
        <>
          <div className='header__links'>
            <a className='header__link' href='#quiz'><p className='header__link-text'>Наставник или ревьер</p></a>
            <a className='header__link' href='#profi'><p className='header__link-text'>Направления</p></a>
            <a className='header__link' href='#vacancy'><p className='header__link-text'>Вакансии</p></a>
          </div>
          <button className='header__send-request' type='button'>
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
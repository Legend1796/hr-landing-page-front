import logo from '../../images/RU-logo-short-comp2.svg';

function Header() {

  return (
    <header className='header'>
      <img className='header__logo' src={logo} alt='Логотип сайта' />
      <div className='header__links'>
        <a className='header__link' href='#quiz'><p className='header__link-text'>Наставник или ревьер</p></a>
        <a className='header__link' href='#profi'><p className='header__link-text'>Направления</p></a>
        <a className='header__link' href='#vacancy'><p className='header__link-text'>Роли</p></a>
      </div>
      <button className='header__send-request' type='button'>
        <a className='header__link' href='#send'><p className='header__link-text'>Оставить заявку</p></a>
      </button>
    </header >
  )
}

export default Header;
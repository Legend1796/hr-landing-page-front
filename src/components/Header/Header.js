import logo from '../../images/RU-logo-short-comp2.svg';

function Header() {

  return (
    <header className='header'>
      <img className='header__logo' src={logo} alt='Логотип сайта' />
      <div className='header__links'>
        <a className='header__link' href='#expert'><p className='header__link-text'>Наставник или ревьер</p></a>
        <a className='header__link' href='#who'><p className='header__link-text'>Направления</p></a>
        <a className='header__link' href='#faculties'><p className='header__link-text'>Вакансии</p></a>
      </div>
      <button className='header__send-request'>
        <a className='header__link' href='#feedback'><p className='header__link-text'>Отзывы</p></a>
      </button>
    </header >
  )
}

export default Header;
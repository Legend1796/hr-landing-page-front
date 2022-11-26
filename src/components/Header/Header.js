import logo from '../../images/RU-logo-short-comp2.svg';

function Header() {

  return (
    <header className='header'>
      <img className='header__logo' src={logo} alt='Логотип сайта' />
      <div className='header__links'>
        <a className='header__link' href='#expert'><p className='header__link-text'>Как стать экспертом</p></a>
        <a className='header__link' href='#who'><p className='header__link-text'>Кто ты?</p></a>
        <a className='header__link' href='#faculties'><p className='header__link-text'>Факультеты</p></a>
        <a className='header__link' href='#role'><p className='header__link-text'>Обязанности</p></a>
        <a className='header__link' href='#offers'><p className='header__link-text'>Открытые предложения</p></a>
        <a className='header__link' href='#feedback'><p className='header__link-text'>Отзывы</p></a>
      </div>
      <button className='header__send-request'>
        <a className='header__link' href='#feedback'><p className='header__link-text'>Отзывы</p></a>
      </button>
    </header >
  )
}

export default Header;
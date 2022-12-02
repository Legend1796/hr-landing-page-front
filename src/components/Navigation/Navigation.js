import socialVk from '../../images/social-vk.svg';
import socialTg from '../../images/social-tg-header.svg';

function Navigation({ isOpen, onClose }) {

  return (
    <div className={`navigation ${isOpen ? 'navigation_opened' : ''}`} >
      <div className='navigation__container'>
        <div className='navigation__links'>
          <a className='navigation__link' onClick={onClose} href='#quiz'><p className='navigation__link-text'>Наставник или ревьюер</p></a>
          <a className='navigation__link' onClick={onClose} href='#profi'><p className='navigation__link-text'>Направления</p></a>
          <a className='navigation__link' onClick={onClose} href='#vacancy'><p className='navigation__link-text'>Предложения</p></a>
        </div>
        <div className='navigation__intouch'>
          <div className='navigation__call'>
            <p className='navigation__number'>8-800-700-93-29</p>
            <p className='navigation__free-call'>Звонок по России бесплатный</p>
          </div>
          <div className='navigation__social'>
            <a className='navigation__vk' href='https://t.me/practicum_experts' target='_blank' rel='noopener noreferrer'><img className='header__navigation-image' src={socialVk} alt='ссылка вк' /></a>
            <a className='navigation__tg' href='https://t.me/practicum_experts' target='_blank' rel='noopener noreferrer'><img className='header__navigation-image' src={socialTg} alt='ссылка тг' /></a>
          </div>
        </div>
        <button onClick={onClose} className='navigation__send-request' type='button'>
          <a className='navigation__link-request' href='#send'><p className='header__link-text'>Оставить заявку</p></a>
        </button>
      </div>
    </div >
  )
}

export default Navigation;
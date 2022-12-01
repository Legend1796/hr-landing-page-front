import Text from './Text';
import popupLink from '../../images/popup-link.svg';

function Popup({ isOpen, onClose, title, btnId, activateButton, texts }) {

  const moveButtons = document.getElementById('popup__move-buttons');

  function activeButton1() {
    activateButton(1);
    moveButtons.style = 'left: 10';
  }

  function activeButton2() {
    activateButton(2);
    moveButtons.style = 'left: -67px';
  }

  function activeButton3() {
    activateButton(3);
    moveButtons.style = 'left: -305px';
  }

  function activeButton4() {
    activateButton(4);
    moveButtons.style = 'left: -565px';
  }

  function activeButton5() {
    activateButton(5);
    moveButtons.style = 'left: -825px';
  }

  function activeButton6() {
    activateButton(6);
    moveButtons.style = 'left: -1035px';
  }



  return (
    <div className={`popup ${isOpen && 'popup_opened'}`} >
      <div className='popup__container'>
        <div className='popup__top-container'>
          <h2 className='popup__title'>{title}</h2>
          <button onClick={onClose} className='popup__close' type='button' aria-label='Закрыть'></button>
        </div>
        <div className='popup__two-columns'>
          <div className='popup__buttons'>
            <div className='popup__move-buttons' id='popup__move-buttons'>
              <button onClick={activeButton1} className={`popup__button ${btnId === 1 ? 'popup__button_active' : ''}`} type='button' aria-label='Кнопка чата'>
                <p className='popup__button-name'>О чем курс?</p>
              </button>
              <button onClick={activeButton2} className={`popup__button ${btnId === 2 ? 'popup__button_active' : ''}`} type='button' aria-label='Кнопка чата'>
                <p className='popup__button-name'>Что делает наставник?</p>
              </button>
              <button onClick={activeButton3} className={`popup__button ${btnId === 3 ? 'popup__button_active' : ''}`} type='button' aria-label='Кнопка чата'>
                <p className='popup__button-name'>Я хочу стать наставником. Меня возьмут?</p>
              </button>
              <button onClick={activeButton4} className={`popup__button ${btnId === 4 ? 'popup__button_active' : ''}`} type='button' aria-label='Кнопка чата'>
                <p className='popup__button-name'>Я подхожу. Что вы можете мне предложить?</p>
              </button>
              <button onClick={activeButton5} className={`popup__button ${btnId === 5 ? 'popup__button_active' : ''}`} type='button' aria-label='Кнопка чата'>
                <p className='popup__button-name'>Как я пойму, что у меня достаточно экспертизы?</p>
              </button>
              <button onClick={activeButton6} className={`popup__button ${btnId === 6 ? 'popup__button_active' : ''}`} type='button' aria-label='Кнопка чата'>
                <p className='popup__button-name'>Что такое Школа наставников и сколько времени она занимает?</p>
              </button>
            </div>
          </div>
          <div className='popup__texts'>
            {texts.map((text) => (
              <Text key={text.id} text={text.text} id={text.id} />
            ))
            }
          </div>
        </div>
        <div className='popup__background-container'>
          <a className='popup__link' href='https://t.me/practicum_experts' target='_blank' rel='noopener noreferrer'><img src={popupLink} className='popup__link-image' alt='ссылка на соцсети' /><p className='popup__button-name popup__button-name_color_white'>Поделиться</p></a>
          <a className='popup__background-link' href='https://forms.yandex.ru/surveys/10024289.145b1c5aada4364b8ed325d02f75a35fe8f8ee1c/' target='_blank' rel='noopener noreferrer'><p className='popup__button-name'>Откликнуться на предложение</p></a>
        </div>
      </div>

    </div >
  )
}

export default Popup;
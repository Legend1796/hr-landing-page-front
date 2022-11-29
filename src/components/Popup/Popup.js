import Text from "./Text";

function Popup({ isOpen, onClose, title, btnId, activateButton, texts }) {


  function activeButton1() {
    activateButton(1);
  }

  function activeButton2() {
    activateButton(2);
  }

  function activeButton3() {
    activateButton(3);
  }

  function activeButton4() {
    activateButton(4);
  }

  function activeButton5() {
    activateButton(5);
  }

  function activeButton6() {
    activateButton(6);
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
          <div className='popup__texts'>
            {texts.map((text) => (
              <Text key={text.id} text={text.text} />
            ))
            }
          </div>
        </div>
      </div>

    </div >
  )
}

export default Popup;
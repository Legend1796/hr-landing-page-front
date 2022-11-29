function Popup({ isOpen, onClose, title }) {

  return (
    <div className='popup popup_opened'>
      <div className='popup__container'>
        <div className='popup__top-container'>
          {/* <div className={`popup ${isOpen && 'popup_opened'}`} > */}
          <h2 className='popup__title'>Наставник на курс «Мидл фронтенд-разработчик»</h2>
          {/* <h2 className='popup__title'>{title}</h2> */}
          <button onClick={onClose} className='popup__close' type='button' aria-label='Закрыть'></button>
        </div>
        <div className='popup__two-columns'>
          <div className='popup__buttons'>
            <button className='popup__button popup__button_active' type='button' aria-label='Кнопка чата'>
              <p className='popup__button-name'>О чем курс?</p>
            </button>
            <button className='popup__button' type='button' aria-label='Кнопка чата'>
              <p className='popup__button-name'>Что делает наставник?</p>
            </button>
            <button className='popup__button' type='button' aria-label='Кнопка чата'>
              <p className='popup__button-name'>Я хочу стать наставником. Меня возьмут?</p>
            </button>
            <button className='popup__button' type='button' aria-label='Кнопка чата'>
              <p className='popup__button-name'>Я подхожу. Что вы можете мне предложить?</p>
            </button>
            <button className='popup__button' type='button' aria-label='Кнопка чата'>
              <p className='popup__button-name'>Как я пойму, что у меня достаточно экспертизы?</p>
            </button>
            <button className='popup__button' type='button' aria-label='Кнопка чата'>
              <p className='popup__button-name'>Что такое Школа наставников и сколько времени она занимает?</p>
            </button>
          </div>
          <div className='popup__texts'>
            <p className='popup__text'>Яндекс Практикум — это сервис онлайн-образования, доступный в России и Америке. Мы помогаем людям расти — на работе и в жизни. Студенты могут освоить новую специальность, заговорить на иностранном языке и получать удовольствие от того, чем занимаются — каждый день.</p>
            <p className='popup__text'>Сейчас мы делаем продвинутый курс «Мидл фронтенд-разработчик», наши студенты — разработчики с опытом, которые замотивированы решать интересные задачи. Наша цель — научить студентов не просто кодингу, а дать им мышление инженера, который отлично разбирается в применяемых технологиях и может самостоятельно решать сложные задачи. Если у вас есть знания и опыт в области фронтенд-разработки — вы можете стать наставником.</p>
          </div>
        </div>
      </div>

    </div >
  )
}

export default Popup;
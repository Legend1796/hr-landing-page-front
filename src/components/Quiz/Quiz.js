import question from '../../images/question.svg'

function Quiz() {

  return (
    <section className='quiz'>
      <h2 className="quiz__title">Кто ты?</h2>
      <div className="quiz__slider-and-jobs">
        <p className="quiz__job-title">Наставник</p>

        <div className="quiz__container">
          <div className="quiz__circle">
            <img src={question} className="quiz__question" />
          </div>
          <div className="quiz__line" />
        </div>
        <p className="quiz__job-title">Ревьюер</p>
      </div>
      <div className="quiz__text-and-buttons">
        <p className="quiz__counter">1/8</p>
        <p className="quiz__text">Я хочу помогать студентам ставить цели, рефлексировать и делать выводы</p>
        <div className="quiz__buttons">
        <button className="quiz__button">Хочу</button>
        <button className="quiz__button">Не моё</button>
        </div>
      </div>
    </section>
  );
}

export default Quiz;
function Vacancy({ title, textPay, textCash, clickOnVacancie }) {

  function buttonClick() {
    clickOnVacancie(title);
  }

  return (
    <button className='vacancy__item' type='button' onClick={buttonClick}>
      <h3 className='vacancy__item-title'>{title}</h3>
      <p className='vacancy__item-text'>{textPay}</p>
      <p className='vacancy__item-text'>{textCash}</p>
    </button>
  );
}

export default Vacancy;
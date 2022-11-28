function Vacancy({ title, textPay, textCash, url }) {
  console.log(textPay);
  return (
    <a className='vacancy__item' href={url} target='_blank' rel='noopener noreferrer'>
      <h3 className='vacancy__item-title'>{title}</h3>
      <p className='vacancy__item-text'>{textPay}</p>
      <p className='vacancy__item-text'>{textCash}</p>
    </a>
  );
}

export default Vacancy;
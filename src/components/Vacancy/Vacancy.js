function Vacancy({ title, text, url }) {
  return (
    <a className='vacancy__item' href={url} target='_blank' rel='noopener noreferrer'>
      <h3 className='vacancy__item-title'>{title}</h3>
      <p className='vacancy__item-text'>{text}</p>
    </a>
  );
}

export default Vacancy;
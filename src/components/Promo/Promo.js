import promoImage from '../../images/Vector37.svg';

function Promo() {

  return (
    <section className='promo'>
      <h1 className='promo__title'>Делись своим опытом в</h1>
      <div className='promo__line'>
        <p className='promo__paragrapf promo__paragrapf_small'>дизайне</p>
        <p className='promo__paragrapf promo__paragrapf_blue-small'>анализе данных</p>
        <p className='promo__paragrapf promo__paragrapf_blue-big'>программировании</p>
      </div>
      <div className='promo__line'>
        <p className='promo__paragrapf'>программировании</p>
        <p className='promo__paragrapf'>менеджменте</p>
        <p className='promo__paragrapf'>маркетинге</p>
      </div>
      <div className='promo__line'>
        <p className='promo__paragrapf'>менеджменте</p>
        <p className='promo__paragrapf'>программировании</p>
        <p className='promo__paragrapf'>маркетинге</p>
        <p className='promo__paragrapf'>дизайне</p>
      </div>
      <div className='promo__bottom-сontainer'>
        <button className='promo__bottom'>Хочу делить знаниями</button>
        <img className='promo__bottom-image' src={promoImage} alt='Логотип сайта'></img>
        <p className='promo__paragrapf promo__paragrapf_bottom'>Получай дополнительный доход</p>
      </div>
    </section>
  )
}

export default Promo;
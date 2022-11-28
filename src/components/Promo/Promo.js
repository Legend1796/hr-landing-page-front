import promoImage from '../../images/Vector37.svg';
import inImage from '../../images/in.svg';

function Promo() {

  return (
    <section className='promo'>
      <h1 className='promo__title'>Делись своим опытом<img className='promo__in' src={inImage} alt='Буква в' /></h1>
      <div className='promo__line promo__line_first'>
        <p className='promo__paragrapf promo__paragrapf_big'>дизайне</p>
        <p className='promo__paragrapf promo__paragrapf_blue-huge'>анализе данных</p>
        <p className='promo__paragrapf promo__paragrapf_blue-big'>программировании</p>
      </div>
      <div className='promo__line promo__line_second'>
        <p className='promo__paragrapf promo__paragrapf_big'>программировании</p>
        <p className='promo__paragrapf promo__paragrapf_small'>менеджменте</p>
        <p className='promo__paragrapf promo__paragrapf_big'>маркетинге</p>
      </div>
      <div className='promo__line promo__line_third'>
        <p className='promo__paragrapf promo__paragrapf_blue-smallest'>менеджменте</p>
        <p className='promo__paragrapf promo__paragrapf_big'>программировании</p>
        <p className='promo__paragrapf promo__paragrapf_blue-big'>маркетинге</p>
        <p className='promo__paragrapf promo__paragrapf_blue-small'>дизайне</p>
      </div>
      <div className='promo__bottom-сontainer'>
        <button className='promo__buttom' type='button'>Хочу делиться знаниями</button>
        <img className='promo__bottom-image' src={promoImage} alt='Логотип сайта'></img>
        <p className='promo__paragrapf promo__paragrapf_bottom'>Получай дополнительный доход</p>
      </div>
    </section>
  )
}

export default Promo;
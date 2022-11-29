
function Promo() {

  return (
    <section className='promo'>
      <h1 className='promo__title'>Делись своим опытом</h1>
      <div className='promo__line promo__line_first'>
        <p className='promo__paragrapf promo__paragrapf_big'>дизайне анализе данных программировании</p>
        <p className='promo__paragrapf promo__paragrapf_big'>дизайне анализе данных программировании</p>

        {/* <p className='promo__paragrapf promo__paragrapf_big'>дизайне</p>
        <p className='promo__paragrapf promo__paragrapf_blue-huge'>анализе данных</p>
        <p className='promo__paragrapf promo__paragrapf_blue-big'>программировании</p> */}
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
      </div>
    </section>
  )
}

export default Promo;
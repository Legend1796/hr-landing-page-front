
function Promo({ pageWidth }) {

  return (
    <section className='promo'>
      <h1 className='promo__title'>Делись своим опытом</h1>
      <div className='promo__line'>
        {
          pageWidth > 767
            ?
            <div className='promo__line-first'>
              <h3 className='promo__paragrapf'>
                <a href='#vacancy' className='promo__text promo__text_blue'>менеджмента</a>
                <a href='#vacancy' className='promo__text promo__text_black'>маркетинга</a>
                <a href='#vacancy' className='promo__text promo__text_blue'>анализа данных</a>
                <a href='#vacancy' className='promo__text promo__text_black'>дизайна</a>
                <a href='#vacancy' className='promo__text promo__text_blue'>программирования</a>
              </h3>
              <h3 className='promo__paragrapf'>
                <a href='#vacancy' className='promo__text promo__text_blue'>менеджмента</a>
                <a href='#vacancy' className='promo__text promo__text_black'>маркетинга</a>
                <a href='#vacancy' className='promo__text promo__text_blue'>анализа данных</a>
                <a href='#vacancy' className='promo__text promo__text_black'>дизайна</a>
                <a href='#vacancy' className='promo__text promo__text_blue'>программирования</a>
              </h3>
            </div>
            :
            <>
              <div className='promo__line-first'>
                <h3 className='promo__paragrapf'>
                  <a href='#vacancy' className='promo__text promo__text_blue'>менеджмента</a>
                  <a href='#vacancy' className='promo__text promo__text_black'>маркетинга</a>
                  <a href='#vacancy' className='promo__text promo__text_blue'>анализа данных</a>
                  <a href='#vacancy' className='promo__text promo__text_black'>дизайна</a>
                  <a href='#vacancy' className='promo__text promo__text_blue'>программирования</a>
                </h3>
                <h3 className='promo__paragrapf'>
                  <a href='#vacancy' className='promo__text promo__text_blue'>менеджмента</a>
                  <a href='#vacancy' className='promo__text promo__text_black'>маркетинга</a>
                  <a href='#vacancy' className='promo__text promo__text_blue'>анализа данных</a>
                  <a href='#vacancy' className='promo__text promo__text_black'>дизайна</a>
                  <a href='#vacancy' className='promo__text promo__text_blue'>программирования</a>
                </h3>
              </div>
              <div className='promo__line-first  promo__line-first_highspeed'>
                <h3 className='promo__paragrapf'>
                  <a href='#vacancy' className='promo__text promo__text_blue'>менеджмента</a>
                  <a href='#vacancy' className='promo__text promo__text_black'>маркетинга</a>
                  <a href='#vacancy' className='promo__text promo__text_blue'>анализа данных</a>
                  <a href='#vacancy' className='promo__text promo__text_black'>дизайна</a>
                  <a href='#vacancy' className='promo__text promo__text_blue'>программирования</a>
                </h3>
                <h3 className='promo__paragrapf'>
                  <a href='#vacancy' className='promo__text promo__text_blue'>менеджмента</a>
                  <a href='#vacancy' className='promo__text promo__text_black'>маркетинга</a>
                  <a href='#vacancy' className='promo__text promo__text_blue'>анализа данных</a>
                  <a href='#vacancy' className='promo__text promo__text_black'>дизайна</a>
                  <a href='#vacancy' className='promo__text promo__text_blue'>программирования</a>
                </h3>
              </div>
            </>
        }
        {
          pageWidth > 767
            ?
            <div className='promo__line-first promo__line-first_highspeed'>
              <h3 className='promo__paragrapf'>
                <a href='#vacancy' className='promo__text promo__text_small promo__text_blue'>программирования</a>
                <a href='#vacancy' className='promo__text promo__text_small promo__text_black'>маркетинга</a>
                <a href='#vacancy' className='promo__text promo__text_small promo__text_blue'>менеджмента</a>
                <a href='#vacancy' className='promo__text promo__text_small promo__text_blue'>анализа данных</a>
                <a href='#vacancy' className='promo__text promo__text_small promo__text_black'>дизайна</a>
                <a href='#vacancy' className='promo__text promo__text_small promo__text_black'>маркетинга</a>
              </h3>
              <h3 className='promo__paragrapf'>
                <a href='#vacancy' className='promo__text promo__text_small promo__text_blue'>программирования</a>
                <a href='#vacancy' className='promo__text promo__text_small promo__text_black'>маркетинга</a>
                <a href='#vacancy' className='promo__text promo__text_small promo__text_blue'>менеджмента</a>
                <a href='#vacancy' className='promo__text promo__text_small promo__text_blue'>анализа данных</a>
                <a href='#vacancy' className='promo__text promo__text_small promo__text_black'>дизайна</a>
                <a href='#vacancy' className='promo__text promo__text_small promo__text_black'>маркетинга</a>
              </h3>
            </div>
            :
            <>
              <div className='promo__line-first'>
                <h3 className='promo__paragrapf'>
                  <a href='#vacancy' className='promo__text promo__text_small promo__text_blue'>менеджмента</a>
                  <a href='#vacancy' className='promo__text promo__text_small promo__text_black'>маркетинга</a>
                  <a href='#vacancy' className='promo__text promo__text_small promo__text_blue'>анализа данных</a>
                  <a href='#vacancy' className='promo__text promo__text_small promo__text_black'>дизайна</a>
                  <a href='#vacancy' className='promo__text promo__text_small promo__text_blue'>программирования</a>
                  <a href='#vacancy' className='promo__text promo__text_small promo__text_black'>маркетинга</a>
                </h3>
                <h3 className='promo__paragrapf'>
                  <a href='#vacancy' className='promo__text promo__text_small promo__text_blue'>менеджмента</a>
                  <a href='#vacancy' className='promo__text promo__text_small promo__text_black'>маркетинга</a>
                  <a href='#vacancy' className='promo__text promo__text_small promo__text_blue'>анализа данных</a>
                  <a href='#vacancy' className='promo__text promo__text_small promo__text_black'>дизайна</a>
                  <a href='#vacancy' className='promo__text promo__text_small promo__text_blue'>программирования</a>
                  <a href='#vacancy' className='promo__text promo__text_small promo__text_black'>маркетинга</a>
                </h3>
              </div>
              <div className='promo__line-first promo__line-first_highspeed'>
                <h3 className='promo__paragrapf'>
                  <a href='#vacancy' className='promo__text promo__text_small promo__text_blue'>менеджмента</a>
                  <a href='#vacancy' className='promo__text promo__text_small promo__text_black'>маркетинга</a>
                  <a href='#vacancy' className='promo__text promo__text_small promo__text_blue'>анализа данных</a>
                  <a href='#vacancy' className='promo__text promo__text_small promo__text_black'>дизайна</a>
                  <a href='#vacancy' className='promo__text promo__text_small promo__text_blue'>программирования</a>
                  <a href='#vacancy' className='promo__text promo__text_small promo__text_black'>маркетинга</a>
                </h3>
                <h3 className='promo__paragrapf'>
                  <a href='#vacancy' className='promo__text promo__text_small promo__text_blue'>менеджмента</a>
                  <a href='#vacancy' className='promo__text promo__text_small promo__text_black'>маркетинга</a>
                  <a href='#vacancy' className='promo__text promo__text_small promo__text_blue'>анализа данных</a>
                  <a href='#vacancy' className='promo__text promo__text_small promo__text_black'>дизайна</a>
                  <a href='#vacancy' className='promo__text promo__text_small promo__text_blue'>программирования</a>
                  <a href='#vacancy' className='promo__text promo__text_small promo__text_black'>маркетинга</a>
                </h3>
              </div>
            </>
        }

        <div className='promo__line-first promo__line-first_lowspeed'>
          <h3 className='promo__paragrapf'>
            <a href='#vacancy' className='promo__text promo__text_smallest promo__text_black'>дизайна</a>
            <a href='#vacancy' className='promo__text promo__text_smallest promo__text_blue'>менеджмента</a>
            <a href='#vacancy' className='promo__text promo__text_smallest promo__text_black'>маркетинга</a>
            <a href='#vacancy' className='promo__text promo__text_smallest promo__text_blue'>анализа данных</a>
            <a href='#vacancy' className='promo__text promo__text_smallest promo__text_black'>менеджмента</a>
            <a href='#vacancy' className='promo__text promo__text_smallest promo__text_blue'>программирования</a>
            <a href='#vacancy' className='promo__text promo__text_smallest promo__text_black'>дизайна</a>
            <a href='#vacancy' className='promo__text promo__text_smallest promo__text_blue'>анализа данных</a>
            <a href='#vacancy' className='promo__text promo__text_smallest promo__text_black'>программирования</a>
          </h3>
          <h3 className='promo__paragrapf'>
            <a href='#vacancy' className='promo__text promo__text_smallest promo__text_blue'>менеджмента</a>
            <a href='#vacancy' className='promo__text promo__text_smallest promo__text_black'>дизайна</a>
            <a href='#vacancy' className='promo__text promo__text_smallest promo__text_black'>маркетинга</a>
            <a href='#vacancy' className='promo__text promo__text_smallest promo__text_blue'>анализа данных</a>
            <a href='#vacancy' className='promo__text promo__text_smallest promo__text_black'>менеджмента</a>
            <a href='#vacancy' className='promo__text promo__text_smallest promo__text_blue'>программирования</a>
            <a href='#vacancy' className='promo__text promo__text_smallest promo__text_black'>дизайна</a>
            <a href='#vacancy' className='promo__text promo__text_smallest promo__text_blue'>анализа данных</a>
            <a href='#vacancy' className='promo__text promo__text_smallest promo__text_black'>программирования</a>
          </h3>
        </div>
      </div>
      <div className='promo__bottom-сontainer'>
        <button className='promo__buttom' type='button'>Хочу делиться опытом</button>
      </div>
    </section>
  )
}

export default Promo;
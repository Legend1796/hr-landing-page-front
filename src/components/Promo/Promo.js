
function Promo({ pageWidth, executeVacancyScroll }) {

  return (
    <section className='promo'>
      <h1 className='promo__title'>Делись своим опытом</h1>
      <div className='promo__line'>
        {
          pageWidth > 767
            ?
            <div className='promo__line-first'>
              <div className='promo__paragrapf'>
                <button type='button' onClick={executeVacancyScroll} className='promo__text promo__text_blue'>менеджмента</button>
                <button type='button' onClick={executeVacancyScroll} className='promo__text promo__text_black'>маркетинга</button>
                <button type='button' onClick={executeVacancyScroll} className='promo__text promo__text_blue'>анализа данных</button>
                <button type='button' onClick={executeVacancyScroll} className='promo__text promo__text_black'>дизайна</button>
                <button type='button' onClick={executeVacancyScroll} className='promo__text promo__text_blue'>программирования</button>
              </div>
              <div className='promo__paragrapf'>
                <button type='button' onClick={executeVacancyScroll} className='promo__text promo__text_blue'>менеджмента</button>
                <button type='button' onClick={executeVacancyScroll} className='promo__text promo__text_black'>маркетинга</button>
                <button type='button' onClick={executeVacancyScroll} className='promo__text promo__text_blue'>анализа данных</button>
                <button type='button' onClick={executeVacancyScroll} className='promo__text promo__text_black'>дизайна</button>
                <button type='button' onClick={executeVacancyScroll} className='promo__text promo__text_blue'>программирования</button>
              </div>
            </div>
            :
            <>
              <div className='promo__line-first'>
                <div className='promo__paragrapf'>
                  <button type='button' onClick={executeVacancyScroll} className='promo__text promo__text_blue'>менеджмента</button>
                  <button type='button' onClick={executeVacancyScroll} className='promo__text promo__text_black'>маркетинга</button>
                  <button type='button' onClick={executeVacancyScroll} className='promo__text promo__text_blue'>анализа данных</button>
                  <button type='button' onClick={executeVacancyScroll} className='promo__text promo__text_black'>дизайна</button>
                  <button type='button' onClick={executeVacancyScroll} className='promo__text promo__text_blue'>программирования</button>
                </div>
                <div className='promo__paragrapf'>
                  <button type='button' onClick={executeVacancyScroll} className='promo__text promo__text_blue'>менеджмента</button>
                  <button type='button' onClick={executeVacancyScroll} className='promo__text promo__text_black'>маркетинга</button>
                  <button type='button' onClick={executeVacancyScroll} className='promo__text promo__text_blue'>анализа данных</button>
                  <button type='button' onClick={executeVacancyScroll} className='promo__text promo__text_black'>дизайна</button>
                  <button type='button' onClick={executeVacancyScroll} className='promo__text promo__text_blue'>программирования</button>
                </div>
              </div>
              <div className='promo__line-first  promo__line-first_highspeed'>
                <div className='promo__paragrapf'>
                  <button type='button' onClick={executeVacancyScroll} className='promo__text promo__text_blue'>менеджмента</button>
                  <button type='button' onClick={executeVacancyScroll} className='promo__text promo__text_black'>маркетинга</button>
                  <button type='button' onClick={executeVacancyScroll} className='promo__text promo__text_blue'>анализа данных</button>
                  <button type='button' onClick={executeVacancyScroll} className='promo__text promo__text_black'>дизайна</button>
                  <button type='button' onClick={executeVacancyScroll} className='promo__text promo__text_blue'>программирования</button>
                </div>
                <div className='promo__paragrapf'>
                  <button type='button' onClick={executeVacancyScroll} className='promo__text promo__text_blue'>менеджмента</button>
                  <button type='button' onClick={executeVacancyScroll} className='promo__text promo__text_black'>маркетинга</button>
                  <button type='button' onClick={executeVacancyScroll} className='promo__text promo__text_blue'>анализа данных</button>
                  <button type='button' onClick={executeVacancyScroll} className='promo__text promo__text_black'>дизайна</button>
                  <button type='button' onClick={executeVacancyScroll} className='promo__text promo__text_blue'>программирования</button>
                </div>
              </div>
            </>
        }
        {
          pageWidth > 767
            ?
            <div className='promo__line-first promo__line-first_highspeed'>
              <div className='promo__paragrapf'>
                <button type='button' onClick={executeVacancyScroll} className='promo__text promo__text_small promo__text_blue'>программирования</button>
                <button type='button' onClick={executeVacancyScroll} className='promo__text promo__text_small promo__text_black'>маркетинга</button>
                <button type='button' onClick={executeVacancyScroll} className='promo__text promo__text_small promo__text_blue'>менеджмента</button>
                <button type='button' onClick={executeVacancyScroll} className='promo__text promo__text_small promo__text_blue'>анализа данных</button>
                <button type='button' onClick={executeVacancyScroll} className='promo__text promo__text_small promo__text_black'>дизайна</button>
                <button type='button' onClick={executeVacancyScroll} className='promo__text promo__text_small promo__text_black'>маркетинга</button>
              </div>
              <div className='promo__paragrapf'>
                <button type='button' onClick={executeVacancyScroll} className='promo__text promo__text_small promo__text_blue'>программирования</button>
                <button type='button' onClick={executeVacancyScroll} className='promo__text promo__text_small promo__text_black'>маркетинга</button>
                <button type='button' onClick={executeVacancyScroll} className='promo__text promo__text_small promo__text_blue'>менеджмента</button>
                <button type='button' onClick={executeVacancyScroll} className='promo__text promo__text_small promo__text_blue'>анализа данных</button>
                <button type='button' onClick={executeVacancyScroll} className='promo__text promo__text_small promo__text_black'>дизайна</button>
                <button type='button' onClick={executeVacancyScroll} className='promo__text promo__text_small promo__text_black'>маркетинга</button>
              </div>
            </div>
            :
            <>
              <div className='promo__line-first'>
                <div className='promo__paragrapf'>
                  <button type='button' onClick={executeVacancyScroll} className='promo__text promo__text_small promo__text_blue'>менеджмента</button>
                  <button type='button' onClick={executeVacancyScroll} className='promo__text promo__text_small promo__text_black'>маркетинга</button>
                  <button type='button' onClick={executeVacancyScroll} className='promo__text promo__text_small promo__text_blue'>анализа данных</button>
                  <button type='button' onClick={executeVacancyScroll} className='promo__text promo__text_small promo__text_black'>дизайна</button>
                  <button type='button' onClick={executeVacancyScroll} className='promo__text promo__text_small promo__text_blue'>программирования</button>
                  <button type='button' onClick={executeVacancyScroll} className='promo__text promo__text_small promo__text_black'>маркетинга</button>
                </div>
                <div className='promo__paragrapf'>
                  <button type='button' onClick={executeVacancyScroll} className='promo__text promo__text_small promo__text_blue'>менеджмента</button>
                  <button type='button' onClick={executeVacancyScroll} className='promo__text promo__text_small promo__text_black'>маркетинга</button>
                  <button type='button' onClick={executeVacancyScroll} className='promo__text promo__text_small promo__text_blue'>анализа данных</button>
                  <button type='button' onClick={executeVacancyScroll} className='promo__text promo__text_small promo__text_black'>дизайна</button>
                  <button type='button' onClick={executeVacancyScroll} className='promo__text promo__text_small promo__text_blue'>программирования</button>
                  <button type='button' onClick={executeVacancyScroll} className='promo__text promo__text_small promo__text_black'>маркетинга</button>
                </div>
              </div>
              <div className='promo__line-first promo__line-first_highspeed'>
                <div className='promo__paragrapf'>
                  <button type='button' onClick={executeVacancyScroll} className='promo__text promo__text_small promo__text_blue'>менеджмента</button>
                  <button type='button' onClick={executeVacancyScroll} className='promo__text promo__text_small promo__text_black'>маркетинга</button>
                  <button type='button' onClick={executeVacancyScroll} className='promo__text promo__text_small promo__text_blue'>анализа данных</button>
                  <button type='button' onClick={executeVacancyScroll} className='promo__text promo__text_small promo__text_black'>дизайна</button>
                  <button type='button' onClick={executeVacancyScroll} className='promo__text promo__text_small promo__text_blue'>программирования</button>
                  <button type='button' onClick={executeVacancyScroll} className='promo__text promo__text_small promo__text_black'>маркетинга</button>
                </div>
                <div className='promo__paragrapf'>
                  <button type='button' onClick={executeVacancyScroll} className='promo__text promo__text_small promo__text_blue'>менеджмента</button>
                  <button type='button' onClick={executeVacancyScroll} className='promo__text promo__text_small promo__text_black'>маркетинга</button>
                  <button type='button' onClick={executeVacancyScroll} className='promo__text promo__text_small promo__text_blue'>анализа данных</button>
                  <button type='button' onClick={executeVacancyScroll} className='promo__text promo__text_small promo__text_black'>дизайна</button>
                  <button type='button' onClick={executeVacancyScroll} className='promo__text promo__text_small promo__text_blue'>программирования</button>
                  <button type='button' onClick={executeVacancyScroll} className='promo__text promo__text_small promo__text_black'>маркетинга</button>
                </div>
              </div>
            </>
        }

        <div className='promo__line-first promo__line-first_lowspeed'>
          <div className='promo__paragrapf'>
            <button type='button' onClick={executeVacancyScroll} className='promo__text promo__text_smallest promo__text_black'>дизайна</button>
            <button type='button' onClick={executeVacancyScroll} className='promo__text promo__text_smallest promo__text_blue'>менеджмента</button>
            <button type='button' onClick={executeVacancyScroll} className='promo__text promo__text_smallest promo__text_black'>маркетинга</button>
            <button type='button' onClick={executeVacancyScroll} className='promo__text promo__text_smallest promo__text_blue'>анализа данных</button>
            <button type='button' onClick={executeVacancyScroll} className='promo__text promo__text_smallest promo__text_black'>менеджмента</button>
            <button type='button' onClick={executeVacancyScroll} className='promo__text promo__text_smallest promo__text_blue'>программирования</button>
            <button type='button' onClick={executeVacancyScroll} className='promo__text promo__text_smallest promo__text_black'>дизайна</button>
            <button type='button' onClick={executeVacancyScroll} className='promo__text promo__text_smallest promo__text_blue'>анализа данных</button>
            <button type='button' onClick={executeVacancyScroll} className='promo__text promo__text_smallest promo__text_black'>программирования</button>
          </div>
          <div className='promo__paragrapf'>
            <button type='button' onClick={executeVacancyScroll} className='promo__text promo__text_smallest promo__text_blue'>менеджмента</button>
            <button type='button' onClick={executeVacancyScroll} className='promo__text promo__text_smallest promo__text_black'>дизайна</button>
            <button type='button' onClick={executeVacancyScroll} className='promo__text promo__text_smallest promo__text_black'>маркетинга</button>
            <button type='button' onClick={executeVacancyScroll} className='promo__text promo__text_smallest promo__text_blue'>анализа данных</button>
            <button type='button' onClick={executeVacancyScroll} className='promo__text promo__text_smallest promo__text_black'>менеджмента</button>
            <button type='button' onClick={executeVacancyScroll} className='promo__text promo__text_smallest promo__text_blue'>программирования</button>
            <button type='button' onClick={executeVacancyScroll} className='promo__text promo__text_smallest promo__text_black'>дизайна</button>
            <button type='button' onClick={executeVacancyScroll} className='promo__text promo__text_smallest promo__text_blue'>анализа данных</button>
            <button type='button' onClick={executeVacancyScroll} className='promo__text promo__text_smallest promo__text_black'>программирования</button>
          </div>
        </div>
      </div>
      <div className='promo__bottom-сontainer'>
        <button onClick={executeVacancyScroll} className='promo__buttom' type='button'>Хочу делиться опытом</button>
      </div>
    </section>
  )
}

export default Promo;
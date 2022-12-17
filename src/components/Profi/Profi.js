import image1 from '../../images/illustration11.svg';
import image2 from '../../images/illustration12.svg';
import image3 from '../../images/illustration13.svg';
import image4 from '../../images/illustration21.svg';
import image5 from '../../images/illustration22.svg';
import image6 from '../../images/illustration23.svg';
import profiLink from '../../images/profi-link.svg';
import React from 'react';

import './Profi.css'
function Profi({ pageWidth, profiRef }) {

  var flipCardProgr = document.getElementById('flipCardProgr');

  function handleFlippedCard(e) {
    // flipCardProgr.style.transform = "rotateY(180deg)";
    console.log(e.target.closest('.flip'));
  }

  function handleUnFlippedCard(e) {
    // flipCardProgr.style.transform = "rotateY(0)";
    console.log(e.target.closest('.flip'));
  }

  return (
    <section className='profi' ref={profiRef} id='profi'>
      <div className='profi__block'>
        <h2 className='profi__title'>Направления</h2>
        <div className='profi__container'>
          <div className='profi__overflow'>

            <div className='profi__card'>
              <div className='flip'>
                <div className='profi__front' onClick={handleFlippedCard}>
                  <p className='profi__text'>Программирование</p>
                  <p className='profi__text profi__text_size'>Тестирование, фронтенд, бэкенд, DevOps и алгоритмы</p>
                  <img className='profi_image' src={image1} alt='Логотип программирование'></img>
                </div>
                <div className='profi__back' onClick={handleUnFlippedCard}>
                  <p className='profi__text-back'>Для тех, кто хочет развиваться в сфере программирования вне зависимости от прошлого опыта.</p>
                  <p className='profi__text-back'>Разработка и тестирование в условиях, которые имитируют реальную работу: с проектами, спринтами и дедлайнами.</p>
                  <div className='profi__back-bottom'>
                    <p className='profi__text-back profi__text-back_bottom'>31 курс</p>
                    {pageWidth > 767
                      ?
                      <a className='profi__link' href='https://practicum.yandex.ru' target='_blank' rel='noopener noreferrer'>
                        <img src={profiLink} alt='Ссылка на практикум' />
                      </a>
                      :
                      <a className='profi__link profi__link_mobile' href='https://practicum.yandex.ru' target='_blank' rel='noopener noreferrer'>
                        <p className='profi__link-text'>Перейти</p>
                      </a>
                    }
                  </div>
                </div>
              </div>
            </div>
            <div className='profi__card'>
              <div className='flip'>
                <div className='profi__front' onClick={handleFlippedCard}>
                  <p className='profi__text'>Дизайн</p>
                  <p className='profi__text profi__text_size'>Графический, коммуникационный, для интерфейсов и продуктов</p>
                  <img className='profi_image' src={image2} alt='Логотип дизаин'></img>
                </div>
                <div className='profi__back' onClick={handleUnFlippedCard}>
                  <p className='profi__text-back'>У нас обучаются дизайнеры, UX-писатели и UX-исследователи. Учим работать с композицией, цветом, типографикой, текстом, исследованиями так, чтобы приносить пользу и пользователям, и бизнесу.</p>
                  <p className='profi__text-back'>Реальные проекты или максимально приближённые к ним учебные задачи, ТЗ, дедлайны и развёрнутая обратная связь от специалистов.</p>
                  <div className='profi__back-bottom'>
                    <p className='profi__text-back profi__text-back_bottom'>11 курсов</p>
                    {pageWidth > 767
                      ?
                      <a className='profi__link' href='https://practicum.yandex.ru' target='_blank' rel='noopener noreferrer'>
                        <img src={profiLink} alt='Ссылка на практикум' />
                      </a>
                      :
                      <a className='profi__link profi__link_mobile' href='https://practicum.yandex.ru' target='_blank' rel='noopener noreferrer'>
                        <p className='profi__link-text'>Перейти</p>
                      </a>
                    }
                  </div>
                </div>
              </div>
            </div>
            <div className='profi__card'>
              <div className='flip'>
                <div className='profi__front' onClick={handleFlippedCard}>
                  <p className='profi__text'>Анализ данных</p>
                  <p className='profi__text profi__text_size'>SQL, аналитика, Data Science и архитектура данных</p>
                  <img className='profi_image' src={image3} alt='Логотип Анализ данных'></img>
                </div>
                <div className='profi__back' onClick={handleUnFlippedCard}>
                  <p className='profi__text-back'>Курсы по анализу данных для тех, кому интересно работать с цифрами и аналитикой.</p>
                  <p className='profi__text-back'>В эту область входят несколько направлений: предобработка и анализ, Data Science и Data Engineering, хранение и управление данными.</p>
                  <div className='profi__back-bottom'>
                    <p className='profi__text-back profi__text-back_bottom'>16 курсов</p>
                    {pageWidth > 767
                      ?
                      <a className='profi__link' href='https://practicum.yandex.ru' target='_blank' rel='noopener noreferrer'>
                        <img src={profiLink} alt='Ссылка на практикум' />
                      </a>
                      :
                      <a className='profi__link profi__link_mobile' href='https://practicum.yandex.ru' target='_blank' rel='noopener noreferrer'>
                        <p className='profi__link-text'>Перейти</p>
                      </a>
                    }
                  </div>
                </div>
              </div>
            </div>
            <div className='profi__card'>
              <div className='flip'>
                <div className='profi__front' onClick={handleFlippedCard}>
                  <p className='profi__text'>Маркетинг</p>
                  <p className='profi__text profi__text_size'>Интернет-маркетинг и управление трафиком</p>
                  <img className='profi_image' src={image4} alt='Логотип Маркетинг'></img>
                </div>
                <div className='profi__back' onClick={handleUnFlippedCard}>
                  <p className='profi__text-back'>Направление для всех, кто хочет учиться маркетингу в интернете. На курсах мы учим запускать рекламу и управлять рекламными кампаниями.</p>
                  <p className='profi__text-back'>Знакомим с анализом бренда, рассказываем про seo-оптимизацию и email-маркетинг, обучаем на реальных примерах из бизнеса.</p>
                  <div className='profi__back-bottom'>
                    <p className='profi__text-back profi__text-back_bottom'>2 курса</p>
                    {pageWidth > 767
                      ?
                      <a className='profi__link' href='https://practicum.yandex.ru' target='_blank' rel='noopener noreferrer'>
                        <img src={profiLink} alt='Ссылка на практикум' />
                      </a>
                      :
                      <a className='profi__link profi__link_mobile' href='https://practicum.yandex.ru' target='_blank' rel='noopener noreferrer'>
                        <p className='profi__link-text'>Перейти</p>
                      </a>
                    }
                  </div>
                </div>
              </div>
            </div>
            <div className='profi__card'>
              <div className='flip'>
                <div className='profi__front' onClick={handleFlippedCard}>
                  <p className='profi__text'>Менеджмент</p>
                  <p className='profi__text profi__text_size'>Управление проектами, командами и IT-рекрумент</p>
                  <img className='profi_image' src={image5} alt='Логотип Менеджмент'></img>
                </div>
                <div className='profi__back' onClick={handleUnFlippedCard}>
                  <p className='profi__text-back'>Направление для тех, кто начинает или продолжает свой путь в сфере управления — людьми, проектами, продуктами, ресурсами.</p>
                  <p className='profi__text-back'>В обучении мы используем проблемно-ориентированный подход, силу данных и научно обоснованные методики.</p>
                  <div className='profi__back-bottom'>
                    <p className='profi__text-back profi__text-back_bottom'>12 курсов</p>
                    {pageWidth > 767
                      ?
                      <a className='profi__link' href='https://practicum.yandex.ru' target='_blank' rel='noopener noreferrer'>
                        <img src={profiLink} alt='Ссылка на практикум' />
                      </a>
                      :
                      <a className='profi__link profi__link_mobile' href='https://practicum.yandex.ru' target='_blank' rel='noopener noreferrer'>
                        <p className='profi__link-text'>Перейти</p>
                      </a>
                    }
                  </div>
                </div>
              </div>
            </div>
            <div className='profi__card'>
              <div className='flip'>
                <div className='profi__front' onClick={handleFlippedCard}>
                  <p className='profi__text'>Английский</p>
                  <p className='profi__text profi__text_size'>Для работы и жизни</p>
                  <img className='profi_image' src={image6} alt='Логотип Английский'></img>
                </div>
                <div className='profi__back' onClick={handleUnFlippedCard}>
                  <p className='profi__text-back'>Занятия для тех, кто хочет выучить английский для работы и жизни: мы учим применять язык, а не просто объясняем теорию.</p>
                  <p className='profi__text-back'>Опытные преподаватели из 37 стран, много разговорной практики и современные образовательные технологии.</p>
                  <div className='profi__back-bottom'>
                    <p className='profi__text-back profi__text-back_bottom'>4 курса</p>
                    {pageWidth > 767
                      ?
                      <a className='profi__link' href='https://practicum.yandex.ru' target='_blank' rel='noopener noreferrer'>
                        <img src={profiLink} alt='Ссылка на практикум' />
                      </a>
                      :
                      <a className='profi__link profi__link_mobile' href='https://practicum.yandex.ru' target='_blank' rel='noopener noreferrer'>
                        <p className='profi__link-text'>Перейти</p>
                      </a>
                    }
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section >
  )
}

export default Profi;
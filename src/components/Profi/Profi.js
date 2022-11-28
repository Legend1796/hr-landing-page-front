import image1 from '../../images/illustration11.svg'
import image2 from '../../images/illustration12.svg'
import image3 from '../../images/illustration13.svg'
import image4 from '../../images/illustration21.svg'
import image5 from '../../images/illustration22.svg'
import image6 from '../../images/illustration23.svg'
import './Profi.css'
function Profi() {

    return (
        <section className='profi'>
            <p className='profi__title'>Направления</p>
            <div className='profi__container'>
                <div className='profi__content'>
                    <p className="profi__text">Программирование</p>
                    <p className="profi__text profi__text_size">Тестирование, фронтенд, бэкенд, DevOps и алгоритмы</p>
                    <img className='profi_image' src={image1} alt='Логотип программирование'></img>
                    <p className="profi__text_oborot">Для тех, кто хочет развиваться в сфере программирования вне зависимости от прошлого опыта.</p>
                    <p className="profi__text_oborot">Разработка и тестирование в условиях, которые имитируют реальную работу: с проектами, спринтами и дедлайнами.</p>
                    <p className="profi__text_oborot">31 курс<link className='profi__link'></link></p>
                </div>
                <div className='profi__content'>
                    <p className="profi__text">Дизайн</p>
                    <p className="profi__text profi__text_size">Графический, коммуникационный, для интерфейсов и продуктов</p>
                    <img className='profi_image' src={image2} alt='Логотип дизаин'></img>
                    <p className="profi__text_oborot">У нас обучаются дизайнеры, UX-писатели и UX-исследователи. Учим работать с композицией, цветом, типографикой, текстом, исследованиями так, чтобы приносить пользу и пользователям, и бизнесу.</p>
                    <p className="profi__text_oborot">Реальные проекты или максимально приближённые к ним учебные задачи, ТЗ, дедлайны и развёрнутая обратная связь от специалистов.</p>
                    <p className="profi__text_oborot">11 курсов<link className='profi__link'></link></p>
                </div>
                <div className='profi__content'>
                    <p className="profi__text">Анализ данных</p>
                    <p className="profi__text profi__text_size">SQL, аналитика, Data Science и архитектура данных</p>
                    <img className='profi_image' src={image3} alt='Логотип Анализ данных'></img>
                    <p className="profi__text_oborot">Курсы по анализу данных для тех, кому интересно работать с цифрами и аналитикой.</p>
                    <p className="profi__text_oborot">В эту область входят несколько направлений: предобработка и анализ, Data Science и Data Engineering, хранение и управление данными.</p>
                    <p className="profi__text_oborot">16 курсов<link className='profi__link'></link></p>
                </div>
                <div className='profi__content'>
                    <p className="profi__text">Маркетинг</p>
                    <p className="profi__text profi__text_size">Интернет-маркетинг и управление трафиком</p>
                    <img className='profi_image' src={image4} alt='Логотип Маркетинг'></img>
                    <p className="profi__text_oborot">Направление для всех, кто хочет учиться маркетингу в интернете. На курсах мы учим запускать рекламу и управлять рекламными кампаниями.</p>
                    <p className="profi__text_oborot">Знакомим с анализом бренда, рассказываем про seo-оптимизацию и email-маркетинг, обучаем на реальных примерах из бизнеса.</p>
                    <p className="profi__text_oborot">2 курса<link className='profi__link'></link></p>
                </div>
                <div className='profi__content'>
                    <p className="profi__text">Менеджмент</p>
                    <p className="profi__text profi__text_size">Управление проектами, командами и IT-рекрумент</p>
                    <img className='profi_image' src={image5} alt='Логотип Менеджмент'></img>
                    <p className="profi__text_oborot">Направление для тех, кто начинает или продолжает свой путь в сфере управления — людьми, проектами, продуктами, ресурсами.</p>
                    <p className="profi__text_oborot">В обучении мы используем проблемно-ориентированный подход, силу данных и научно обоснованные методики.</p>
                    <p className="profi__text_oborot">12 курсов<link className='profi__link'></link></p>
                </div>
                <div className='profi__content'>
                    <p className="profi__text">Английский</p>
                    <p className="profi__text profi__text_size">Для работы и жизни</p>
                    <img className='profi_image' src={image6} alt='Логотип Английский'></img>
                    <p className="profi__text_oborot">Занятия для тех, кто хочет выучить английский для работы и жизни: мы учим применять язык, а не просто объясняем теорию.</p>
                    <p className="profi__text_oborot">Опытные преподаватели из 37 стран, много разговорной практики и современные образовательные технологии.</p>
                    <p className="profi__text_oborot">4 курса<link className='profi__link'></link></p>
                </div>
            </div>
        </section>
    )
}

export default Profi;
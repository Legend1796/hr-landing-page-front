import React from 'react';
import { useForm } from 'react-hook-form';
import Dropdown from 'rc-dropdown';
import 'rc-dropdown/assets/index.css';
import Menu, { Item as MenuItem, Divider } from 'rc-menu';
import ReactDOM from 'react-dom';

const Form = ({ formRef }) => {

  const [nameInputValue, setNameInputValue] = React.useState('');
  const [telegramInputValue, setTelegramInputValue] = React.useState('');
  const [portfolioInputValue, setPortfolioInputValue] = React.useState('');

  const [buttonTitle, setButtonTitle] = React.useState('Направление')
  const [selectorState, setSelectorState] = React.useState(false);
  const [selectorImage, setSelectorImage] = React.useState(<svg width="11" height="7" viewBox="0 0 11 7" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1.5 1.71094L5.5 5.71094L9.5 1.71094" stroke="#1D6BF3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>)

  const menu = (
    <Menu onSelect={onSelect} className='formaSauvka__menu'>
      <Divider className='formaSauvka__divider' />
      <MenuItem className="formaSauvka__menu-item" key="Программирование">Программирование</MenuItem>
      <Divider className='formaSauvka__divider' />
      <MenuItem className="formaSauvka__menu-item" key="Анализ данных">Анализ данных</MenuItem>
      <Divider className='formaSauvka__divider' />
      <MenuItem className="formaSauvka__menu-item" key="Дизайн">Дизайн</MenuItem>
      <Divider className='formaSauvka__divider' />
      <MenuItem className="formaSauvka__menu-item" key="Маркетинг">Маркетинг</MenuItem>
      <Divider className='formaSauvka__divider' />
      <MenuItem className="formaSauvka__menu-item" key="Менеджмент">Менеджмент</MenuItem>
    </Menu>
  );

  function onSelect({ key }) {
    setButtonTitle(key);
  }

  function handleNameInputChange(e) {
    setNameInputValue(e.target.value)
  }

  function handleTelegramInputChange(e) {
    setTelegramInputValue(e.target.value)
  }

  function handlePortfolioInputChange(e) {
    setPortfolioInputValue(e.target.value)
  }

  function onVisibleChange(visible) {
    if (visible) {
      setSelectorImage(<svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9 5L5 1L1 5" stroke="#1D6BF3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      )
    } else {
      setSelectorImage(<svg width="11" height="7" viewBox="0 0 11 7" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1.5 1.71094L5.5 5.71094L9.5 1.71094" stroke="#1D6BF3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>)
    }
  }


  const {
    register,
    formState: { errors, isDirty, isValid },
    handleSubmit,
  } = useForm({ mode: "onChange" });

  const onSubmit = (data) => {
    //  onLogin({ email: data.email, password: data.password })
  }

  return (
    <section className="formaSauvka" ref={formRef} id='send'>
      <div className="formaSauvka__container">
        <h2 className="formaSauvka__title">Оставьте заявку и мы свяжемся с вами</h2>
        <form className="formaSauvka__forma" onSubmit={handleSubmit(onSubmit)}>
          <div className='formaSauvka__form-container'>
            <div onChange={handleNameInputChange} className='formaSauvka__field'>
              <input value={nameInputValue} className={`${errors.name ? "formaSauvka__inputs_error" : ''} formaSauvka__inputs formaSauvka__inputs_1 ${(!errors.name && nameInputValue != '') ? 'formaSauvka__inputs_typed' : ''}`}
                {...register("name", {
                  minLength: {
                    value: 2,
                    message: "Неверный формат"
                  },
                  maxLength: {
                    value: 60,
                    message: "Неверный формат"
                  },
                  pattern: {
                    value: /^[A-Za-zА-Яа-я ]+$/,
                    message: "Неверный формат"
                  },
                  required: "Нужно заполнить"
                })}
                placeholder="* Имя"
                type="text"
              />
              <span className={`formaSauvka__text-error ${errors.name ? 'formaSauvka__text-error_visible' : ''}`}>{errors.name ? errors.name.message : ''}</span>
            </div>
            <div onChange={handleTelegramInputChange} className="formaSauvka__field">
              <input value={telegramInputValue} className={`${errors.telegram ? "formaSauvka__inputs_error" : ''} formaSauvka__inputs formaSauvka__inputs_2 ${(!errors.telegram && telegramInputValue != '') ? 'formaSauvka__inputs_typed' : ''}`}
                {...register('telegram', {
                  pattern: {
                    value: /@([A-Za-z0-9_]{1,15})/,
                    message: "Неверный формат"
                  },
                  required: "Нужно заполнить"
                })}
                type="text"
                placeholder="* Телеграм"
              />
              <span className={`formaSauvka__text-error ${errors.telegram ? 'formaSauvka__text-error_visible' : ''}`}>{errors.telegram ? errors.telegram.message : ''}</span>
            </div>
          </div>
          <div className="formaSauvka__form-container">
            <div>
              <div>
                <div>
                  <Dropdown
                    trigger={['click']}
                    overlay={menu}
                    animation="slide-up"
                    onVisibleChange={onVisibleChange}
                  >
                    <button className={`formaSauvka__direction-button ${buttonTitle != 'Направление' ? 'formaSauvka__direction-button_active' : ''}`}>{buttonTitle}
                      {selectorImage}
                    </button>
                  </Dropdown>
                </div>
              </div>
            </div>
            <div onChange={handlePortfolioInputChange} className='formaSauvka__field'>
              <input className={`${errors.portfolio ? "formaSauvka__inputs_error" : ''} formaSauvka__inputs formaSauvka__inputs_3 ${(!errors.portfolio && portfolioInputValue != '') ? 'formaSauvka__inputs_typed' : ''}`}
                {...register('portfolio', {
                  pattern: {
                    value: /[-a-zA-Z0-9@:%_\+.~#?&\/=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&\/=]*)?/gi,
                    message: "Неверный формат"
                  },
                  required: "Нужно заполнить"
                })}
                type="text"
                placeholder='* Ссылка на портфолио'
              />
              <span className={`formaSauvka__text-error ${errors.portfolio ? 'formaSauvka__text-error_visible' : ''}`}>{errors.portfolio ? errors.portfolio.message : ''}</span>
            </div>
          </div>
          <textarea id="user-stek" className="formaSauvka__inputs_stek"
            {...register('stek', {
              required: "Нужно заполнить"
            })}
            rows="5"
            cols="60"
            placeholder='Навыки и инструменты'>
          </textarea>
          <span className={`formaSauvka__text-error ${errors.stek ? 'formaSauvka__text-error_visible' : ''}`}>{errors.stek ? errors.stek.message : ''}</span>

          <div className="formaSauvka__checkbox">
            <span className='star'>*</span>
            <input className='formaSauvka__checkbox-item' type="checkbox" name="soglacie" value="yes" />
            <span className='formaSauvka__checkbox-text'>Я даю согласие АНО ДПО «ШАД» и ООО «ЯНДЕКС» на обработку указанных данных для целей рассмотрения анкеты и обратной связи по ней.</span>
          </div>

          <button className="formaSauvka__submit-button" type="submit" >Отправить заявку</button>
        </form>
      </div>
    </section>
  );
}
export default Form;
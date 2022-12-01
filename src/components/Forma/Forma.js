/* eslint-disable no-console */
import React from 'react';
import { useForm } from 'react-hook-form';
import Dropdown from 'rc-dropdown';
import 'rc-dropdown/assets/index.css';
import Menu, { Item as MenuItem, Divider } from 'rc-menu';
import ReactDOM from 'react-dom';

const Forma = () => {

    const [buttonTitle, setButtonTitle] = React.useState('Направление')
    const [selectorImage, setSelectorImage] = React.useState(<svg width="11" height="7" viewBox="0 0 11 7" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1.5 1.71094L5.5 5.71094L9.5 1.71094" stroke="#1D6BF3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    </svg>)

    const menu = (
        <Menu onSelect={onSelect}>
            <MenuItem key="Программирование">Программирование</MenuItem>
            <Divider />
            <MenuItem key="Анализ данных">Анализ данных</MenuItem>
            <Divider />
            <MenuItem key="Дизайн">Дизайн</MenuItem>
            <Divider />
            <MenuItem key="Маркетинг">Маркетинг</MenuItem>
            <Divider />
            <MenuItem key="Менеджмент">Менеджмент</MenuItem>
        </Menu>
    );

    function onSelect({ key }) {
        setButtonTitle(key);
    }

    function onVisibleChange(visible) {
        if (visible) {
            setSelectorImage(<svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 5L5 1L1 5" stroke="#1D6BF3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            )
        } else {
            setSelectorImage(<svg width="11" height="7" viewBox="0 0 11 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.5 1.71094L5.5 5.71094L9.5 1.71094" stroke="#1D6BF3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
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
        <section className="formaSauvka">
            <div className="formaSauvka__container">
                <h2 className="formaSauvka__title">Оставьте заявку и мы свяжемся с вами</h2>
                <form className="formaSauvka__forma" onSubmit={handleSubmit(onSubmit)}>
                    <div className='formaSauvka__form-container'>
                        <div className='formaSauvka__field'>
                            <input className="formaSauvka__inputs formaSauvka__inputs_1"
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
                        <div className="formaSauvka__field">
                            <input className="formaSauvka__inputs formaSauvka__inputs_2"
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
                                        <button className='formaSauvka__direction-button'>{buttonTitle}
                                            {selectorImage}
                                        </button>
                                    </Dropdown>
                                </div>
                            </div>
                        </div>
                        <div className='formaSauvka__field'>
                            <input className="formaSauvka__inputs formaSauvka__inputs_3"
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
                        <label className="custom-checkbox">
                            <span className='star'>*</span>
                            <input className='formaSauvka__checkbox-item' type="checkbox" name="soglacie" value="yes" />
                            <span>Я даю согласие АНО ДПО «ШАД» и ООО «ЯНДЕКС» на обработку указанных данных для целей рассмотрения анкеты и обратной связи по ней.</span>
                        </label>
                    </div>

                    <button className="formaSauvka__submit-button" type="submit" >Отправить заявку</button>
                </form>
            </div>
        </section>
    );
}
export default Forma;

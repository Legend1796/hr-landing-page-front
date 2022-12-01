import { useForm } from 'react-hook-form';

const Forma = () => {
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
                            {errors?.name && <span className="formaSauvka__text-error">{errors.name.message}</span>}
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
                        <select className="formaSauvka__field formaSauvka__field_select" name="profi" id="profi-select">
                            <option value="">* Направление</option>
                            <option className="formaSauvka__profis" value="programm">Программирование</option>
                            <option className="formaSauvka__profis" value="analiz">Анализ данных</option>
                            <option className="formaSauvka__profis" value="dizain">Дизайн</option>
                            <option className="formaSauvka__profis" value="marketing">Маркетинг</option>
                            <option className="formaSauvka__profis" value="menegment">Менеджмент</option>
                        </select>

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
                            {errors?.portfolio && <span className="formaSauvka__text-error">{errors.portfolio.message}</span>}
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
                        {errors?.stek && <span className="formaSauvka__text_error">{errors.stek.message}</span>}

                        <div className="formaSauvka__checkbox">
                            <label className="custom-checkbox">
                                <input type="checkbox" name="soglacie" value="yes" />
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

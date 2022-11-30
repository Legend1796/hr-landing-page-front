import { useForm } from 'react-hook-form';

const Forma = () => {
    const {
        register,
        formState: { errors, isDirty, isValid },
        handleSubmit,
    } = useForm({mode:"onChange"});
    
    const onSubmit = (data) => {
      //  onLogin({ email: data.email, password: data.password })
    }
    
    return (
        <section className="formaSauvka">
            <form className="formaSauvka__forma" onSubmit={handleSubmit(onSubmit)}>
                <h2 className="formaSauvka__title">Оставьте заявку и мы свяжемся с вами</h2>
                <label htmlFor="user-name" className="formaSauvka__text-label formaSauvka__text-label_1">Имя и Фамилия</label>    
                <input className="formaSauvka__inputs formaSauvka__inputs_1"
                    {...register("name", {
                        minLength: {
                            value: 2,
                            message: "Неверный формат"},
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
                placeholder="* Имя и Фамилия"
                type="text"
                />
                {errors?.name && <span className="formaSauvka__text-error">{errors.name.message}</span>}

                <label htmlFor="user-telegram" className="formaSauvka__text-label formaSauvka__text_label_2">Телеграм</label>    
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
                {errors?.telegram && <span className="forma__text-error">{errors.telegram.message}</span>}
                
                <label htmlFor="user-profi" className="formaSauvka__text-label formaSauvka__text-label_3"></label>    
                <select className="formaSauvka__profi" name="profi" id="profi-select">
                    <option value="">* Направление</option>
                    <option className="formaSauvka__profis" value="programm">Программирование</option>
                    <option className="formaSauvka__profis" value="analiz">Анализ данных</option>
                    <option className="formaSauvka__profis" value="dizain">Дизайн</option>
                    <option className="formaSauvka__profis" value="marketing">Маркетинг</option>
                    <option className="formaSauvka__profis" value="menegment">Менеджмент</option>
                </select>

                <label htmlFor="user-portfolio" className="formaSauvka__text-label formaSauvka__text-label_4">Ссылка на портфолио</label>    
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
                        <input type="checkbox" name="soglacie" value="yes"/>
                        <span>Я даю согласие АНО ДПО «ШАД» и ООО «ЯНДЕКС» на обработку указанных данных для целей рассмотрения анкеты и обратной связи по ней.</span>
                    </label>
                </div>

                <button className="formaSauvka__submit-button" type="submit" >Отправить заявку</button>
            </form>
        </section>
    );
}
export default Forma;

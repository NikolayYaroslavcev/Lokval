import React from 'react';
import {useFormik} from 'formik';
import {InputContainer, WriteFormWrapper} from './write-form-style';

export const WriteForm = () => {
    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            tel: '',
            text: '',
        },
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },

    });
    return (
        <WriteFormWrapper>
            <form onSubmit={formik.handleSubmit}>
                <div>
                    <InputContainer>
                        <input
                            id="lastName"
                            name="lastName"
                            type="text"
                            onChange={formik.handleChange}
                            value={formik.values.lastName}
                        />
                        <label htmlFor="lastName">Ваше имя*</label>
                    </InputContainer>
                    <InputContainer>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            onChange={formik.handleChange}
                            value={formik.values.email}
                        />
                        <label htmlFor="email">Email*</label>
                    </InputContainer>
                </div>
                <div>
                    <InputContainer>
                        <input
                            id="tel"
                            name="tel"
                            type="tel"
                            onChange={formik.handleChange}
                            value={formik.values.tel}
                        />
                        <label htmlFor="tel">Контактный номер*</label>
                    </InputContainer>
                    <InputContainer>
                        <input
                            id="text"
                            name="text"
                            type="text"
                            onChange={formik.handleChange}
                            value={formik.values.text}
                        />
                        <label htmlFor="tel">Ваш вопрос*</label>
                    </InputContainer>
                </div>
                <button type="submit">Отправить сообщение</button>
            </form>
        </WriteFormWrapper>
    );
};

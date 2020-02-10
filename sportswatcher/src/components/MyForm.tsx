import * as React from 'react';
import {TextField, Button} from '@material-ui/core';
import {Formik, Form} from 'formik';

interface Values {
    title: String,
    url: String
}
interface Props {
    onSubmit: (values: Values) => void;
}

export const MyForm: React.FC<Props> = ({onSubmit}) => {
    return (
        <Formik 
        initialValues={{title:'', url:''}}
        onSubmit={values => {
            onSubmit(values);
        }}>
            {({values, handleChange, handleBlur}) => (
                <Form>
                <div>
                    <TextField
                        placeholder='Title'
                        name="title" 
                        value={values.title} 
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    <TextField
                        placeholder='URL'
                        name="url" 
                        value={values.url} 
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                </div>
                <Button type='submit'>Add Stream</Button>
                </Form>
            )}
        </Formik>
    );
};
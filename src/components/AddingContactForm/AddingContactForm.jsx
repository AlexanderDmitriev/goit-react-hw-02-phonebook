import React from "react";
 import { Formik, Form, Field  } from 'formik';
 import {AddingForm,SubmitButton} from './AddingContactForm.styled';
 
 export const AddingContactForm = () =>{
    const handleSubmit = (values,{resetForm}) => {
         /* event.preventDefault();
         const {name,number} = event.target.elements; */
         console.log(values);
         resetForm();
     };

    
        return(
            <div>
        <Formik
          initialValues={{name: '',number: '' }}
          /* validate={values => {
            const errors = {};
            if (!values.name) {
              errors.name = 'Required';
            } else if (
              /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/i.test(values.contact)
            ) {
              errors.name = 'Invalid contact name';
            }
            if (!values.number) {
               errors.number = 'Required';
             } else if (
               /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/i.test(values.number)
             ) {
               errors.number = 'Invalid contact number';
             }
            return errors;
          }} */
          onSubmit={handleSubmit }
        >
          {({
            values,
            errors,
            touched,
            handleNameChange,
            handleNumberChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            /* and other goodies */
          }) => (
              <AddingForm>
                  <Form onSubmit={handleSubmit}>
               <label htmlFor="name">Name</label>
              <Field
                type="text"
                name="name"
                /* onChange={handleNameChange}
                onBlur={handleBlur}
                value={values.name} */
              />
              {/* {errors.name && touched.name && errors.name} */}
              <label htmlFor="number">Number</label>
              <Field
                   type="tel"
                   name="number"
                   /* onChange={handleNumberChange} */
                   /* value={values.number} */
                   title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                   required
                   />
              {/* {errors.number && touched.number && errors.number} */}
              <SubmitButton type="submit" disabled={isSubmitting}>
              Add contact
              </SubmitButton>
            </Form>
              </AddingForm>
            
          )}
        </Formik>
      </div>
        );      
 }


 
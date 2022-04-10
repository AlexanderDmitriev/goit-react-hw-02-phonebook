import React from 'react';
 import { Formik } from 'formik';
 
 export const AddingContactForm = () => (
   <div>
     <Formik
       initialValues={{contact: '' }}
       validate={values => {
         const errors = {};
         if (!values.name) {
           errors.contact = 'Required';
         } else if (
           /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/i.test(values.contact)
         ) {
           errors.contact = 'Invalid contact name';
         }
         return errors;
       }}
       onSubmit={(values, { setSubmitting }) => {
         setTimeout(() => {
           alert(JSON.stringify(values, null, 2));
           setSubmitting(false);
         }, 400);
       }}
     >
       {({
         values,
         errors,
         touched,
         handleChange,
         handleBlur,
         handleSubmit,
         isSubmitting,
         /* and other goodies */
       }) => (
         <form onSubmit={handleSubmit}>
            <label>Name</label>
           <input
             type="text"
             name="name"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.name}
           />
           {errors.contact && touched.contact && errors.contact}
           <button type="submit" disabled={isSubmitting}>
           Add contact
           </button>
         </form>
       )}
     </Formik>
   </div>
 );
 
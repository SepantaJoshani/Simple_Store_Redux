import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "../DynamicFields/FormikControl";

const ContactForm = () => {
  const initialValues = {
    fullName: "",
    email: "",
    message: "",
  };
  const validationSchema = Yup.object({
    fullName: Yup.string().required("Required"),
    email: Yup.string().email("Invalid Email").required("Required"),
    message: Yup.string().required("Required"),
  });

  const onSubmit = (values, submitProps) => {
    console.log( values);
    console.log( submitProps);
    submitProps.resetForm()
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
     
    >
      {formik => 
        <Form  className="flex flex-col py-6 space-y-6 md:py-0 md:px-6 ng-untouched ng-pristine ng-valid focus:outline-none" >
          <FormikControl
            control="input"
            type="text"
            name="fullName"
            label="Full name"
            placeholder="Enter Your FullName"
          />

          <FormikControl
            control="input"
            type="email"
            name="email"
            label="Email address"
            placeholder="Enter Your Email"
          />
          <FormikControl
            control="textarea"
            name="message"
            label="Message"
            rows="3"
          />
          <button
            type="submit"
            className="self-center px-8 py-3 text-lg bg-blue-400 rounded-lg resize-none focus:ring hover:ring focus:ring-opacity-75 dark:bg-violet-400 dark:text-coolGray-900 focus:ring-violet-400 hover:ring-violet-400"
          disabled={!formik.isValid}
         >
            Submit
          </button>
        </Form>
      }
    </Formik>
  );
};

export default ContactForm;

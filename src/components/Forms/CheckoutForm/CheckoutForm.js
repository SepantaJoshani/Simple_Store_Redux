import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "../FormikControl";

const CheckoutForm = () => {
  const countryOptions = [
    { key: "Select a region", value: "" },
    { key: "United States", value: "unitedState" },
    { key: "Canada", value: "canada" },
   
  ];

  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    selectCountries: "",
    country: "",
    streetAddress: "",
    city: "",
    state: "",
    zip: "",
  };
  const validationSchema = Yup.object({
    firstName: Yup.string().required("Required"),
    lastName: Yup.string().required("Required"),
    email: Yup.string().email("Invalid Email").required("Required"),
    selectCountries: Yup.string().required("Required"),
    message: Yup.string().required("Required"),
    country: Yup.string().required("Required"),
    streetAddress: Yup.string().required("Required"),
    city: Yup.string().required("Required"),
    state: Yup.string().required("Required"),
    zip: Yup.string().required("Required"),
  });

  const onSubmit = (values, submitProps) => {
    console.log(values);
    console.log(submitProps);
    submitProps.resetForm();
  };

  return (
    
    <Formik
      validationSchema={validationSchema}
      initialValues={initialValues}
      onSubmit={onSubmit}
    >
      {(formik) => (
      
        <Form>
          <div className="overflow-hidden shadow sm:rounded-md">
            <div className="px-4 py-5 bg-white sm:p-6">
              <div className="grid grid-cols-6 gap-6">
                <FormikControl
                  control="input"
                  type="text"
                  name="firstName"
                  label="First name"
                  className="col-span-6 sm:col-span-3"
                  inputClass="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />

                <FormikControl
                  control="input"
                  type="text"
                  name="lastName"
                  label="Last name"
                  className="col-span-6 sm:col-span-3"
                  inputClass="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
                <FormikControl
                  control="input"
                  type="email"
                  name="email"
                  label="Email address"
                  className="col-span-6 sm:col-span-3"
                  inputClass="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />

                <FormikControl
                  control="select"
                  options={countryOptions}
                  name="selectCountries"
                  label="Country / Region"
                  
                />

                <FormikControl
                  control="input"
                  type="text"
                  name="streetAddress"
                  label="Street address"
                  className="col-span-6"
                  inputClass="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />

                <FormikControl
                  control="input"
                  type="text"
                  name="city"
                  label="City"
                  className="col-span-6 sm:col-span-6 lg:col-span-2"
                  inputClass="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />

                <FormikControl
                  control="input"
                  type="text"
                  name="state"
                  label="State/Province"
                  className="col-span-6 sm:col-span-3 lg:col-span-2"
                  inputClass="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />

                <FormikControl
                  control="input"
                  type="number"
                  name="zip"
                  label="Zip/Postal"
                  className="col-span-6 sm:col-span-3 lg:col-span-2"
                  inputClass="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>
            <div className="px-4 py-3 text-right bg-gray-50 sm:px-6">
              <button
              disabled={!formik.isValid}
                type="submit"
                className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-blue-400 border border-transparent rounded-md shadow-sm hover:bg-blue-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Save
              </button>
            </div>
          </div>
        </Form>
       
       
      )}
      
    </Formik>
    
  );
};

export default CheckoutForm;

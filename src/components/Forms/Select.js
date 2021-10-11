import React from "react";
import { Field, ErrorMessage } from "formik";
import TxtError from "./TxtError";

const Select = ({label, name, options, ...rest }) => {
  return (
    <div className='col-start-3 col-end-1'>
      <label htmlFor={name}>{label}</label>
      <Field
       
        as="select"
        id={name}
        name={name}
        {...rest}
      >
        {options.map((option) => {
          return (
            <option value={option.value} key={option.value}>
              {option.key}
            </option>
          );
        })}
      </Field>
      <ErrorMessage name={name} component={TxtError} />
    </div>
  );
};

export default Select;

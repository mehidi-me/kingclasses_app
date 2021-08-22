import React from "react";
import { useFormikContext } from "formik";
import AppInputText from "./AppInputText";
import ErrorMessage from "./ErrorMessage";

const AppFormFeild = ({ width, name, ...otherProps }) => {
  const {
    setFieldValue,
    setFieldTouched,
    touched,
    errors,
    values
  } = useFormikContext();
  return (
    <>
      <AppInputText
        width={width}
        onChangeText={text => setFieldValue(name, text)}
        value={values[name]}
        onBlur={() => setFieldTouched(name)}
        {...otherProps}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
};

export default AppFormFeild;

import { Formik, Form, Field, ErrorMessage } from "formik";
import React from "react";
import { Button } from "react-bootstrap";
import * as Yup from "yup";
import ErrorMessageStyle from "./ErrorMessageStyle";

const initialValues = {
  name: "",
  email: "",
  channel: "",
};

const onSubmit = (values) => {
  console.log("Form Data : ", values);
};

const validationSchema = Yup.object({
  name: Yup.string().required("Name is Required"),
  email: Yup.string()
    .email("Invalid Email Format")
    .required("Email is Required"),
  channel: Yup.string().required("Channel is Required"),
});

function YoutubeForm() {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form>
        <div className="form-controls">
          <label htmlFor="name">Name</label>
          <Field type="text" name="name" id="name" placeholder="Enter Name" />

          <ErrorMessage name="name" component={ErrorMessageStyle} />
        </div>

        <div className="form-controls">
          <label htmlFor="email">E-mail</label>
          <Field
            type="email"
            name="email"
            id="email"
            placeholder="Enter Email"
          />

          <ErrorMessage name="email">
            {(errorMessage) => <div className="error">{errorMessage}</div>}
          </ErrorMessage>
        </div>
        <div className="form-controls">
          <label htmlFor="channel">Channel</label>
          <Field
            type="text"
            name="channel"
            id="channel"
            placeholder="Enter Channel"
          />
          <ErrorMessage name="channel" component={ErrorMessageStyle} />
        </div>
        <div className="form-controls">
          <label htmlFor="comments">Comments</label>
          <Field
            as="textarea"
            name="comments"
            id="comments"
            placeholder="Enter Comments Here ...."
          />
          <ErrorMessage name="comments" component={ErrorMessageStyle} />
        </div>
        <div className="form-controls">
          <label htmlFor="address">Address</label>
          <Field name="address">
            {(props) => {
              const { field, form, meta } = props;
              console.log("Render Address: ", props);
              return (
                <div>
                  <input type="text" name="address" id="address" {...field} />
                  {meta.touched && meta.error ? <div>{meta.error}</div> : null}
                </div>
              );
            }}
          </Field>
          <ErrorMessage name="address" component={ErrorMessageStyle}/>
        </div>
        <br />
        <Button type="submit">Submit</Button>
      </Form>
    </Formik>
  );
}

export default YoutubeForm;

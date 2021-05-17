import { useFormik } from "formik";
import React from "react";
import { Button } from "react-bootstrap";
import * as Yup from 'yup';

const initialValues = {
  name: "",
  email: "",
  channel: "",
};

const onSubmit = (values) => {
  console.log("Form Data : ", values);
};

const validate = (values) => {
  let errors = {};

  if (!values.name) {
    errors.name = "Name is Required";
  }

  if (!values.email) {
    errors.email = "Email is Required";
  } else if (!/\S+@\S+\.\S+/) {
    errors.email = "Invalid Email Format";
  }

  if (!values.channel) {
    errors.channel = "Channel is Required";
  }

  return errors;
};

const validationSchema = Yup.object({
    name : Yup.string().required('Name is Required'),
    email: Yup.string().email("Invalid Email Format").required('Email is Required'),
    channel: Yup.string().required('Channel is Required'),
})

function OldYoutubeForm() {
  const formik = useFormik({
    initialValues,
    onSubmit,
    // validate,
    validationSchema
  });

    console.log("Form Submitted : ", formik.touched);
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div className="form-controls">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
            placeholder="Enter Name"
          />
          { formik.touched.name && formik.errors.name ? (
            <div className="error">{formik.errors.name}</div>
          ) : null}
        </div>

        <div className="form-controls">
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            name="email"
            id="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            placeholder="Enter Email"
          />
          { formik.touched.email && formik.errors.email ? (
            <div className="error">{formik.errors.email}</div>
          ) : null}
        </div>
        <div className="form-controls">
          <label htmlFor="channel">Channel</label>
          <input
            type="text"
            name="channel"
            id="channel"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.channel}
            placeholder="Enter Channel"
          />
          { formik.touched.channel && formik.errors.channel ? (
            <div className="error">{formik.errors.channel}</div>
          ) : null}
        </div>
        <br />
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
}

export default OldYoutubeForm;

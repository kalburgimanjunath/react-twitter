import React from 'react';
import Form from '../components/Form';
import { Formik } from 'formik';
export default function Login() {
  const loginForm = [{ username: 'text', password: 'password' }];
  return (
    <div>
      <div className="container">
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-md-offset-4">
              <div className="panel panel-default">
                <div className="panel-heading">
                  <h3 className="panel-title">Login via site</h3>
                </div>
                <div className="panel-body">
                  <Formik
                    initialValues={{
                      email: 'manjunathkalburgi@gmail.com',
                      password: 'Password@123',
                    }}
                    validate={(values) => {
                      const errors = {};
                      if (!values.email) {
                        errors.email = 'Required';
                      } else if (
                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                          values.email
                        )
                      ) {
                        errors.email = 'Invalid email address';
                      }
                      return errors;
                    }}
                    onSubmit={(values, { setSubmitting }) => {
                      setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                      }, 400);
                      location.href = './dashboard';
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
                    }) => (
                      <form
                        accept-charset="UTF-8"
                        role="form"
                        onSubmit={handleSubmit}
                      >
                        <div>
                          <label className="error">
                            {errors.email && touched.email && errors.email}
                          </label>
                          <label className="error">
                            {errors.password &&
                              touched.password &&
                              errors.password}
                          </label>
                        </div>
                        <fieldset>
                          <div className="form-group">
                            <input
                              className="form-control"
                              type="email"
                              name="email"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.email}
                            />
                          </div>
                          <div className="form-group">
                            <input
                              className="form-control"
                              placeholder="Password"
                              name="password"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.password}
                            />
                          </div>
                          <div className="checkbox">
                            <label>
                              <input
                                name="remember"
                                type="checkbox"
                                value="Remember Me"
                              />
                              Remember Me
                            </label>
                          </div>
                          <input
                            className="btn btn-lg btn-success btn-block"
                            type="submit"
                            value="Login"
                            disabled={isSubmitting}
                          />
                        </fieldset>
                      </form>
                    )}
                  </Formik>
                  <hr />
                  <center>
                    <h4>OR</h4>
                  </center>
                  <input
                    className="btn btn-lg btn-success btn-facebook btn-block"
                    type="submit"
                    value="Login via facebook"
                  />
                  <input
                    className="btn btn-lg btn-success btn-facebook btn-block"
                    type="submit"
                    value="Login via Google"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

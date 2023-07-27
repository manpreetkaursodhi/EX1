import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import './App.css';
import TextInput from './Components/TextInput';
import PasswordInput from './Components/PasswordInput';
import SelectDropdown from './Components/SelectDropdown';
import Datalist from './Components/Datalist';
import Textarea from './Components/Textarea';
import Checkbox from './Components/Checkbox';
import Radio from './Components/Radio';

function App() {
  const [formValues, setFormValues] = useState(null);

  const handleFormSubmit = (values, { setSubmitting }) => {
    setTimeout(() => {
      setFormValues(values);
      setSubmitting(false);
    }, 400);
  };

  return (
    <div className="App form-container">
      <Formik
        initialValues={{
          text: '',
          email: '',
          age: '',
          password: '',
          country: '',
          datalist: '',
          paragraph: '',
          isSingle: false,
          radioOption: '',
        }}
        onSubmit={handleFormSubmit}
      >
        {({ isSubmitting, values, handleChange }) => (
          <Form className="form_input">
            <Field
              component={TextInput}
              type="text"
              name="text"
              placeholder="Text Input"
              onChange={handleChange}
              value={values.text}
            />
            <Field
              component={TextInput}
              type="email"
              name="email"
              placeholder="Email Input"
              onChange={handleChange}
              value={values.email}
            />
            <Field
              component={TextInput}
              type="number"
              name="age"
              placeholder="Age Input"
              onChange={handleChange}
              value={values.age}
            />
            <Field
              component={PasswordInput}
              name="password"
              placeholder="Password Input"
              onChange={handleChange}
              value={values.password}
            />
            <Field
              component={SelectDropdown}
              name="country"
              options={['USA', 'Canada', 'UK', 'Australia']}
              onChange={handleChange}
              value={values.country}
            />
            <Field
              component={Datalist}
              name="datalist"
              placeholder="Datalist"
              onChange={handleChange}
              value={values.datalist}
            />
            <Field
              component={Textarea}
              name="paragraph"
              placeholder="Text area"
              onChange={handleChange}
              value={values.paragraph}
            />
            <Field
              component={Checkbox}
              label="Checkbox"
              name="isSingle"
              onChange={handleChange}
              checked={values.isSingle}
            />
            <Field
              component={Radio}
              label="Radio1"
              name="radioOption"
              value="option1"
              onChange={handleChange}
              checked={values.radioOption === 'option1'}
            />
            <Field
              component={Radio}
              label="Radio2"
              name="radioOption"
              value="option2"
              onChange={handleChange}
              checked={values.radioOption === 'option2'}
            />
            <button type="submit" disabled={isSubmitting} className="submit-button">
              Send Form
            </button>
          </Form>
        )}
      </Formik>

      {formValues && (
        <div className="form-preview">
          <h3>Form Values</h3>
          <div className="form-preview-output">
            <pre>{JSON.stringify(formValues, null, 2)}</pre>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;

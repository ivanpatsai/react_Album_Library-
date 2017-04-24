import React from 'react';
import {Field} from 'redux-form';


const renderInput = field =>
  <div>
    <input {...field.input} className="form-control" type={field.type}/>
    {field.meta.touched &&
    field.meta.error &&
    field.meta.invalid &&
    <div className="help-block error">
      {field.meta.touched ? field.meta.error : field.meta.invalid ? field.meta.error : ''}
    </div>}
  </div>;

export function createInput(label, name) {
  return (
    <div className="form-group">
      <label>{label}</label>
      <Field
        name={name}
        component={renderInput}
        type="text"
      />
    </div>
  )
}



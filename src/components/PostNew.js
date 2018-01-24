import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
// by importing reduxForm, it gives your component access to communicate to Posts Reducer. Very much like connect helper
import { Link } from "react-router-dom";
// Always wrap variable in { } if importion a function/action from action creator
import { createPost } from "../actions";
import { connect } from "react-redux";

class PostNew extends Component {
  renderField(field) {
    //renderField is in charge of displaying field & add any appropriate classes and attributes
    // field is an object with objects and options inside
    const { meta: { touched, error } } = field;
    // Above uses destructions to grab touched and error property from meta object
    const className = `form-group ${touched && error ? "has-danger" : ""}`;
    return (
      <div className={className}>
        <h3 className="heading">{field.label}</h3>
        <input className="form-control" type="text" {...field.input} />
        {/* ...field.input is an object which contains different event handlers. It gives all properties of this object as props to input tag */}
        <span className="error">{field.meta.touched ? field.meta.error : ""}</span>
        {/* meta.error is from validate fuction and shows error with the corresponding name. EG. title errors for name=title */}
        {/* Above is a terninary expression, if left expression comes out true and has error , show error , else show empty string */}
      </div>
    );
  }

  onSubmit(values) {
    this.props.createPost(values, () => {
      this.props.history.push("/");
      //When the push is called with a route, it will navigate you there after 
    });
  }

  render() {

    const { handleSubmit } = this.props;
    // handleSubmit is a prop that comes available when from Redux form, and above I am pulling it out of Redux Form.

    return (
      <div>
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          {/* handleSubmit method is ran first to validate form then runs onSubmit method */}
          {/* Must chain bind(this) with onSubmit method because its being used in different context out of component and to make sure we're using the correct 'this' which in this case 'this'=== our component */}
          <Field label="Title" name="title" component={this.renderField} />
          {/* Field element only knows how interact with Redux Form, but doesnt know how to display it on screen */}
          {/* Component prop is in charge of display it on screen with a funtion displaying some JSX */}
          {/* Any attributes on Field tag can be used as props to field item in renderField method */}
          <Field label="Category" name="categories" component={this.renderField}/>
          <Field label="Post" name="content" component={this.renderField} />
          <button type="submit" className="btn btn-primary">
            Submit Form
          </button>
          <Link to="/" className="btn btn-danger">
            Cancel
          </Link>
        </form>
      </div>
    );
  }
}

function validate(values) {
  //values by convention is input value of all fields
  const errors = {};
  // Create empty error object, if error object is empty, form is valid

  if (!values.title) {
    errors.title = "Please enter a Title";
  }
  if (!values.categories) {
    errors.categories = "Please enter a Category";
  }
  if (!values.content || values.content.length < 150) {
    errors.content = "Please enter a Post with more than 150 characters";
  }

  return errors;
}

export default reduxForm({
  // Redux form is like the connect function , and it comes with a bunch of properties and functions, like Handle Submit
  validate:validate, 
  // Passing in a validate function to validate the form before submitting
  form: "PostNewForm"
})(
  connect(null, { createPost })(PostNew)
);

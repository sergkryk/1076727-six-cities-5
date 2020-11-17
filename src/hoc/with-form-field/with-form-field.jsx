import React, {PureComponent} from "react";

const withFormField = (Component) => {
  class WithFormField extends PureComponent {

    constructor(props) {
      super(props);

      this.handleFieldChange = this.handleFieldChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(evt) {
      evt.preventDefault();
    }

    handleFieldChange(evt) {
      const {name, value} = evt.target;
      this.setState({[name]: value});
    }

    render() {
      return (
        <Component
          {...this.props}
          handleFieldChange={this.handleFieldChange}
          handleSubmit={this.handleSubmit}
        />
      );
    }
  }

  return WithFormField;
};


export default withFormField;

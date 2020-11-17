import React, {PureComponent} from "react";

const withActiveState = (Component) => {
  class WithActiveState extends PureComponent {

    constructor(props) {
      super(props);
      this.toggleActive = this.toggleActive.bind(this);

      this.state = {
        isActive: false,
      };
    }

    toggleActive() {
      this.setState((prevState) => ({isActive: !prevState.isActive}));
    }

    render() {
      return (
        <Component
          {...this.props}
          isActive={this.state.isActive}
          toggleActive={this.toggleActive}
        />
      );
    }
  }

  return WithActiveState;
};


export default withActiveState;

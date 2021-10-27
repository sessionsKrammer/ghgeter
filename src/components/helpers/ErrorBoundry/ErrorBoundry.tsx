import React, { PureComponent } from "react";

import "./ErrorBoundry.scss";

class ErrorBoundry extends PureComponent {
  state = {
    hasError: false,
  };

  componentDidCatch() {
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) return "Unexpected Client Error";

    return this.props.children;
  }
}

export default ErrorBoundry;

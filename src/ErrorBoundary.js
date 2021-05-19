import { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';

class ErrorBoundary extends Component {
  state = {
    hasError: false,
    redirect: false
  };

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch(error, info) {
    // log this to Sentry, Azure Monitor, TrackJS - monitor errors
    console.error("ErrorBoundary caught an error", error, info);
  }

  componentDidUpdate() {
    if (this.state.hasError) {
      setTimeout(() => {
        this.setState({ redirect: true })
      }, 3000);
    }
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to="/" />
    } else if(this.state.hasError) {
      return (
        <h2>This listing has an error. <Link to="/">Go to Homepage</Link>. Or wait 5 seconds</h2>
      )
    }

    return this.props.children;
  }
}

export default ErrorBoundary;

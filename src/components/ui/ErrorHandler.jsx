import React from 'react';
export class ErrorHandler extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught an error", error, errorInfo);
    this.setState({ errorInfo });
  }

  handleReload = () => {
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex items-center justify-center min-h-[60vh] px-4">

          <div className="max-w-md w-full bg-white border border-gray-200 rounded-2xl shadow-sm p-6 text-center">

            {/* Icon */}
            <div className="w-12 h-12 mx-auto mb-3 flex items-center justify-center rounded-full bg-red-100 text-red-500 text-xl">
              ⚠️
            </div>

            {/* Title */}
            <h2 className="text-lg font-semibold text-gray-800 mb-1">
              Oops! Something broke
            </h2>

            {/* Subtitle */}
            <p className="text-sm text-gray-500 mb-4">
              Don’t worry, you can try refreshing the page.
            </p>

            {/* Buttons */}
            <div className="flex justify-center gap-2 mb-4">
              <button
                onClick={this.handleReload}
                className="px-4 py-1.5 bg-indigo-500 text-white rounded-lg text-sm hover:bg-indigo-400"
              >
                Reload
              </button>
            </div>

            {/* Error Details (collapsible feel) */}
            <details className="text-left text-xs text-gray-400 bg-gray-50 rounded-lg p-3 cursor-pointer">
              <summary className="font-medium text-gray-500 mb-1">
                View error details
              </summary>
              <div className="mt-2 font-mono break-words">
                {this.state.error && this.state.error.toString()}
                <br />
                {this.state.errorInfo && this.state.errorInfo.componentStack}
              </div>
            </details>

          </div>

        </div>
      );
    }

    return this.props.children;
  }
}
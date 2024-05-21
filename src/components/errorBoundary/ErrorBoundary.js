"use client";
import { Component } from "react";
import { Button } from "@/components/ui/button";
import { IoReload } from "react-icons/io5";
import { toast } from "@/components/ui/use-toast";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error: error };
  }

  componentDidCatch(error, errorInfo) {
    console.log({ error, errorInfo });
  }

  componentDidUpdate(prevProps, prevState) {
    if (!prevState.hasError && this.state.hasError) {
      this.showErrorToast(this.state.error.message);
    }
  }

  showErrorToast = (message) => {
    toast({
      variant: "destructive",
      title: "Uh oh! Something went wrong.",
      description: `Error : ${message}`,
      duration: 6000,
    });
  };

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      if (!this.props.isDefault) {
        return (
          <div className="text-destructive flex flex-row h-full items-center justify-center gap-x-2 py-4">
            <p className="leading-7 [&:not(:first-child)]:mt-6">Error !!!</p>
            <Button
              variant="outline"
              size="icon"
              aria-label="Reload"
              className="rounded-full"
              onClick={() => this.setState({ hasError: false, error: null })}
            >
              <IoReload />
            </Button>
          </div>
        );
      }

      return (
        <div className="flex h-full flex-col items-center justify-center py-4">
          <h4 className="scroll-m-20 text-xl font-semibold tracking-tight text-center">
            Something went wrong!
          </h4>
          <Button
            className="mt-3"
            onClick={() => this.setState({ hasError: false, error: null })}
          >
            Try again!
          </Button>
        </div>
      );
    }

    // Return children components in case of no error
    return this.props.children;
  }
}

export default ErrorBoundary;

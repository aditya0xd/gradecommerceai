import { AlertTriangle, ArrowLeft, Home } from "lucide-react";
import { Link, isRouteErrorResponse, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  const status = isRouteErrorResponse(error) ? error.status : 500;
  const title = isRouteErrorResponse(error)
    ? error.statusText
    : "Something went wrong";
  const message =
    status === 404
      ? "The page you are looking for does not exist or has been moved."
      : "We could not load this page. Please try again from the home page.";

  return (
    <main className="min-h-screen bg-bg text-text flex items-center justify-center px-6">
      <section className="w-full max-w-[560px] text-center">
        <div className="mx-auto mb-6 w-14 h-14 rounded-2xl bg-primary-700/10 text-primary-600 flex items-center justify-center">
          <AlertTriangle className="w-7 h-7" />
        </div>

        <p className="text-sm font-semibold text-primary-600 mb-3">
          Error {status}
        </p>
        <h1 className="text-[clamp(34px,6vw,56px)] font-extrabold leading-tight text-text mb-4">
          {title}
        </h1>
        <p className="text-text2 text-base leading-7 mb-8">{message}</p>

        <div className="flex flex-wrap items-center justify-center gap-3">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold bg-gradient-to-br from-primary-700 to-accent-600 text-white no-underline shadow-lg shadow-primary-700/20"
          >
            <Home className="w-4 h-4" />
            Go Home
          </Link>
          <button
            type="button"
            onClick={() => window.history.back()}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold bg-transparent text-text border border-border2 cursor-pointer transition-colors hover:border-primary-700 hover:bg-primary-700/5"
          >
            <ArrowLeft className="w-4 h-4" />
            Go Back
          </button>
        </div>
      </section>
    </main>
  );
};

export default ErrorPage;

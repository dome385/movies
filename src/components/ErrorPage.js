import { useRouteError } from "react-router-dom";

//Wenn etwas nicht funktioniert wird diese Seite angezeigt
export default function ErrorPage() {
  const error = useRouteError();

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <h1 className="mt-3">Oops!</h1>
          <p>Ein Fehler ist aufgetreten!</p>
          <p>
            <em>{error.statusText || error.message}</em>
          </p>
          <div class="spinner-border" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>
      </div>
    </div>
  );
}

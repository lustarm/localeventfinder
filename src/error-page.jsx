import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (
        <div id="error-page">
            {/* this looks crazy i cant lie */}
            <h1>Oops!</h1>
            {error ? (
                <p>Sorry, an unexpected error has occurred.</p>
            ) : (
                <p>The path you are looking for is invalid.</p>
            )}
            <p>
                {error && <i>{error.statusText || error.message}</i>}
            </p>
        </div>
    );
}

/* @refresh reload */
import './assets/styles/base.css';
import { hydrate } from "solid-js/web";
import App from "./app";

const root = document.getElementById('app');

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
    throw new Error(
        'Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?',
    );
}

hydrate(() => <App />, root!);

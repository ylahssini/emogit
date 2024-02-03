import { renderToString } from 'solid-js/web'
import App from './app';

export function render() {
    const html = renderToString(() => <App />)
    return { html }
}

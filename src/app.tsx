import { Router, Route } from "@solidjs/router";
import '@fontsource-variable/noto-sans-hk';
import Home from "@/pages/home";
import EmojiProvider from './context';
import Header from "./components/header";
import Footer from "./components/footer";

const App = () => {
    return (
        <main>
            <Header />
            <EmojiProvider>
                <Home />
            </EmojiProvider>
            <Footer />
        </main>
    )
}

export default App

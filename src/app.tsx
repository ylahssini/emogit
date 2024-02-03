import { MetaProvider } from '@solidjs/meta';
import '@fontsource-variable/noto-sans-hk';
import Home from "@/pages/home";
import EmojiProvider from './context';
import Header from "./components/header";
import Footer from "./components/footer";

const App = () => {
    return (
        <MetaProvider>
            <main>
                <Header />
                <EmojiProvider>
                    <Home />
                </EmojiProvider>
                <Footer />
            </main>
        </MetaProvider>
    )
}

export default App

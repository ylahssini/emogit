import { Router, Route } from "@solidjs/router";
import '@fontsource-variable/noto-sans-hk';
import Home from "@/pages/home";
import EmojiProvider from './context';
import Header from "./components/header";

const App = () => {
	return (
		<main>
			<EmojiProvider>
				<Header />
				<Router>
					<Route path="/" component={Home} />
				</Router>
			</EmojiProvider>
		</main>
	)
}

export default App

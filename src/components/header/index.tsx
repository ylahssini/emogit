import { Link } from "@solidjs/meta"
import { createSignal } from "solid-js"
import './styles.css'

const emojis = ['😄', '😂', '😆', '😎', '😜', '😭', '😖', '😪', '😅']

const Header = () => {
    const [emoji, setEmoji] = createSignal(emojis[0])

    function handleEmoji() {
        setEmoji((value) => {
            const indexEmoji = emojis.findIndex(item => item === value)
            
            if (emojis[indexEmoji + 1]) {
                return emojis[indexEmoji + 1]
            }

            return emojis[0]
        })
    }

    return (
        <header class="mb-10 p-8 text-center">
            <Link rel="icon" href={`/icons/${emoji()}.svg`} type="image/svg+xml" />

            <h1 class="text-5xl font-light text-black selection:bg-transparent">
                Em<span class="emoji" role="button" onClick={handleEmoji}>{emoji()}</span>git
            </h1>

            <p>A Git commit messages style-guide</p>
        </header>
    );
}

export default Header

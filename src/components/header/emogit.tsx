import { createSignal } from "solid-js"

const emojis = ['😄', '😂', '😆', '😎', '😜', '😭', '😖', '😪', '😅']

const Emogit = () => {
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
        <div class="mb-10 text-center">
            <h1 class="text-5xl font-light text-black selection:bg-transparent">
                Em<span class="emoji" role="button" onClick={handleEmoji}>{emoji()}</span>git
            </h1>
            <p>A Git commit messages style-guide</p>
        </div>
        
    )
}

export default Emogit;

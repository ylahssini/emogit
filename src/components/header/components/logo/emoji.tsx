import { createSignal } from "solid-js"

const emojis = ['😄', '😂', '😆', '😎', '😜', '😭', '😖', '😪', '😅']

export default function Emoji() {
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
        <span class="emoji" role="button" onClick={handleEmoji}>
            {emoji()}
        </span>
    )
}
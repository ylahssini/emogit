import { For } from 'solid-js';
import toast, { Toaster } from 'solid-toast';
import { useEmojiContext } from '@/context';
import './styles.css';

const colors = ['rose', 'red', 'purple', 'lime', 'orange', 'sky', 'blue', 'amber', 'fuchsia', 'violet', 'green', 'yellow', 'emerald', 'teal', 'cyan', 'indigo'];

function random(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

const Listing = () => {
    const [state] = useEmojiContext();

    async function handleCopy(emoji: string, color: string) {
        try {
            await navigator.clipboard.writeText(emoji);
            toast.custom(
                (t) => (
                    <section class={`toast bg-${color}-100 ${!t.visible ? '__closed' : ''}`}>
                        <h5 class="font-emoji text-4xl">{emoji}</h5>
                        <div>
                            <strong class="text-base">Hey</strong>
                            <p class="text-sm pb-2">The emoji is copied to clipboard</p>
                        </div>
                        <button onClick={() => toast.dismiss(t.id)} type="button" class="close_toast">❌</button>
                        <span class={`progress bg-${color}-200`} />
                    </section>
                ),
                {
                    duration: 5000,
                    position: 'top-right',
                    unmountDelay: 1000,
                }
            );
        } catch (err) {
            console.error('Failed to copy: ', err);
        }
    }

    return (
        <>
            <ul class="grid grid-cols-5 grid-rows-5 gap-8 pb-8">
                <For each={state.emojis.filter((emoji) => state.category !== '' ? (state.category === emoji.category) : true)}>
                    {(emoji, index) => {
                        const colorIndex = random(0, colors.length - 1);
                        const bg = `bg-${colors[colorIndex]}-100 hover:bg-${colors[colorIndex]}-200`;

                        return (
                            <li class="card" style={`--animation-order:${index() + 1}`}>
                                <div class={`${bg}`}>
                                    <button
                                        class={`${state.system_font ? '' : 'font-emoji'} cursor-copy text-8xl pb-4 transition-transform ease-in-out active:rotate-45 active:scale-125`}
                                        type="button"
                                        onClick={() => handleCopy(emoji.emoji, colors[colorIndex])}
                                    >
                                        {emoji.emoji}
                                    </button>
                                    <h4>{emoji.description}</h4>
                                    <small class="text-gray-500">{emoji.category}</small>
                                </div>
                            </li>
                        )
                    }}
                </For>
            </ul>
            <Toaster />
        </>
    )
}

export default Listing;

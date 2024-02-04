import { For, createMemo, createSignal, Switch, Match } from 'solid-js';
import toast, { Toaster } from 'solid-toast';
import { useEmojiContext } from '@/context';
import './styles.css';

const colors = ['rose', 'red', 'purple', 'lime', 'orange', 'sky', 'blue', 'amber', 'fuchsia', 'violet', 'green', 'yellow', 'emerald', 'teal', 'cyan', 'indigo'];

function random(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

const Listing = () => {
    const [state] = useEmojiContext();
    const [emojis] = createSignal(state.emojis);

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

    const filteredEmojis = createMemo(() => {
        let filtered = emojis();
    
        if (state.category !== '') {
            filtered = filtered.filter((emoji) => state.category === emoji.category);
        }
    
        if (state.search) {
            const regSearch = new RegExp(state.search, 'gi');
            filtered = filtered.filter((emoji) => regSearch.test(emoji.name) || regSearch.test(emoji.description));
        }
    
        return filtered;
    });

    return (
        <>
            <Switch>
                <Match when={filteredEmojis().length === 0}>
                    <section class="empty_results">
                        <h4>🙅‍♂️</h4>
                        <strong>OOps!</strong>
                        <p>No results found</p>
                    </section>
                </Match>
                <Match when={filteredEmojis().length > 0}>
                    <ul class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 grid-rows-5 gap-8 pb-8">
                        <For each={filteredEmojis()}>
                            {(emoji, index) => {
                                const colorIndex = random(0, colors.length - 1);
                                const bg = `bg-${colors[colorIndex]}-100 hover:bg-${colors[colorIndex]}-200`;

                                return (
                                    <li class="card" style={`--animation-order:${index() + 1};--color:var(--rgb-${colors[colorIndex]}-500)`}>
                                        <div class="card_container">
                                            <section>
                                                <header class="w-32 h-32 flex items-center justify-center flex-col">
                                                    <button
                                                        class={`${state.system_font ? '' : 'font-emoji'} cursor-copy text-8xl transition-transform ease-in-out active:rotate-45 active:scale-125`}
                                                        type="button"
                                                        onClick={() => handleCopy(emoji.emoji, colors[colorIndex])}
                                                    >
                                                        {emoji.emoji}
                                                    </button>
                                                </header>
                                                <div>
                                                    <h4>{emoji.description}</h4>
                                                    <small class="text-gray-500">{emoji.category}</small>
                                                </div>
                                            </section>

                                            <div class="overlay-white"></div>
                                            <footer class={`overlay-bg ${bg}`}></footer>
                                        </div>
                                    </li>
                                )
                            }}
                        </For>
                    </ul>
                </Match>
            </Switch>
            <Toaster />
        </>
    )
}

export default Listing;

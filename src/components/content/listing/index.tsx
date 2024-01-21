import { useEmojiContext } from '@/context';
import './styles.css';
import { For } from 'solid-js';

const colors = ['rose', 'red', 'purple', 'lime', 'orange', 'sky', 'blue', 'amber', 'fuchsia', 'violet', 'green', 'yellow', 'emerald', 'teal', 'cyan', 'indigo'];

function random(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

const Listing = () => {
    const [state] = useEmojiContext();

    console.log('no_color_font list', state.no_color_font);

    return (
        <ul class="grid grid-cols-5 grid-rows-5 gap-8 pb-8">
            <For each={state.emojis}>
                {(emoji) => {
                    const colorIndex = random(0, colors.length - 1);
                    const bg = `bg-${colors[colorIndex]}-100 hover:bg-${colors[colorIndex]}-200`;

                    return (
                        <li class={`${bg} card`}>
                            <h3 class={`${state.system_font ? '' : 'font-emoji'} text-8xl pb-4`}>{emoji.emoji}</h3>
                            <h4>{emoji.description}</h4>
                            <small class="text-gray-500">{emoji.category}</small>
                        </li>
                    )
                }}
            </For>
        </ul>
    )
}

export default Listing;

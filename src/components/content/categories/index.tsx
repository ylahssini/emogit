import { useEmojiContext } from '@/context';
import './styles.css';

const Categories = () => {
    const [state, { setFontSetting }] = useEmojiContext();
    const categories = Array.from(new Set(state.emojis.map((emoji) => emoji.category)));

    function handleEmojiFont(event: Event & { target: HTMLInputElement; }) {
        setFontSetting?.('system_font', event.target.checked);
    }

    return (
        <header class="flex justify-between gap-3 mb-8">
            <nav class="flex justify-between gap-3">
                {categories.map((category) => (
                    <button
                        type="button"
                        class="font-light text-sm transition-colors hover:text-yellow-500"
                    >
                        {category}
                    </button>
                ))}
            </nav>

            <aside class="flex justify-between gap-4 items-center">
                <label class="switch" for="system-setting">
                    <input type="checkbox" name="setting" id="system-setting" onChange={handleEmojiFont} checked={state.system_font} />
                    <span />
                    <b class="font-light text-sm">System font</b>
                </label>
            </aside>
        </header>
    );
}

export default Categories;

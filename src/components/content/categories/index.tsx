import { useEmojiContext } from '@/context';
import './styles.css';

const Categories = () => {
    const [state, { setFontSetting, setCategory }] = useEmojiContext();
    const categories = Array.from(new Set(state.emojis.map((emoji) => emoji.category)));

    function handleEmojiFont(event: Event & { target: HTMLInputElement; }) {
        setFontSetting?.('system_font', event.target.checked);
    }

    function handleCategory(category: string) {
        return () => {
            setCategory?.(category === state.category ? '' : category);
        }
    }

    return (
        <header class="flex justify-between items-center gap-3 mb-8">
            <nav class="flex justify-between items-center gap-3 max-w-6xl overflow-hidden h-8">
                {categories.map((category) => (
                    <button
                        type="button"
                        class={`category ${state.category === category ? '__selected' : ''}`}
                        onClick={handleCategory(category)}
                    >
                        {category}
                    </button>
                ))}
            </nav>

            <aside class="flex justify-between gap-4 items-center">
                <label class="switch" for="system-setting">
                    <input type="checkbox" name="setting" id="system-setting" onChange={handleEmojiFont} checked={state.system_font} />
                    <span />
                    <b class="font-light text-sm whitespace-nowrap">System font</b>
                </label>
            </aside>
        </header>
    );
}

export default Categories;

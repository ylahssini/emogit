import { useEmojiContext } from "@/context";
import './styles.css';

const Search = () => {
    const [state, { setFontSetting, setSearch }] = useEmojiContext();

    function handleEmojiFont(event: Event & { target: HTMLInputElement; }) {
        setFontSetting?.('system_font', event.target.checked);
    }

    function handleChange(event: InputEvent & { target: HTMLInputElement; }) {
        setSearch?.(event.target.value as string);
    }

    function handleClear() {
        setSearch?.('');
    }

    return (
        <div class="flex items-center max-w-xl mt-8 mb-12 mx-auto gap-4">
            <fieldset class="search_fieldset">
                <input
                    type="text"
                    placeholder="Search name or description..."
                    id="search"
                    name="search"
                    onInput={handleChange}
                    value={state.search}
                    class="bg-transparent text-black caret-yellow-800 px-4 py-6 font-light pr-5 placeholder:text-gray-400 text-sm h-10 w-full focus:outline-none"
                />
                { state.search.length > 0 ? (
                    <button
                        type="button"
                        class="font-emoji absolute font-base top-1/2 right-3 -mt-3 transition-transform hover:scale-110"
                        onClick={handleClear}
                        aria-label="Clear"
                    >
                        ❌
                    </button>
                ) : null }
            </fieldset>
            <aside class="flex justify-between gap-4 items-center w-3/12">
                <label class="switch" for="system-setting">
                    <input type="checkbox" name="setting" id="system-setting" onChange={handleEmojiFont} checked={state.system_font} />
                    <span />
                    <b class="font-light text-sm whitespace-nowrap">System font?</b>
                </label>
            </aside>
        </div>
    );
}

export default Search;

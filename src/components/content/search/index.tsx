import { useEmojiContext } from "@/context";
import './styles.css';

const Search = () => {
    const [state, { setFontSetting }] = useEmojiContext();

    function handleEmojiFont(event: Event & { target: HTMLInputElement; }) {
        setFontSetting?.('system_font', event.target.checked);
    }

    return (
        <div class="flex items-center max-w-xl mt-8 mb-12 mx-auto gap-4">
            <fieldset class="rounded-xl bg-white flex items-center justify-between w-9/12">
                <input
                    type="text"
                    placeholder="Search name or description..."
                    id="search"
                    name="search"
                    class="bg-transparent text-black caret-yellow-800 px-4 py-6 font-light placeholder:text-gray-400 text-sm h-10 w-full focus:outline-none"
                />
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

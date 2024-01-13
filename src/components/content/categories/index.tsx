import './styles.css';

const categories: any[] = [];

const Categories = () => {
    return (
        <header class="mb-3 flex justify-between gap-3">
            <nav>
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
                <label class="switch" for="color-setting">
                    <input type="checkbox" name="setting" id="color-setting" />
                    <span />
                    <b class="font-light text-sm">No color</b>
                </label>

                <label class="switch" for="system-setting">
                    <input type="checkbox" name="setting" id="system-setting" />
                    <span />
                    <b class="font-light text-sm">System font</b>
                </label>
            </aside>
        </header>
    );
}

export default Categories;

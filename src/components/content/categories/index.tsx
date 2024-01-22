import { useEmojiContext } from '@/context';
import './styles.css';

const Categories = () => {
    const [state, { setCategory }] = useEmojiContext();
    const categories = Array.from(new Set(state.emojis.map((emoji) => emoji.category)));

    function handleCategory(category: string) {
        return () => {
            setCategory?.(category === state.category ? '' : category);
        }
    }

    return (
        <header class="category_container">
            <nav class="category_nav">
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
            <button type="button" class="nav_button">next</button>
        </header>
    );
}

export default Categories;

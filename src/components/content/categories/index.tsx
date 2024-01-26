import { useEmojiContext } from '@/context';
import './styles.css';

const Categories = () => {
    let categoryNavRef: HTMLElement | undefined;
    const [state, { setCategory }] = useEmojiContext();
    const categories = Array.from(new Set(state.emojis.map((emoji) => emoji.category)));

    function handleCategory(category: string) {
        return () => {
            setCategory?.(category === state.category ? '' : category);
        }
    }

    function handleNavigation(direction: string) {
        return () => {
            let left;
            const { scrollLeft, clientWidth } = categoryNavRef as HTMLElement;

            switch (direction) {
                case 'prev':
                    left = scrollLeft - clientWidth;
                    break;
                case 'next':
                default:
                    left = scrollLeft + clientWidth;
                    break;
            }

            categoryNavRef?.scroll({
                left,
                behavior: 'smooth',
            });
        }
    }

    return (
        <header class="category_container">
            <button type="button" class="nav_button" onClick={handleNavigation('prev')}>⬅️</button>
            <nav ref={categoryNavRef} class="category_nav">
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
            <button type="button" class="nav_button" onClick={handleNavigation('next')}>➡️</button>
        </header>
    );
}

export default Categories;

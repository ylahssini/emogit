import './styles.css';

const emojis: any[] = [];

const colors = ['rose', 'red', 'purple', 'lime', 'orange', 'sky', 'blue', 'amber', 'fuchsia', 'violet', 'green'];

function random(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

const Listing = () => {
    return (
        <ul class="grid grid-cols-5 grid-rows-5 gap-8">
            {emojis.map((emoji) => {
                const colorIndex = random(0, colors.length - 1);
                const bg = `bg-${colors[colorIndex]}-100 hover:bg-${colors[colorIndex]}-200`;

                return (
                    <li class={`${bg} card`}>
                        <h3 class="font-emoji text-8xl pb-4">{emoji.emoji}</h3>
                        <h4>{emoji.description}</h4>
                        <small class="text-gray-500">{emoji.category}</small>
                    </li>
                )
            })}
        </ul>
    )
}

export default Listing;
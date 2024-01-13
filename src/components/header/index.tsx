import Emogit from './emogit'
import Search from './search'
import './styles.css'

const Header = () => {
    return (
        <header class="p-8">
            <Emogit />
            <Search />
        </header>
    )
}

export default Header

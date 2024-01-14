import { JSX, createContext, useContext } from 'solid-js';
import { createStore } from 'solid-js/store';
import staticData from '@/assets/data/static.json';

const initStore = {
    emojis: staticData,
    search: '',
    category: '',
    no_color_font: false,
    system_font: false,
};

type EmojiContextType = {
    emojis: {
        emoji: string
        name: string
        short: string
        description: string
        template: string
        category: string
    }[]
    search: string
    category: string
    no_color_font: boolean
    system_font: boolean
}

type EmojiSets = {
    setSearch?: (value: string) => void
    setCategory?: (value: string) => void
    setFontSetting?: (key: 'no_color_font' | 'system_font', value: boolean) => void
}


const EmojiContext = createContext<[EmojiContextType, EmojiSets]>([initStore, {}]);

const EmojiProvider = ({ children }: { children: JSX.Element }) => {
    const [state, setState] = createStore(initStore);
    const store = [
        state,
        {
            setSearch(value: string) {
                setState('search', () => value)
            },
    
            setCategory(value: string) {
                setState('category', () => value)
            },
    
            setFontSetting(key: 'no_color_font' | 'system_font', value: boolean) {
                setState(key, () => value);
            }
        }
    ] as [EmojiContextType, EmojiSets];

    return (
        <EmojiContext.Provider value={store}>
            {children}
        </EmojiContext.Provider>
    );
}

export const useEmojiContext = () => {
    const context = useContext(EmojiContext);
    return context as [EmojiContextType, EmojiSets];
}

export default EmojiProvider;

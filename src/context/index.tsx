import { JSX, createContext, createSignal, useContext } from 'solid-js';
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


const EmojiContext = createContext<[EmojiContextType, EmojiSets]>(undefined);

export const useEmojiContext = () => {
    const context = useContext(EmojiContext);
    if (context === undefined) {
        throw new Error(`useEmojiContext must be used within a EmojiProvider`);
    }
    return context;
}

function useProvider() {
    const [] = createSignal(false)
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
                console.log('key', key, value);
                setState(key, value);
            }
        }
    ] as [EmojiContextType, EmojiSets];

    return store;
}

const EmojiProvider = (props: Record<string, any>) => {
    const [state, { setSearch, setCategory, setFontSetting }] = useProvider();

    return (
        <EmojiContext.Provider value={[state, { setSearch, setCategory, setFontSetting }]}>
            {props.children}
        </EmojiContext.Provider>
    );
}


export default EmojiProvider;

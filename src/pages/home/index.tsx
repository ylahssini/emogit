import Categories from '@/components/content/categories';
import Listing from '@/components/content/listing';
import Search from '@/components/content/search';

const Home = () => {
    return (
        <>
            <Search />

            <div class="max-w-[1600px] w-11/12 mx-auto">
                <Categories />
                <Listing />
            </div>
        </>
    )
}

export default Home;

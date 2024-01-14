const Search = () => {
    return (
        <fieldset class="rounded-xl bg-white flex items-center justify-between max-w-md mt-8 mb-12 mx-auto">
            <input
                type="text"
                placeholder="Search name or description..."
                id="search"
                name="search"
                class="bg-transparent text-black caret-yellow-800 px-4 py-6 font-light placeholder:text-gray-400 text-sm h-10 w-full focus:outline-none"
            />
        </fieldset>
    );
}

export default Search;

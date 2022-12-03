import { useState } from "react";
import data from "./data"

const SearchDropDown = (props: any) => {

    const { handleValue } = props

    const [searchValue, setSearchValue] = useState("");

    const onChange = (e: any) => {
        setSearchValue(e.target.value);
        handleValue(e.target.value)
    };

    const onSearch = (searchTerm: any) => {
        setSearchValue(searchTerm);
        // our api to fetch the search result

        // const url = `${window.location.hostname}\\s\\${searchTerm}`

        const url = `\\lp\\${searchTerm}`

        window.location.href = url;

        console.log(window.location.href);

        console.log("search ", searchTerm);
    };

    return (
        <>
            <div className='w-full max-w-lg'>
                <div className='flex items-center mt-4'>
                    <input className='h-12 w-4/5 border outline-none rounded-xl px-3' type="text" placeholder='search a career here...' value={searchValue} onChange={onChange} />
                    <div className={searchValue ? "flex items-center -m-16" : "flex items-center -m-10"}>
                        {searchValue && <span onClick={() => setSearchValue("")}>
                            <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                        </span>}
                        <span onClick={() => onSearch(searchValue)}>
                            <svg className=" w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                        </span>
                    </div>
                </div>
                <div className={searchValue && "overflow-y-auto max-h-56 rounded-b-xl mt-2 w-4/5 z-50 overflow-visible bg-white"} >
                    {data
                        .filter((item) => {
                            const searchTerm = searchValue.toLowerCase();
                            const careerName = item.name?.toLowerCase();

                            return (
                                searchTerm &&
                                careerName?.startsWith(searchTerm) &&
                                careerName !== searchTerm
                            );
                        })
                        .slice(0, 50)
                        .map((item) => (
                            <div
                                onClick={() => onSearch(item.name)}
                                className='relative text-left py-1.5 cursor-pointer p-2'
                                key={item.name}
                            >
                                <div className="flex justify-between h-fit">
                                    <span>{item.name}</span>
                                    <span><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg></span>
                                </div>
                            </div>
                        ))}
                </div>
            </div>
        </>
    )
}

export default SearchDropDown
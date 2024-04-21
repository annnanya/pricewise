"use client"
import { FormEvent, useState } from "react"
import { toast } from "react-toastify";
const isValidAmazonProductURL = (url: string) => {
    try {
        const parsedURL = new URL(url);
        const hostname = parsedURL.hostname;

        if (hostname.includes('amazon.com') || hostname.includes('amazon.') || hostname.endsWith('amazon'))
            return true;

    } catch (error) {
        console.error(error);
        return false;
    }
    return false;
}
const SearchBar = () => {
    const [searchPrompt, setSearchPrompt] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const isValidLink = isValidAmazonProductURL(searchPrompt);
        if (!isValidLink)
            toast.error('Please provide a valid link!')

        try {
            setIsLoading(true)
        }
        catch (error) {
            console.error(error);
        }
        finally {
            setIsLoading(false)
        }
    }

    return (
        <form className='flex flex-wrap gap-4 mt-12' onSubmit={handleSubmit}>
            <input
                type="text"
                value={searchPrompt}
                onChange={(event) => setSearchPrompt(event?.target.value)}
                placeholder="Enter product link"
                className="searchbar-input"
            />
            <button
                type="submit"
                className="searchbar-btn"
                disabled={searchPrompt === '' ? true : false}
            >
                {isLoading ? "Searching" : "Search"}
            </button>
        </form>
    )
}

export default SearchBar
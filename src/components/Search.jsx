import { MagnifyingGlass } from "phosphor-react";

export function Search() {
    return (
        <div className="searchInput">
            <MagnifyingGlass size={32} color="#0479FB"/>
            <input type="text" placeholder="Search GitHub username..." />
            <button>Search</button>
        </div>
    )
}
import { useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import SelectMenu from "../SelectMenu/SelectMenu";
import { useTheme } from "../../Hooks/useTheme";
import CountryList from "../CountryList/CountryList";

export default function Home() {
	const [query, setQuery] = useState("");
	const [isDark] = useTheme();
	return (
		<main className={`${isDark ? "dark" : ""}`}>
			<div className="search-filter-container">
				<SearchBar setQuery={setQuery} />
				<SelectMenu setQuery={setQuery} />
			</div>
			<CountryList query={query} />
		</main>
	);
}

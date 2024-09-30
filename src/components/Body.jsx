import { useState } from "react";

export default function Body() {
	const [pokeName, setPokeName] = useState("");

	function handleSubmit(e) {
		e.preventDefault();
		console.log(pokeName);
	}

	return (
		<div className="main-container">
			<div className="search-container">
				<form onSubmit={handleSubmit}>
					<label htmlFor="search-input">Enter Pokemon Name:</label>
					<input
						type="text"
						name="search-input"
						id="search-input"
						onInput={(e) => setPokeName(e.target.value)}
						value={pokeName}
					/>
					<button type="submit">Submit</button>
				</form>
			</div>
		</div>
	);
}

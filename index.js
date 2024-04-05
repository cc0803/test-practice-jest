export default function capitalize(sentence) {
	let solution = [];
	sentence.split(" ").forEach((word) => {
		solution.push(word.charAt(0).toUpperCase() + word.slice(1));
	});
	return solution.join(" ");
}

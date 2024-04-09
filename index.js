export function capitalize(sentence) {
	let solution = [];
	sentence.split(" ").forEach((word) => {
		solution.push(word.charAt(0).toUpperCase() + word.slice(1));
	});
	return solution.join(" ");
}

export function reverse(word) {
	return word.split("").reverse().join("");
}

export function calculator() {
	const add = (n1, n2) => n1 + n2;

	const subtract = (n1, n2) => n1 - n2;

	const divide = (n1, n2) => {
		if (n2 == 0) {
			return "Mathematical Error division by zero";
		}
		return n1 / n2;
	};

	const multiply = (n1, n2) => n1 * n2;

	return { add, subtract, divide, multiply };
}

export function ceasarsCypher(text, factor) {
	text = text.split("");
	let newCharCode;
	factor = factor % 26;

	text = convertToASCII(text);

	for (let i = 0; i < text.length; i++) {
		newCharCode = text[i] + factor;

		if (
			(text[i] < 123 && newCharCode > 122) ||
			(text[i] < 91 && newCharCode > 90)
		) {
			text[i] = String.fromCharCode(newCharCode - 26);
		} else if (
			!(text[i] >= 65 && text[i] <= 90) &&
			!(text[i] >= 97 && text[i] <= 122)
		) {
			text[i] = String.fromCharCode(text[i]);
		} else {
			text[i] = String.fromCharCode(newCharCode);
		}
	}
	return text.join("");
}

function convertToASCII(text) {
	return text.map((letter) => letter.charCodeAt(0));
}

export function analyseArray(arr) {
	let length = arr.length;
	let max = length ? Math.max(...arr) : null;
	let min = length ? Math.min(...arr) : null;
	let avg = length
		? arr.reduce((total = 0, current) => total + current, 0) / length
		: null;
	return { length, max, min, avg };
}

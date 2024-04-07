import { calculator, capitalize, reverse } from "./index.js";

test("Capitalize first letter in string 1", () => {
	expect(capitalize("my")).toBe("My");
});

test("Capitalize first letter in string 2", () => {
	expect(capitalize("dog")).toBe("Dog");
});

test("Capitalize all words in string", () => {
	expect(capitalize("and what he saw was good")).toBe(
		"And What He Saw Was Good"
	);
});

// test reverse function

test("Reverse word", () => {
	expect(reverse("Cheesecake")).toBe("ekaceseehC");
});

test("Reverse sentence", () => {
	expect(reverse("Divide and conquer")).toBe("reuqnoc dna ediviD");
});

// test calculator object

test("Calculator object add function 1", () => {
	expect(calculator().add(3, 4)).toBe(7);
});

test("Calculator object add function 2", () => {
	expect(calculator().add(27, 3)).toBe(30);
});

test("Calculator object add decimal Numbers", () => {
	expect(calculator().add(0.4, 0.2)).toBeCloseTo(0.6);
});

test("Calculator object add negativ numbers", () => {
	expect(calculator().add(-2, -7)).toBe(-9);
});

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

// subtract function

test("subtract 1", () => {
	expect(calculator().subtract(21, 4)).toBe(17);
});

test("subtract decimals", () => {
	expect(calculator().subtract(0.7, 0.3)).toBeCloseTo(0.4);
});

test("subtract negativ numbers", () => {
	expect(calculator().subtract(3, -2)).toBe(5);
});

// divide function

test("divide 1", () => {
	expect(calculator().divide(12, 6)).toBe(2);
});

test("divide negativ and positiv", () => {
	expect(calculator().divide(24, -4)).toBe(-6);
});

test("divide by zero", () => {
	expect(calculator().divide(2, 0)).toBe(
		"Mathematical Error division by zero"
	);
});

test("dividing zero", () => {
	expect(calculator().divide(0, 2)).toBe(0);
});

// test multiply function

test("multiply (1)", () => {
	expect(calculator().multiply(8, 8)).toBe(64);
});

test("mulitply by zero", () => {
	expect(calculator().multiply(0, 5)).toBe(0);
});

test("multiply decimals", () => {
	expect(calculator().multiply(0.1, 0.5)).toBeCloseTo(0.05);
});

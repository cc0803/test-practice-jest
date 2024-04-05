import capitalize from "./index.js";

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

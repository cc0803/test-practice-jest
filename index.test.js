import capitalize from "./index.js";

test("Capitalize first letter in string", () => {
	expect(capitalize("my")).toBe("My");
});

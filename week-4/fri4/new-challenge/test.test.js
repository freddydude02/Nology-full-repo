import { calculateRectangle } from "./test";

describe("Testing rectangle function", () => {
    it("return correct area for numbers", () => {
        expect(calculateRectangle(2, 4)).toBe(8);
        expect(calculateRectangle(4, 4)).toBe(16);
        expect(calculateRectangle(8, 8)).toBe(64);
    });
    it("return correct area for strings", () => {
        expect(calculateRectangle("2", "4")).toBe(8);
        expect(calculateRectangle("4", "4")).toBe(16);
        expect(calculateRectangle("8", "8")).toBe(64);
    });
});
describe("Testing rectangle function for errors", () => {
    it("return error message for 0 or negative numbers", () => {
        expect(calculateRectangle(-2, -4)).toBe("error");
        expect(calculateRectangle(-2, 4)).toBe("error");
        expect(calculateRectangle(2, -4)).toBe("error");
        expect(calculateRectangle(2, 0)).toBe("error");
        expect(calculateRectangle(-2, 0)).toBe("error");
        expect(calculateRectangle(0, 0)).toBe("error");
        expect(calculateRectangle(0)).toBe("error");
    });
    it("return error message for no parameters at all", () => {
        expect(calculateRectangle()).toBe("error");
    });
    it("return error message for no parameters at all", () => {
        expect(calculateRectangle()).toBe("error");
    });
    it("return error message for empty strings", () => {
        expect(calculateRectangle("", "")).toBe("error");
        expect(calculateRectangle("", 2)).toBe("error");
        expect(calculateRectangle(2, "")).toBe("error");
        expect(calculateRectangle("")).toBe("error");
    });
});
describe("Testing rectangle fuctions for edge cases", () => {
    it("return square message when only x is specified", () => {
        expect(calculateRectangle(x)).toBe("This is a square");
    });
});

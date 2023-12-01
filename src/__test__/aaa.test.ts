
function addNumbers(a: number, b: number): number {
    return a + b;
}

describe("足し算", () => {
    it("adds two numbers", () => {
        expect(addNumbers(2, 3)).toBe(5);
    });

    it("adds negative numbers", () => {
        expect(addNumbers(-2, -3)).toBe(-5);
    });

    it("adds decimal numbers", () => {
        expect(addNumbers(0.1, 0.2)).toBeCloseTo(0.3);
    });
});
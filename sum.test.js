import sum from "./sum.js";

describe("test for the sum func", () => {

test("adds -5-5 to equal -11", () => {
    expect(sum(-5, -6)).toBe(-11)
})


test("adds 2+2 to equal 4", () => {
    expect(sum(2, 2)).toBe(4)
})

})
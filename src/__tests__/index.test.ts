import { isInDomain } from "../index";
describe("Test Feedback", () => {
  it("Should return true if mail is in domain", () => {
    const result = isInDomain("info@example.com", "example.com");
    expect(result).toBe(true);
  });
  it("Should return false if mail is not in domain", () => {
    const result = isInDomain("info@example.com", "example.it");
    expect(result).toBe(false);
  });
});

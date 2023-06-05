import { describe, it, assert } from "vitest";
import multiply from "../lib";

describe("multiply", () => {
  it("will multiply two numbers", () => {
    assert.equal(multiply(5, 5), 25);
    assert.equal(multiply(5, 2), 10);
  });
});

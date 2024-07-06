import { it, expect } from "vitest";
import { carry } from "@/shared/utils/carry";

it("carry multiply", () => {
  let result = carry(2)(3);

  expect(result).toEqual(6);
});

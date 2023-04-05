import path from "node:path";
import { hashFolder } from "./hashFolder";

describe("hashFolder", () => {
  test("should calculate correct MD5 hash value for folder with files", async () => {
    const folderPath = path.join(process.cwd(), "src", "lib", "test-folder");
    const expectedMd5 = "26e971350cee9438a9e89d4b575a7a98";

    const actualMd5 = await hashFolder(folderPath);

    expect(actualMd5).toBe(expectedMd5);
  });
});

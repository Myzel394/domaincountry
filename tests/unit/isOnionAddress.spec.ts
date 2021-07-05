import { isOnionAddress } from "@/utils";

describe("isOnionAddress", () => {
    it("works with onion address", () => {
        const url = "http://test.onion";
        const actual = isOnionAddress(url);
        const expected = true;

        expect(actual).toBe(expected);
    });

    it("doesn't work with normal site", () => {
        const url = "https://example.com";
        const actual = isOnionAddress(url);
        const expected = false;

        expect(actual).toBe(expected);
    });
});


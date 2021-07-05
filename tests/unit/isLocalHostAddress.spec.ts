import { isLocalHostAddress } from "@/utils";

describe("isLocalHostAddress", () => {
    it("works with Chrome site", () => {
        const url = "chrome://settings";
        const actual = isLocalHostAddress(url);
        const expected = true;

        expect(actual).toBe(expected);
    });

    it("works with localhost site", () => {
        const url = "http://localhost:8000";
        const actual = isLocalHostAddress(url);
        const expected = true;

        expect(actual).toBe(expected);
    });

    it("works with localhost ip address", () => {
        const url = "http://127.0.0.1:8000";
        const actual = isLocalHostAddress(url);
        const expected = true;

        expect(actual).toBe(expected);
    });

    it("doesn't work with normal site", () => {
        const url = "https://example.com";
        const actual = isLocalHostAddress(url);
        const expected = false;

        expect(actual).toBe(expected);
    });
});


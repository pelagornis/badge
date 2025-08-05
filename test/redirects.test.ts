import { redirectURL } from "../src/redirects";

describe("Redirect logic", () => {
  it("should return official redirect URL", () => {
    expect(redirectURL("/official.svg")).toBe(
      "https://img.shields.io/badge/project-official-green.svg?colorA=303033&colorB=226af6&label=Pelagornis"
    );
  });

  it("should return default URL for unknown path", () => {
    expect(redirectURL("/unknown.svg")).toBe("https://img.shields.io/badge/project-error-green.svg?colorA=303033&colorB=f94343&label=Pelagornis");
  });
});
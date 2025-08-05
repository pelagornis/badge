const redirects: Record<string, string> = {
  "/official.svg": "https://img.shields.io/badge/project-official-green.svg?colorA=303033&colorB=226af6&label=Pelagornis",
  "/team.svg":     "https://img.shields.io/badge/project-team-green.svg?colorA=303033&colorB=ff8a2c&label=Pelagornis",
  "/assemble.svg": "https://img.shields.io/badge/project-assemble-green.svg?colorA=303033&colorB=F2F562&label=Pelagornis",
  "/suspended.svg":"https://img.shields.io/badge/project-suspended-green.svg?colorA=303033&colorB=CDCDCD&label=Pelagornis",
}

export function redirectURL(path: string): string {
    return redirects[path] || "https://img.shields.io/badge/project-error-green.svg?colorA=303033&colorB=f94343&label=Pelagornis"
}
# Roman Staněk – osobní web

Moderní osobní a profesní web zaměřený na prezentaci služeb v oblasti webového vývoje, tvorby webových aplikací a automatizace.

Projekt vznikl jako kompletní náhrada původního webu postaveného na WordPressu. Cílem bylo získat větší kontrolu nad architekturou, výkonem, uživatelským rozhraním a procesem vývoje i nasazování.

**Live:** https://stanek-roman.cz  
**Staging:** https://staging.stanek-roman.cz

## Tech stack

| Oblast | Technologie |
|---|---|
| Framework | Next.js 16 (App Router) |
| UI | React 19, Chakra UI v3 |
| Jazyk | TypeScript |
| Validace | Zod |
| E-mailová integrace | Resend |
| Hosting | Vercel |
| Verzování | Git, GitHub |

## Architektura a implementace

### Komponentový systém

Web využívá opakovaně použitelné React komponenty a jednotný design systém založený na Chakra UI.

Obsah je oddělený od prezentační vrstvy a spravovaný prostřednictvím strukturovaných TypeScript datových souborů.

### Dynamické stránky služeb

Jednotlivé stránky služeb sdílejí společnou strukturu a komponenty. Jejich obsah se generuje z dat definovaných pro konkrétní službu.

Tento přístup omezuje duplicitu a usnadňuje údržbu i rozšiřování webu.

### Poptávkový formulář

Formulář je implementovaný s vlastní serverovou API route.

- Validace vstupních dat pomocí Zod.
- Zpracování příloh.
- Odesílání poptávek přes Resend.
- Zpracování chyb a validačních stavů.

### SEO a migrace

Součástí projektu byla migrace z WordPressu na Next.js se zachováním dostupnosti původních URL prostřednictvím přesměrování.

Implementace zahrnuje metadata, canonical URL, sitemap.xml a robots.txt.

## Vývojový workflow

Vývoj probíhá prostřednictvím oddělených Git větví:

`feature/*` → `staging` → `main`

Změny se integrují přes Pull Requesty s využitím Squash and merge.

Nasazování probíhá na Vercelu s odděleným staging a produkčním prostředím.

## Technická rozhodnutí

**Next.js místo WordPressu**  
Větší kontrola nad implementací, architekturou a deployment workflow.

**Chakra UI místo Tailwind CSS**  
Komponentový přístup, centrální design systém a konzistentní práce se styly.

**Obsah v TypeScriptu místo CMS**  
Jednodušší architektura odpovídající rozsahu projektu, bez nutnosti provozovat administrační rozhraní.

**Sdílené komponenty pro stránky služeb**  
Menší duplicita, jednodušší údržba a konzistentní uživatelské rozhraní.

## Stav projektu

MVP bylo nasazeno do produkce 20. října 2026.

Projekt je nadále aktivně udržován a rozvíjen.

## Autor

**Roman Staněk**  
Webový vývojář

Web: https://stanek-roman.cz  
GitHub: https://github.com/StanekRoman

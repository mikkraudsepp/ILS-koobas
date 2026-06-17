# Koobas

Ühelehe-demoleht ruumiinstallatsioonile **Koobas** — peeglitega kaetud koobas,
mille sees avaneb veealune maailm. Tehtud **I Land Sound 2026** festivali jaoks
(16.–19. juuli 2026, Illiku laid, Saaremaa).

Stiil ja värvid järgivad I Land Sound'i identiteeti (must + kreem alus, kollane
aktsent; fondid **Krona One** + **Sora**).

## Tehnoloogia

Puhas staatiline leht — **HTML + CSS + JS**, ilma ehitusprotsessita ja raamistikuta.
Majutatav tasuta GitHub Pages'is.

```
index.html      – lehe struktuur ja kogu tekst (eesti keeles)
styles.css       – kujundus (I Land Sound stiil)
script.js        – kerimisanimatsioonid + piltide suurendus (lightbox)
images/          – pildid kategooriate kaupa (vt images/README.md)
CONTENT.md       – tekstimustand (saab vabalt toimetada)
.nojekyll        – ütleb GitHub Pages'ile: serveeri faile muutmata
```

## Kohalik eelvaade

Ava `index.html` brauseris või käivita lihtne server kausta juurest:

```bash
python -m http.server 8000
# ava http://localhost:8000
```

## Avaldamine GitHub Pages'is

1. Lükka muudatused GitHubi (`git push`).
2. Repo → **Settings → Pages**.
3. **Source:** "Deploy from a branch".
4. **Branch:** `main`, kaust `/ (root)` → **Save**.
5. Mõne minuti pärast on leht aadressil
   **https://mikkraudsepp.github.io/ILS-koobas/**

## Piltide ja sisu lisamine

- Pildid on kategooriates `images/` all (väljast, seinad, kala, lagi, istumisala,
  mänguline). Uue pildi saab lisada kausta või saata link — see laaditakse alla.
- Seinaprojektsiooni visuaalid on lingitud Google Drive'i kausta (nupp lehel),
  kuna toorvideod on GitHubi jaoks liiga suured.

## Autorid

Kärolin Kivisikk, Mikk Raudsepp

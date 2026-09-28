# Portfolio site for Md. Mahin Rahman

A one-page personal site: near-black background, one electric-coral accent, the name set edge to edge in
Syne ExtraBold, and a cut-out portrait standing inside it.

**Stack:** React 19 · Vite · TypeScript · Tailwind CSS v4 · Motion (`motion/react`) · lucide-react · clsx.
No component library, no CMS, no form backend: the contact button is a `mailto:` link.

## Run it

```bash
cd portfolio
npm install
npm run dev       # local dev server
npm run build     # type-check and build to dist/
npm run preview   # serve the production build
```

## Edit the content

Everything you read on the page is in **`src/content.ts`**: hero text, projects, research, experience, numbers,
the quote, the About text, the contact copy and the links. Change it there; the components only lay it out.

| What | Where |
|:--|:--|
| Copy, links, project list | `src/content.ts` |
| Project, research and portrait images | `src/assets/` (import them in `content.ts`) |
| Downloadable CV | `public/Md-Mahin-Rahman-CV.pdf` |
| Colours, fonts, type scale, hero sizing | `src/index.css` |

### Add case competitions

The **Case competitions** section and its nav link stay hidden until `cases` in `src/content.ts` has an entry.
For each deck:

1. Export the title slide as an image (WebP or JPG, about 1200 px wide) into `src/assets/`.
2. Import it at the top of `content.ts` and add an entry:

   ```ts
   import caseAcme from './assets/case-acme.webp'

   export const cases: TalkItem[] = [
     {
       title: 'Deck title',
       description: 'The problem and your recommendation, in one line.',
       venue: 'Competition, organiser · Result · 2025',
       href: 'https://link-to-the-deck.pdf', // optional
       thumb: caseAcme, // shown next to the pointer on hover
     },
   ]
   ```

### Swap the portrait

`src/assets/portrait-hero.webp` is a transparent cut-out (560 × 963), graded black and white. Any replacement
should also be a transparent PNG/WebP, framed from the top of the head to about the hips, with the head near
the top edge. `portrait-about.webp` is the same photo on a studio backdrop at 4:5.

## Layout notes

- **Hero overlap.** The name size `--F` fits "RAHMAN" to the viewport width (Syne 800 sets it at 7.47em), and is
  capped by the viewport height. The portrait is `3.3 × --F` tall; line one sits behind it (`z-0`) and line two
  in front (`z-20`). Phones and portrait tablets stack the name and put the portrait underneath.
- **Cursor dot.** A 10 px coral dot follows the pointer on a spring and grows to 64 px with "View" over project
  cards. It is not rendered on touch devices.
- **Reduced motion.** Motion respects `prefers-reduced-motion`, and the marquee stops.

## Deploy

`vite.config.ts` uses a relative `base`, so `dist/` works from any path.

- **GitHub Pages (recommended):** create a repository named `thisisdibbo.github.io`, copy this folder's contents
  into it, and publish `dist/` with the official *Deploy static content to Pages* workflow. The site is then at
  `https://thisisdibbo.github.io`.
- **Vercel or Netlify:** import the repository, set the root directory to `portfolio`, the build command to
  `npm run build` and the output directory to `dist`.

After deploying, add an `og:image` (a 1200 × 630 screenshot of the hero) with its absolute URL in `index.html`
so links preview well on LinkedIn.

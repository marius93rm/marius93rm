# Profile assets

## Course covers

The three covers in `courses/` were generated with the built-in image-generation tool, visually checked, and exported as 1080 × 720 JPEGs for the profile README. Originals are retained outside the repository. These are illustrations, not course screenshots.

Design direction: a developer/instructor portfolio for recruiters and learners. Preserve GitHub's native layout and technology colors. Coordinated paper-sculpture course covers; the contribution snake is the only animation. Design variance 5/10, motion 4/10, density 6/10 (the full CV stack is explicitly requested).

### react

Use case: ads-marketing. Create one finished landscape 3:2 repository course cover for Marius Minia's GitHub profile, part of a coordinated set of three. Crisp Swiss-inspired technical editorial graphic, flat off-white #f6f8fa background, near-black large bold sans-serif title aligned left, very generous margins. One precise dimensional paper-sculpture geometric illustration on the right, restrained soft shadows, no gradients or glow. ONLY text: 'Learn React' and small author 'Marius Minia' at bottom left. Title must be fully readable at thumbnail size. No badges, no fake UI, no invented claims, no watermark, no border, no extra text. Main title exactly 'Learn React', on two lines if necessary. Illustration: cyan #61dafb and charcoal, interlocking modular folded square frames suggesting reusable components.

### python

Use case: ads-marketing. Create one finished landscape 3:2 repository course cover for Marius Minia's GitHub profile, part of a coordinated set of three. Crisp Swiss-inspired technical editorial graphic, flat off-white #f6f8fa background, near-black large bold sans-serif title aligned left, very generous margins. One precise dimensional paper-sculpture geometric illustration on the right, restrained soft shadows, no gradients or glow. ONLY text: 'Learn Python' and small author 'Marius Minia' at bottom left. Title must be fully readable at thumbnail size. No badges, no fake UI, no invented claims, no watermark, no border, no extra text. Main title exactly 'Learn Python', on two lines if necessary. Illustration: Python blue #3776ab and warm yellow #ffd343, two interwoven folded paper ribbons forming an elegant loop.

### csharp

Use case: ads-marketing. Create one finished landscape 3:2 repository course cover for Marius Minia's GitHub profile, part of a coordinated set of three. Crisp Swiss-inspired technical editorial graphic, flat off-white #f6f8fa background, near-black large bold sans-serif title aligned left, very generous margins. One precise dimensional paper-sculpture geometric illustration on the right, restrained soft shadows, no gradients or glow. ONLY text: 'Learn C#' and small author 'Marius Minia' at bottom left. Title must be fully readable at thumbnail size. No badges, no fake UI, no invented claims, no watermark, no border, no extra text. Main title exactly 'Learn C#', on two lines if necessary. Illustration: C# violet #512bd4 and lavender, carefully stacked architectural paper blocks suggesting structured software.

Python correction prompt: Edit only the author name to “Marius Minia”; preserve the illustration, layout and all other text.

## Contribution snake

Generated from `marius93rm`'s actual GitHub contribution calendar using [Platane/snk](https://github.com/Platane/snk). The checked-in SVGs are an initial snapshot, not invented activity.

The workflow `.github/workflows/contribution-snake.yml` regenerates light/dark SVGs daily at 04:23 UTC, on manual dispatch, and when its own configuration or the static-image script changes on `main`. It commits only the four contribution assets to `main`, without force-pushing. No PAT or extra repository secret is required: it uses GitHub's built-in token. Actions must be enabled and branch rules must permit the bot to push; otherwise the existing images remain available.

After publishing the files, the initial push triggers generation. To retry, run **Actions → Update contribution snake → Run workflow**. The remote workflow has not been run as part of local editing.

Reduced-motion readers receive a static version of the same contribution grid through `<picture>`; theme variants work in light and dark modes. Run `node scripts/static-snake.mjs` after regenerating the animated SVGs.

The uploaded CV is intentionally not included in this repository.

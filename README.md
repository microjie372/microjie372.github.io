# microjie372.github.io

Personal academic homepage of Zhijie Zheng, live at <https://microjie372.github.io>.

Built with [Jekyll](https://jekyllrb.com/) and the [al-folio](https://github.com/alshedivat/al-folio) theme (v1.x, MIT license), with a warm light/dark color scheme and custom typography.

## Where to edit what

| Content | File |
| --- | --- |
| Bio, photo, subtitle on the home page | `_pages/about.md`, `assets/img/prof_pic.jpg` |
| Publications (all pages) | `_bibliography/papers.bib` (`selected = {true}` puts a paper on the home page) |
| Publication thumbnails | `assets/img/publication_preview/*.jpg`, referenced by `preview = {...}` |
| Venue badge colors | `_data/venues.yml` |
| News items | one Markdown file per item in `_news/` |
| CV page | `_data/cv.yml`; the PDF button points to `assets/pdf/CV-Zhijie_ZHENG.pdf` |
| Social icons | `_data/socials.yml` |
| Colors (light and dark) | `assets/_sass/_themes.scss` |
| Fonts, cards, spacing | `assets/_sass/_custom.scss`; font files are loaded in `_config.yml` (`google_fonts`) |
| Project pages | `ttsa3r/`, `prism/`, `rdgsplat/` (`index.html` plus `images/`), shared CSS and JS in `project-static/` |
| Site-wide settings | `_config.yml` |

## Deployment

Every push to `master` runs `.github/workflows/deploy.yml`, which builds the site and pushes the result to the `gh-pages` branch. GitHub Pages serves `gh-pages` (Settings, Pages, Deploy from a branch, `gh-pages` / root).

## Local preview

Install Ruby 3.3 with DevKit, then:

```bash
bundle install
bundle exec jekyll serve
```

ImageMagick is optional locally; without it, set `imagemagick: enabled: false` in a separate local config file.

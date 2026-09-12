# Zagreb Spring Course 2018 website (archived edition)

Static archive of the Zagreb Spring Course 2018 site: WordPress 4.9 with the Hestia theme, 2 pages and 3 news posts, plus a hand-made `sg/` folder next to the install with the survival guide, the syllabus and a schedule page. It was rebuilt from the backup a former maintainer left on the server in July 2018 (a MySQL data directory and the web root, found during the 2026 server retirement), not from a live site, and it is complete: every page the database listed as published is here. Every page is plain HTML; there is no database, no PHP and nothing to keep patched.

Home: **https://2018.course.best.hr/** (the site ran at **best.hr/spc**)

- 5 published pages, 63 files, 8.1 MB
- Verified: every page and asset requested over HTTP, 56 URLs, **0 failures**, at the root and under a sub-path
- Verified: every page rendered in a browser, **0 broken images**
- Verified: after the deliberate changes below, the visible text and image list of every page match the 2018 install running in a container

## Looking at it locally

    python3 -m http.server 8000

Then open <http://127.0.0.1:8000/>. Any static file server works.

## How it was made

The 2018 database was started in a MySQL 5.7 container and the 2018 web root in a WordPress 4.9 container with PHP 7.2, the site's address rewritten to the container. The page list came from the database, not from what a crawler happened to find; the site was mirrored with `wget`, every page refetched raw, relinked to relative paths, and compared page by page with the container. Everything that would ask a server for something was stripped: feed, oEmbed, REST, RSD, shortlink and manifest links, the embed and comment-reply scripts, the comment forms. Google Analytics, Google Fonts, YouTube embeds and the other third-party loads the original pages made are kept. The tooling and the logs live in the migration notes alongside this archive.

## What deliberately differs from the 2018 pages

### Personal contact details

17 occurrences of two organisers' e-mail addresses were replaced with **course@best.hr** and one mobile number was removed (front page contact block). This archive is public and outlives the students named in it.

### Repairs and limits

`sg/survival.pdf` was a 30.6 MB scan, over the 25 MiB per-file limit of Cloudflare Workers static assets; it was recompressed with Ghostscript to 2.3 MB, same 16 pages, visually identical. The header background of the news pages, stored in the theme settings under a developer's machine address, points at the file again. The Pirate Forms contact form on the front page renders but cannot submit.

## Editions

BEST Course editions on the web: Spring Course 2018 (this repository), the current site at [course.best.hr](https://course.best.hr/) ([BEST-Course-Web](https://github.com/BEST-Zagreb/BEST-Course-Web)).

## Hosting

Live at <https://2018.course.best.hr/>, served by Cloudflare Workers as static files straight from this repository. Every push to `main` is deployed by Workers Builds within a minute or two. Every page carries an archive notice and a `noindex` header, added at the edge by `banner.js`, so search engines keep sending people to the current site; the archived files themselves are untouched.

## Wayback Machine

This edition ran at <http://best.hr/spc/>; the Internet Archive's calendar for it is <https://web.archive.org/web/*/best.hr/spc*>, with captures from the period of this edition where the crawler reached them. This repository is the complete copy; the archive is a partial, independent second copy.

## Licence

The content, images and copy belong to BEST Zagreb. Third-party theme and plugin assets under `wp-content/` remain under their own licences and are included only because the pages need them to render as they originally did.

# Change record — North Zone email address, 2026-10-06

**Edmonton time of change: 2026-10-06, evening.** Backups of all nine files as they stood before the edit are in this folder, with `_checksums_before.txt`. Rendered page images from the after-check are in `_render_checks/`.

## What changed

`northzoneaish@gov.ab.ca`  →  `ALSS.NorthZoneDIA@gov.ab.ca`

Replaced inside the page content, 34 occurrences across 9 live fillables, and a one-page notice added at the end of each form giving the new address first and the old one as a redirect.

| File | Swaps | Pages before → after | Fields |
|---|---|---|---|
| Fillable_AISH_File_Correction_Letter.pdf | 1 | 4 → 5 | 18 unchanged |
| Fillable_CDB_200_Deduction_Correction_Letter.pdf | 1 | 4 → 5 | 17 unchanged |
| Fillable_CDB_Clawback_Documentation.pdf | 25 | 5 → 6 | 54 unchanged |
| Fillable_CDB_Deduction_Correction_Letter_v2_July2026.pdf | 1 | 4 → 5 | 18 unchanged |
| Fillable_CDB_Overpayment_Appeal_Form.pdf | 2 | 4 → 5 | 26 unchanged |
| Fillable_Employment_Barriers_Notice_July2026.pdf | 1 | 5 → 6 | 21 unchanged |
| Fillable_Monthly_Income_Status_Report.pdf | 1 | 2 → 3 | 17 unchanged |
| Fillable_Pre_Appeal_Submission.pdf | 1 | 4 → 5 | 23 unchanged |
| Fillable_Travel_Benefit_Request_July2026.pdf | 1 | 4 → 5 | 22 unchanged |

## How it was done, and why it is safe

The text sits in the page content stream as whole drawn lines. Each file was uncompressed with `qpdf --qdf`, the address string replaced, repaired with `fix-qdf`, and written back with `qpdf`. The new address is 4 characters longer, which widens the drawn line by **25 points**. Before editing, every affected line was measured:

- The widest affected line ends at x≈324 on a 612-point page with a margin at 562. Clear by more than 230 points.
- In the 25-row office directory the email column runs x=290 to 389, widening to 414; the phone column starts at 478. Clear by 64 points.

After editing, three pages were rendered and looked at: the tightest line (Pre-Appeal page 4), the 25-row directory (Clawback page 5), and the new notice page. No overlap, no clipping, columns aligned.

Verified after the edit on all nine: zero occurrences of the old address remain, the expected number of new ones is present, page counts rose by exactly one, and every AcroForm field survived.

## Known cosmetic leftovers, not fixed

1. **Page-number footers.** Several forms print "Page 4 of 4" and similar. The added notice page makes those totals one short. The notice page is clearly marked as a campaign addendum, so it reads as an appendix rather than an error.
2. **The directory footnote in Fillable_CDB_Clawback_Documentation.pdf** still reads "Directory verified against alberta.ca/contact-aish as of May 2026." That date is now stale.

## Still carrying the old address — NOT changed this run

**The website, 21 occurrences** (out of scope for this run, flagged for a decision):

- `js/daily-news.js` — 9
- `js/field-notes.js` — 4
- `js/field-notes (1).js` — 4
- `js/email-letters.js` — 2
- `js/app.js` — 1
- `accommodation-emails.html` — 1

**Fillables in subfolders, left alone by choice:**

- `OUTOFDATE-retire/` — 2 files
- `september-2026-updates/` — 8 files

## The government source has not caught up

`https://www.alberta.ca/contact-aish-and-adap`, read 2026-10-06, server last-modified **Tue, 06 Oct 2026 21:45:14 GMT** — updated the same day — **still lists `northzoneaish@gov.ab.ca` for every Edmonton and northern office**. The new address appears nowhere on it. The campaign's forms are ahead of the government's own contact page, which is why the notice page names both addresses and tells people to keep the automatic reply.

**Watch:** the contact page, for the switch to the new address. Until it changes, the only public evidence of the new inbox is the automatic reply from the old one.

## The spelling

The old inbox is **northzoneaish** (a-i-s-h). The announcement post drafted on 2026-10-06 said **northzoneiash** (i-a-s-h), which does not match the website, the fillables or alberta.ca. Corrected post text is in `CORRECTED_POST_2026-10-06.md` beside this file.

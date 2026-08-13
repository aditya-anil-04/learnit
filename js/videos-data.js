/* ============================================================
   LearnIt — guide list

   THIS IS THE ONLY FILE YOU SHOULD NEED TO EDIT DAY-TO-DAY.

   To add a new guide from a Google Form submission, copy one of
   the objects below, paste it into the GUIDES array, and fill
   in the fields. Then save the file, commit/push (or re-upload
   to Vercel), and the homepage updates automatically.

   Fields:
     platform    "youtube" or "instagram"
     url         the full post/video URL (any normal YouTube or
                 Instagram link format works — just paste it)
     title       short title shown on the card
     description one or two sentences on what it teaches
     subject     short label, e.g. "Math" or "Reading" (optional —
                 delete the line if you don't want one)

   To remove a guide, delete its whole { ... } block.
   Order here is the order they appear on the page.
   ============================================================ */

window.GUIDES = [
  {
    platform: "youtube",
    url: "https://youtu.be/TIafCHAVygs?si=jOatbBAKsGEM142v",
    title: "HCF and LCM",
    description: "Concepts of HCF and LCM explained easily and from the basics in Hindi for Maharashtra board curriculum",
    subject: "Math"
  },
  {
    platform: "instagram",
    url: "https://www.instagram.com/reel/REPLACE_WITH_REAL_POST_URL/",
    title: "Example — replace me",
    description: "This is a placeholder for an Instagram reel or post. Paste a real Instagram video URL here — it will embed automatically. Delete this block once you have real guides.",
    subject: "Example"
  }
];

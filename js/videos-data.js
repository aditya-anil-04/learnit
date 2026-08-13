/* ============================================================
   LearnIt — guide list

   THIS IS THE ONLY FILE YOU SHOULD NEED TO EDIT DAY-TO-DAY.

   To add a new guide from a Google Form submission, copy one of
   the objects below, paste it into the GUIDES array, and fill
   in the fields. Then save the file, commit/push (or re-upload
   to Vercel), and the homepage updates automatically.

   Fields:
     platform    "youtube", "instagram", or "x" (for X/Twitter posts)
     url         the full post/video URL — any normal YouTube,
                 Instagram, or X/Twitter link format works, just
                 paste it
     title       short title shown on the card
     description one or two sentences on what it teaches
     subject     which class this guide is for — use "Class 4"
                 through "Class 10" so it shows up under the
                 matching filter button on the homepage

   To remove a guide, delete its whole { ... } block.

   Add new guides to the BOTTOM of this list — the homepage always
   shows the most recently added guide first, so the newest entry
   here appears first on the page.
   ============================================================ */

window.GUIDES = [
{
    platform: "youtube",
    url: "https://youtu.be/TIafCHAVygs?si=jOatbBAKsGEM142v",
    title: "HCF and LCM",
    description: "Concepts of HCF and LCM explained easily and from the basics in Hindi for Maharashtra board curriculum",
    subject: "Class 7"
},
{
    platform: "youtube",
    url: "https://www.youtube.com/watch?v=coTGEPXnW-M",
    title: "English Verbs",
    description: "English Verbs",
    subject: "Class 8"
},
  /*{
    platform: "instagram",
    url: "https://www.instagram.com/reel/REPLACE_WITH_REAL_POST_URL/",
    title: "Example — replace me",
    description: "This is a placeholder for an Instagram reel or post. Paste a real Instagram video URL here — it will embed automatically. Delete this block once you have real guides.",
    subject: "Class 4"
  },
  {
    platform: "x",
    url: "https://x.com/REPLACE_WITH_ACCOUNT/status/REPLACE_WITH_REAL_POST_ID",
    title: "Example — replace me",
    description: "This is a placeholder for an X (Twitter) post. Paste a real x.com or twitter.com status URL here — it will embed automatically. Delete this block once you have real guides.",
    subject: "Class 9"
  }*/
];

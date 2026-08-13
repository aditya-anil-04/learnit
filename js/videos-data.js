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
    subject: "Class 7"
  },
  {
    platform: "youtube",
    url: "https://www.youtube.com/watch?v=coTGEPXnW-M",
    title: "English Verbs",
    subject: "Class 8"
  },
  {
    platform: "youtube",
    url: "https://www.youtube.com/watch?v=UB0wmTr88yU&list=PLgnbiIJ2vlFHkUBKaslXWhAmHaiXBuSkd",
    title: "Geometrical Constructions (Hindi)",
    subject: "Class 7"
  },
  {
    platform: "youtube",
    url: "https://www.youtube.com/watch?v=mJ_RCCNuxjs",
    title: "Introduction to Geometry",
    subject: "Class 6"
  },
  {
    platform: "youtube",
    url: "https://www.youtube.com/watch?v=-AnQj-ITtIw&list=PLW6ZJtqCeoWvpx_5yvDm9D44FgKWCZHM7",
    title: "Parts of Speech (English & Hindi)",
    subject: "Class 5"
  },
  {
    platform: "instagram",
    url: "https://www.instagram.com/reel/DUnz2rtjA5B/?igsh=eG5qZnkwMWt3NG92",
    title: "3-Digit Multiplication Trick",
    subject: "Class 4"
  },
  {
    platform: "instagram",
    url: "https://www.instagram.com/p/DZvzh3GT4WL/?igsh=MW9zY3lvZGxod3I0cA==",
    title: "Tenses",
    subject: "Class 10"
  },
  /*{
    platform: "instagram",
    url: "https://www.instagram.com/reel/REPLACE_WITH_REAL_POST_URL/",
    title: "Example — replace me",
    subject: "Class 4"
  },
  {
    platform: "x",
    url: "https://x.com/REPLACE_WITH_ACCOUNT/status/REPLACE_WITH_REAL_POST_ID",
    title: "Example — replace me",
    subject: "Class 9"
  }*/
];

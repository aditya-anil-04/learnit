# LearnIt

A microsite that pins Instagram and YouTube study videos for underprivileged
kids to learn from. Two pages, no build step, no framework — plain HTML/CSS/JS,
so it deploys on Vercel as-is.

## Structure

```
learnit/
├── index.html          Homepage — the pinboard of guides
├── submit.html          Submission page — links to your Google Form
├── css/
│   └── style.css        All styling
├── js/
│   ├── videos-data.js    ← EDIT THIS to add/remove guides
│   └── render.js         Turns videos-data.js into cards (no need to touch)
└── README.md
```

## Adding a new guide

Open `js/videos-data.js` and add a new object to the `GUIDES` array:

```js
{
  platform: "youtube",              // "youtube" or "instagram"
  url: "https://youtube.com/...",   // paste the full link
  title: "Long division, step by step",
  description: "A clear walkthrough of long division for grade 4-5.",
  subject: "Math"                   // optional
}
```

Save, then redeploy (see below). That's the entire workflow — no other file
needs to change for day-to-day updates.

## Before you launch

- In `submit.html`, replace both placeholder URLs with your real Google Form
  link (the button `href` and the `iframe src` — Google Forms → **Send** →
  the `<>` embed icon gives you the embed URL).
- Delete the two "Example — replace me" entries in `js/videos-data.js` once
  you have real guides.

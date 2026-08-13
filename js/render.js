/* ============================================================
   LearnIt — renders GUIDES (from videos-data.js) into cards.
   You shouldn't need to edit this file to add or remove guides —
   see js/videos-data.js for that.
   ============================================================ */

(function () {
  "use strict";

  const grid = document.getElementById("card-grid");
  const emptyState = document.getElementById("empty-state");
  const countEl = document.getElementById("guide-count");
  const filterBtns = document.querySelectorAll(".filter-btn");

  if (!grid) return; // not on a page with a card grid

  // Small deterministic rotation so cards feel hand-pinned,
  // without being random on every reload.
  const ROTATIONS = [-1.4, 1.1, -0.6, 1.6, -1.8, 0.8];

  function extractYouTubeId(url) {
    const patterns = [
      /youtu\.be\/([A-Za-z0-9_-]{6,})/,
      /youtube\.com\/watch\?v=([A-Za-z0-9_-]{6,})/,
      /youtube\.com\/embed\/([A-Za-z0-9_-]{6,})/,
      /youtube\.com\/shorts\/([A-Za-z0-9_-]{6,})/
    ];
    for (const pattern of patterns) {
      const match = url.match(pattern);
      if (match) return match[1];
    }
    return null;
  }

  // Turns "Class 4" into "class-4" so it can be compared against a
  // filter button's data-filter value, regardless of exact spacing
  // or capitalization typed into videos-data.js.
  function slugify(text) {
    return (text || "")
      .toString()
      .trim()
      .toLowerCase()
      .replace(/\s+/g, "-");
  }

  function buildMedia(guide) {
    const media = document.createElement("div");
    media.className = "card-media";

    if (guide.platform === "youtube") {
      const videoId = extractYouTubeId(guide.url);
      const iframe = document.createElement("iframe");
      iframe.src = videoId
        ? `https://www.youtube.com/embed/${videoId}`
        : guide.url;
      iframe.title = guide.title || "YouTube video";
      iframe.loading = "lazy";
      iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
      iframe.allowFullscreen = true;
      media.appendChild(iframe);
    } else if (guide.platform === "instagram") {
      const blockquote = document.createElement("blockquote");
      blockquote.className = "instagram-media";
      blockquote.setAttribute("data-instgrm-permalink", guide.url);
      blockquote.setAttribute("data-instgrm-version", "14");
      media.appendChild(blockquote);
    } else if (guide.platform === "x") {
      const blockquote = document.createElement("blockquote");
      blockquote.className = "twitter-tweet";
      const link = document.createElement("a");
      link.href = guide.url;
      blockquote.appendChild(link);
      media.appendChild(blockquote);
    }

    return media;
  }

  function buildCard(guide, index) {
    const card = document.createElement("article");
    card.className = "guide-card";
    card.dataset.platform = guide.platform;
    card.dataset.subject = slugify(guide.subject);
    const rotation = ROTATIONS[index % ROTATIONS.length];
    card.style.transform = `rotate(${rotation}deg)`;

    const pin = document.createElement("span");
    pin.className = "pin";
    pin.setAttribute("aria-hidden", "true");
    card.appendChild(pin);

    card.appendChild(buildMedia(guide));

    const platformLabels = { youtube: "YouTube", instagram: "Instagram", x: "X" };
    const tag = document.createElement("p");
    tag.className = "card-tag";
    tag.innerHTML = `<span class="dot"></span> ${platformLabels[guide.platform] || guide.platform}`;
    card.appendChild(tag);

    const title = document.createElement("h3");
    title.textContent = guide.title || "Untitled guide";
    card.appendChild(title);

    if (guide.subject) {
      const subject = document.createElement("span");
      subject.className = "card-subject";
      subject.textContent = guide.subject;
      card.appendChild(subject);
    }

    return card;
  }

  function render() {
    // .slice() copies the array before .reverse() so we never mutate
    // window.GUIDES itself — newest entry (bottom of videos-data.js)
    // shows up first on the page.
    const guides = (window.GUIDES || []).slice().reverse();
    grid.innerHTML = "";

    guides.forEach((guide, index) => {
      grid.appendChild(buildCard(guide, index));
    });

    if (countEl) countEl.textContent = guides.length;

    // Instagram's embed script only scans the page once on load,
    // so ask it to re-scan now that we've injected blockquotes.
    if (window.instgrm && window.instgrm.Embeds) {
      window.instgrm.Embeds.process();
    } else {
      // script may still be loading — try again shortly
      window.addEventListener("load", () => {
        if (window.instgrm && window.instgrm.Embeds) {
          window.instgrm.Embeds.process();
        }
      });
    }

    // Same idea for X/Twitter's embed script.
    if (window.twttr && window.twttr.widgets) {
      window.twttr.widgets.load(grid);
    } else {
      window.addEventListener("load", () => {
        if (window.twttr && window.twttr.widgets) {
          window.twttr.widgets.load(grid);
        }
      });
    }

    applyFilter(currentFilter());
  }

  function currentFilter() {
    const active = document.querySelector(".filter-btn.active");
    return active ? active.dataset.filter : "all";
  }

  function applyFilter(filter) {
    const cards = grid.querySelectorAll(".guide-card");
    let visibleCount = 0;

    cards.forEach((card) => {
      const matches = filter === "all" || card.dataset.subject === filter;
      card.style.display = matches ? "" : "none";
      if (matches) visibleCount += 1;
    });

    if (emptyState) emptyState.hidden = visibleCount !== 0;
  }

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterBtns.forEach((b) => {
        b.classList.remove("active");
        b.setAttribute("aria-selected", "false");
      });
      btn.classList.add("active");
      btn.setAttribute("aria-selected", "true");
      applyFilter(btn.dataset.filter);
    });
  });

  render();
})();

/* ============================================================
   LearnIt — renders CREDITS (from credits-data.js) into pinned tags.
   You shouldn't need to edit this file to add or remove names —
   see js/credits-data.js for that.
   ============================================================ */
 
(function () {
  "use strict";
 
  const grid = document.getElementById("credit-grid");
  const countEl = document.getElementById("credit-count");
  const emptyState = document.getElementById("credit-empty");
 
  if (!grid) return; // not on a page with a credit grid
 
  // Small deterministic rotation so tags feel hand-pinned,
  // without being random on every reload.
  const ROTATIONS = [-2, 1.5, -1, 2.2, -1.8, 1, -2.4, 1.8];
 
  function buildTag(name, index) {
    const tag = document.createElement("span");
    tag.className = "credit-tag";
    const rotation = ROTATIONS[index % ROTATIONS.length];
    tag.style.transform = `rotate(${rotation}deg)`;
 
    const pin = document.createElement("span");
    pin.className = "pin";
    pin.setAttribute("aria-hidden", "true");
    tag.appendChild(pin);
 
    const text = document.createElement("span");
    text.className = "credit-name";
    text.textContent = name;
    tag.appendChild(text);
 
    return tag;
  }
 
  function render() {
    const names = window.CREDITS || [];
    grid.innerHTML = "";
 
    names.forEach((name, index) => {
      grid.appendChild(buildTag(name, index));
    });
 
    if (countEl) countEl.textContent = names.length;
    if (emptyState) emptyState.hidden = names.length !== 0;
  }
 
  render();
})();

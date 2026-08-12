(() => {
  const terms = Array.isArray(window.VIBE_TERMS) ? window.VIBE_TERMS : [];
  const categoryLabels =
    window.VIBE_CATEGORIES && typeof window.VIBE_CATEGORIES === "object"
      ? window.VIBE_CATEGORIES
      : {};

  const body = document.getElementById("glossary-body");
  const search = document.getElementById("search");
  const count = document.getElementById("count");
  const empty = document.getElementById("empty");
  const table = document.querySelector(".glossary");
  const hideAllBtn = document.getElementById("hide-all");
  const filtersEl = document.getElementById("category-filters");
  const modal = document.getElementById("example-modal");
  const modalTitle = document.getElementById("example-modal-title");
  const modalBody = document.getElementById("example-modal-body");
  const modalClose = document.getElementById("example-modal-close");

  let activeCategory = "all";
  let lastFocus = null;

  const ICON_EYE = `
    <svg viewBox="0 0 32 32" aria-hidden="true">
      <path d="M30.94 15.66A16.69 16.69 0 0 0 16 5 16.69 16.69 0 0 0 1.06 15.66a1 1 0 0 0 0 .68A16.69 16.69 0 0 0 16 27a16.69 16.69 0 0 0 14.94-10.66 1 1 0 0 0 0-.68zM16 25c-5.3 0-9.83-3.95-11.82-9C6.17 10.95 10.7 7 16 7s9.83 3.95 11.82 9C25.83 21.05 21.3 25 16 25z"/>
      <path d="M16 10a6 6 0 1 0 6 6 6 6 0 0 0-6-6zm0 10a4 4 0 1 1 4-4 4 4 0 0 1-4 4z"/>
    </svg>`;

  const ICON_EYE_OFF = `
    <svg viewBox="0 0 32 32" aria-hidden="true">
      <path d="M5.24 22.51 2.71 25 4.12 26.41 28.69 1.83 27.27.41 23.2 4.49A16.24 16.24 0 0 0 16 5 16.69 16.69 0 0 0 1.06 15.66a1 1 0 0 0 0 .68 15.86 15.86 0 0 0 4.18 6.17zM16 7a14.33 14.33 0 0 1 5.53 1.13l-2.3 2.3A6 6 0 0 0 11.43 17l-2.66 2.66A13.93 13.93 0 0 1 4.18 16C6.17 10.95 10.7 7 16 7z"/>
      <path d="M16 25a16.2 16.2 0 0 1-5.76-1.06l2.36-2.36A6 6 0 0 0 20.57 15l2.91-2.91A14 14 0 0 1 27.82 16C25.83 21.05 21.3 25 16 25z"/>
      <path d="m22.69 11.59-1.42 1.42A6 6 0 0 1 13 21.27l-1.42 1.42A8 8 0 0 0 22.69 11.59z"/>
    </svg>`;

  const categoryOrder = Array.isArray(window.VIBE_CATEGORY_ORDER)
    ? window.VIBE_CATEGORY_ORDER
    : Object.keys(categoryLabels);

  function normalize(value) {
    return String(value || "")
      .toLowerCase()
      .trim();
  }

  function categoryLabel(key) {
    return categoryLabels[key] || key;
  }

  function matches(term, query) {
    if (!query) return true;
    const haystack = normalize(
      `${term.term} ${term.id || ""} ${categoryLabel(term.category)}`
    );
    return haystack.includes(query);
  }

  function createReveal(labelShow, labelHide, text) {
    const wrap = document.createElement("div");
    wrap.className = "reveal";

    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "reveal-btn";
    btn.setAttribute("aria-expanded", "false");

    const icon = document.createElement("span");
    icon.className = "reveal-icon";
    icon.innerHTML = ICON_EYE;

    const label = document.createElement("span");
    label.className = "reveal-label";
    label.textContent = labelShow;

    btn.append(icon, label);

    const content = document.createElement("p");
    content.className = "reveal-text";
    content.hidden = true;
    content.textContent = text;

    btn.addEventListener("click", () => {
      const open = btn.getAttribute("aria-expanded") === "true";
      const next = !open;
      btn.setAttribute("aria-expanded", String(next));
      content.hidden = !next;
      icon.innerHTML = next ? ICON_EYE_OFF : ICON_EYE;
      label.textContent = next ? labelHide : labelShow;
    });

    wrap.append(btn, content);
    return wrap;
  }

  function openExampleModal(termName, exampleText, trigger) {
    if (!modal || !modalTitle || !modalBody) return;
    lastFocus = trigger || document.activeElement;
    modalTitle.textContent = `דוגמה · ${termName}`;
    modalBody.textContent = exampleText;
    modal.hidden = false;
    document.body.classList.add("modal-open");
    modalClose?.focus();
  }

  function closeExampleModal() {
    if (!modal || modal.hidden) return;
    modal.hidden = true;
    document.body.classList.remove("modal-open");
    if (lastFocus && typeof lastFocus.focus === "function") {
      lastFocus.focus();
    }
  }

  function renderFilters() {
    filtersEl.replaceChildren();

    const chips = [
      { key: "all", label: "הכול" },
      ...categoryOrder
        .filter((key) => categoryLabels[key])
        .map((key) => ({ key, label: categoryLabels[key] })),
    ];

    chips.forEach(({ key, label }) => {
      const chip = document.createElement("button");
      chip.type = "button";
      chip.className = "chip";
      chip.dataset.category = key;
      chip.textContent = label;
      chip.setAttribute("aria-pressed", String(key === activeCategory));
      chip.addEventListener("click", () => {
        activeCategory = key;
        renderFilters();
        applyFilter();
      });
      filtersEl.appendChild(chip);
    });
  }

  function render(list) {
    body.replaceChildren();

    list.forEach((item, i) => {
      const row = document.createElement("tr");

      const numCell = document.createElement("td");
      numCell.className = "num-cell";
      numCell.textContent = String(i + 1);

      const termCell = document.createElement("td");
      termCell.className = "term-cell";

      const termName = document.createElement("span");
      termName.className = "term-name";
      termName.textContent = item.term;

      const termActions = document.createElement("div");
      termActions.className = "term-actions";

      const tag = document.createElement("span");
      tag.className = "category-tag";
      tag.dataset.category = item.category;
      tag.textContent = categoryLabel(item.category);
      termActions.appendChild(tag);

      if (item.example) {
        const exampleBtn = document.createElement("button");
        exampleBtn.type = "button";
        exampleBtn.className = "example-btn";
        exampleBtn.textContent = "דוגמה";
        exampleBtn.setAttribute(
          "aria-label",
          `הצג דוגמה עבור ${item.term}`
        );
        exampleBtn.addEventListener("click", () => {
          openExampleModal(item.term, item.example, exampleBtn);
        });
        termActions.appendChild(exampleBtn);
      }

      termCell.append(termName, termActions);

      const explanationCell = document.createElement("td");
      explanationCell.className = "reveal-cell";
      explanationCell.append(
        createReveal("הצג הסבר", "הסתר הסבר", item.explanation)
      );

      const meaningCell = document.createElement("td");
      meaningCell.className = "reveal-cell";
      meaningCell.append(
        createReveal("הצג משמעות", "הסתר משמעות", item.meaning)
      );

      row.append(numCell, termCell, explanationCell, meaningCell);
      body.appendChild(row);
    });

    const total = terms.length;
    const shown = list.length;
    count.textContent =
      shown === total ? `${total} מונחים` : `${shown} מתוך ${total} מונחים`;

    const noResults = shown === 0;
    empty.hidden = !noResults;
    table.hidden = noResults;
  }

  function applyFilter() {
    const query = normalize(search.value);
    const filtered = terms.filter((term) => {
      const categoryOk =
        activeCategory === "all" || term.category === activeCategory;
      return categoryOk && matches(term, query);
    });
    render(filtered);
  }

  function hideAll() {
    body
      .querySelectorAll(".reveal-btn[aria-expanded='true']")
      .forEach((btn) => {
        btn.click();
      });
  }

  search.addEventListener("input", applyFilter);
  hideAllBtn.addEventListener("click", hideAll);

  modalClose?.addEventListener("click", closeExampleModal);
  modal?.addEventListener("click", (e) => {
    if (e.target === modal) closeExampleModal();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeExampleModal();
  });

  renderFilters();
  applyFilter();
})();

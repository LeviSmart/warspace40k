document.addEventListener("DOMContentLoaded", () => {
  const unitBlocks = document.querySelectorAll(".unit-block");

  unitBlocks.forEach(leaderBlock => {
    const leaderName = leaderBlock.id.replace("section3-", "").replace("section2-", "").replace("section1-", "").replace(/_/g, " ");
    const leaderSections = leaderBlock.querySelectorAll(".section-title");

    leaderSections.forEach(title => {
      if (title.textContent.trim().toUpperCase() === "LEADER") {
        const links = title.parentElement.querySelectorAll("a.section-link");

        links.forEach(link => {
          const targetId = link.getAttribute("href").substring(1);
          const targetBlock = document.getElementById(targetId);
          if (!targetBlock) return;

          let ledSection = targetBlock.querySelector(".led-by-section");

          if (!ledSection) {
            ledSection = document.createElement("div");
            ledSection.classList.add("section", "led-by-section");
            ledSection.innerHTML = `
              <div class="section-title">LED BY</div>
              <ul class="wargear">
                <li>This unit can be led by the following units:</li>
                <ul class="led-by-list"></ul>
              </ul>
            `;

            // Ищем .keywords внутри блока (на любом уровне)
            const keywordsBlock = targetBlock.querySelector(".keywords");
            if (keywordsBlock && keywordsBlock.parentElement === targetBlock) {
              // вставляем прямо перед .keywords
              targetBlock.insertBefore(ledSection, keywordsBlock);
            } else if (keywordsBlock) {
              // если .keywords глубже — вставляем в родителя keywords
              keywordsBlock.parentElement.insertBefore(ledSection, keywordsBlock);
            } else {
              // если .keywords нет — добавляем в конец блока
              targetBlock.appendChild(ledSection);
            }
          }

          const list = ledSection.querySelector(".led-by-list");
          const exists = Array.from(list.querySelectorAll("a.section-link"))
            .some(a => a.getAttribute("href") === `#${leaderBlock.id}`);

          if (!exists) {
            const li = document.createElement("li");
            const a = document.createElement("a");
            a.href = `#${leaderBlock.id}`;
            a.classList.add("section-link");
            a.setAttribute("data-sound", link.dataset.sound || "");
            a.textContent = leaderName.replace(/\b\w/g, c => c.toUpperCase());
            li.appendChild(a);
            list.appendChild(li);
          }
        });
      }
    });
  });
  resound_tag("a");
});


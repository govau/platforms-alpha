const fs = require("fs");
const path = require("path");

const unescapeMd = require("remarkable/lib/common/utils").unescapeMd;
const replaceEntities = require("remarkable/lib/common/utils").replaceEntities;
const escapeHtml = require("remarkable/lib/common/utils").escapeHtml;

function fileTabs(md, { basePath }) {
  md.renderer.rules.fence_custom.filetabs = function(
    tokens,
    idx,
    options,
    env,
    instance
  ) {
    const token = tokens[idx];
    const langPrefix = options.langPrefix;

    function render({ file, parser, lang, label }) {
      let panelContent;

      try {
        const content = fs
          .readFileSync(path.resolve(basePath, file), {
            encoding: "utf8"
          })
          .toString();

        if (parser === "md") {
          panelContent = `<div>${md.render(content)}</div>`;
        } else {
          const langName = escapeHtml(replaceEntities(unescapeMd(lang)));
          const langClass = ` class="${langPrefix}${langName}"`;

          let highlighted;

          if (options.highlight) {
            highlighted =
              options.highlight.apply(
                options.highlight,
                [content].concat([lang])
              ) || escapeHtml(content);
          } else {
            highlighted = escapeHtml(content);
          }

          panelContent = `<pre><code${langClass}>${highlighted}</code></pre>`;
        }
      } catch (e) {
        console.error(e);
        panelContent = `<pre><code>Failed to load file ${file}:\n\n${e}</code></pre>`;
      }

      return {
        id: `${file} ${label}`
          .toLowerCase()
          .replace(/[\s+\/\.]/g, "-")
          .replace("#", "sharp"),
        label,
        lang,
        panelContent
      };
    }

    const entries = token.content.trim().split("\n");
    const tabs = entries.map(entry => {
      const opts = {};
      for (const pair of entry.split(" ")) {
        const [key, value] = pair.trim().split("=");
        opts[key] = value;
      }
      return render(opts);
    });

    return `<div class="tabs">
      <nav class="tabs-nav">
        <ul class="nav nav-tabs au-link-list au-link-list--inline">
          ${tabs
            .map(
              (t, i) => `<li class="nav-item">
                <a class="nav-link${i === 0 ? " active show" : ""}" id="${
                t.id
              }-tab" data-toggle="tab" href="#${t.id}" aria-controls="${
                t.id
              }" role="tab" aria-selected="${i === 0 ? "true" : "false"}">${
                t.label
              }</a>
            </li>`
            )
            .join("")}
        </ul>
      </nav>
      <div class="tab-content">
      ${tabs
        .map(
          (t, i) =>
            `<div class="tab-pane${
              i === 0 ? " active show" : ""
            }" tabindex="-1" id="${t.id}" role="tabpanel" aria-labelledby="${
              t.id
            }-tab">${t.panelContent}</div>`
        )
        .join("")}
      </div>
  </div>`;
  };
}

module.exports = fileTabs;

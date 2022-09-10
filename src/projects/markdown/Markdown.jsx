import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import "./index.css";
function Markdown() {
  const [markdown, setMarkdown] = useState("## markdown preview");
  return (
    <main>
      <section className="markdown">
        <textarea
          className="input"
          value={markdown}
          onChange={(e) => setMarkdown(e.target.value)}
        ></textarea>

        <article className="result">
          <ReactMarkdown children={markdown} />
        </article>
      </section>
    </main>
  );
}

export default Markdown;

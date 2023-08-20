import "./styles.css";
import { useEffect, useState } from "react";
import { Marked } from "marked";

const marked = new Marked({
  breaks: true
});

export default function App() {
  const [markdown, setMarkdown] = useState("");
  const parseMarkdown = () => {
    let markedText = marked.parse(markdown);
    return { __html: markedText };
  };

  useEffect(() => {
    setMarkdown(
      "# This is heading 1\n## This is heading 2\n[This is a link to google.com](https://www.google.com)\n\nThis is inline code: `<p>Hello World</p>`\n\n```\n// This is a code block\n\nfunction welcome() {\n\tconsole.log('hello world');\n}\n```\n\n1. This is a list item.\n\n> This is a block quote.\n\n**Here's some bolded text.**\n\nHere's an image of a cat:\n![image](https://images.unsplash.com/photo-1586042091284-bd35c8c1d917?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c21hbGwlMjBjYXR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=200&q=60)"
    );
  }, []);

  return (
    <div className="App">
      <div
        className="editor-container"
        style={{ display: "flex", flexDirection: "column" }}
      >
        <h3>Editor</h3>
        <div className="editor">
          <textarea
            id="editor"
            value={markdown}
            onChange={(e) => setMarkdown(e.target.value)}
          />
        </div>
      </div>
      <div
        className="preview-container"
        style={{ display: "flex", flexDirection: "column" }}
      >
        <h3>Preview</h3>
        <div
          id="preview"
          style={{ backgroundColor: "lightgray" }}
          dangerouslySetInnerHTML={parseMarkdown()}
        ></div>
      </div>
    </div>
  );
}

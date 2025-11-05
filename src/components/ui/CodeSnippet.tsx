import React from "react";
import { UI_TEXT } from "../../utils";

interface CodeSnippetProps {
  name: string;
  role?: string;
}

const CodeSnippet: React.FC<CodeSnippetProps> = React.memo(
  ({ name, role = UI_TEXT.DEFAULT_ROLE }) => {
    return (
      <div className="code-snippet">
        <div className="code-header">
          <div className="code-dots">
            <span className="dot red"></span>
            <span className="dot yellow"></span>
            <span className="dot green"></span>
          </div>
          <span className="code-title">{UI_TEXT.CODE_FILENAME}</span>
        </div>
        <div className="code-content">
          <div className="code-line">
            <span className="keyword">const</span>{" "}
            <span className="variable">developer</span> ={" "}
            <span className="punctuation">{"{"}</span>
          </div>
          <div className="code-line indent">
            <span className="property">name:</span>{" "}
            <span className="string">'{name}'</span>
            <span className="punctuation">,</span>
          </div>
          <div className="code-line indent">
            <span className="property">role:</span>{" "}
            <span className="string">'{role}'</span>
          </div>
          <div className="code-line">
            <span className="punctuation">{"}"}</span>
            <span className="punctuation">;</span>
          </div>
        </div>
      </div>
    );
  }
);

export default CodeSnippet;

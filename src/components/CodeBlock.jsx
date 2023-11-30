import React from "react";

// Render a code block with some text.
const CodeBlock = ({ data, text }) => {
  return (
    <>
      <p className="text-sm text-red-600">{text}</p>
      <pre className="text-xs">{data}</pre>
    </>
  );
};

export default CodeBlock;

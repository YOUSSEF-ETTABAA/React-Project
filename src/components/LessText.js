import { useState } from "react";

function LessText({ text, maxLength }) {
  const [hidden, setHidden] = useState(true);

  if (text.length <= maxLength) {
        

    return <span>{text}</span>;
  }


  return (
    <div>
      <p>{hidden ? `${text.substr(0, maxLength).trim()}...` : text}</p>
      {hidden ? (
        <div id="readmorebtn">
          <button
            onClick={() => {
              setHidden(false);
            }}
          >
            Read More...
          </button>
        </div>
      ) : (
        <div id="readmorebtn">
          <button
            onClick={() => {
              setHidden(true);
            }}
          >
            Read Less...
          </button>
        </div>
      )}
    </div>
  );
}

export default LessText;

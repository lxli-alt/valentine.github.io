import { useState } from "react";
import confetti from "canvas-confetti";
import "./index.css";

const NO_PHRASES = [
  "No 💔",
  "Pretty please? 🥺",
  "But we'd be so cute together 💕",
  "One more chance, pookie?",
  "Don't break my heart 😭",
  "What about a maybe?",
  "Please I'm fragile 🫠",
];

export default function App() {
  const [noClicks, setNoClicks] = useState(0);
  const [isValentine, setIsValentine] = useState(false);
  const [noPos, setNoPos] = useState({ x: 0, y: 0 });

  const yesButtonSize = Math.min(16 + noClicks * 15, 80);

  const firstImg =
    "https://media.tenor.com/VIChDQ6ejRQAAAAj/jumping-bear-hearts-no-png.gif";
  const secondImg =
    "https://media.tenor.com/f1xnRxTRxLAAAAAj/bears-with-kisses-bg.gif";

  const handleNo = () => {
    setNoClicks((prev) => prev + 1);
    setNoPos({
      x: Math.random() * 200 - 100,
      y: Math.random() * 200 - 100,
    });
  };

  const handleYes = () => {
    setIsValentine(true);

    confetti({
      particleCount: 180,
      spread: 90,
      origin: { y: 0.6 },
    });
  };

  return (
    <div className="container">
      {!isValentine ? (
        <>
          <img src={firstImg} alt="Cute bear asking" />
          <h1>Will you be my Valentine? 💘</h1>

          <div className="buttons">
            <button
              className="yes"
              style={{ fontSize: `${yesButtonSize}px` }}
              onClick={handleYes}
            >
              Yes 💖
            </button>

            <button
              className="no"
              style={{
                transform: `translate(${noPos.x}px, ${noPos.y}px)`,
              }}
              onClick={handleNo}
            >
              {noClicks === 0
                ? "No"
                : NO_PHRASES[Math.min(noClicks - 1, NO_PHRASES.length - 1)]}
            </button>
          </div>
        </>
      ) : (
        <>
          <img src={secondImg} alt="Happy bears" />
          <h1 className="yay">YAY!!! 💕🎉</h1>
        </>
      )}
    </div>
  );
}

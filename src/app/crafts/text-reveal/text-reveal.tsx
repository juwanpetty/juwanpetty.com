"use client";

import { useState } from "react";
import styles from "./text-reveal.module.css";

export function TextReveal() {
  const [reset, setReset] = useState(0);

  const label = "Animations";

  return (
    <div className={styles.container}>
      <div key={reset}>
        <h1 className={styles.h1}>
          {label.split("").map((char, index) => {
            return (
              <span
                key={index}
                className={styles.character}
                style={{ "--index": index } as React.CSSProperties}
              >
                {char}
              </span>
            );
          })}
        </h1>
      </div>

      {/* Use this button to replay your animation */}
      <button className={styles.button} onClick={() => setReset(reset + 1)}>
        Replay animation
      </button>
    </div>
  );
}

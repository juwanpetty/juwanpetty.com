import React from "react";
import { Form } from "types/form";
import { useSubscribeToNewsletter } from "hooks";

import styles from "./Subscribe.module.scss";

type Props = {};

function Subscribe({}: Props) {
  const { form, subscribe, inputEl } = useSubscribeToNewsletter();

  return (
    <form onSubmit={subscribe} className={styles.form}>
      <label className={styles.label}>
        <input
          className={styles.input}
          ref={inputEl}
          placeholder="Enter your email"
          type="email"
          autoComplete="email"
          required
        />
        <button type="submit" className={styles.button}>
          {form.state === Form.Loading ? <span>loading...</span> : "Notify Me"}
        </button>
      </label>
    </form>
  );
}

export default Subscribe;

import React from "react";
import { Spinner } from "components";

import { Form } from "types/form";
import { useSubscribeToNewsletter } from "hooks";
import cs from "classnames";

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
        <button
          type="submit"
          className={cs(styles.button, {
            [styles.loading]: form.state === Form.Loading,
          })}
        >
          <span className={styles.content}>Notify Me</span>
          <span className={styles.spinner}>
            <Spinner />
          </span>
        </button>
      </label>
    </form>
  );
}

export default Subscribe;

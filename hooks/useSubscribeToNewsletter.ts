import { FormEvent, useRef, useState } from "react";
import { FormState, Form } from "types/form";

export default function useSubscribeToNewsletter() {
  const [form, setForm] = useState<FormState>({ state: Form.Initial });
  const inputEl = useRef<HTMLInputElement>(null);

  const emailCheck =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const isEmailValid = (email: string) => {
    return emailCheck.test(email);
  };

  async function subscribe(e: FormEvent) {
    e.preventDefault();
    const email = inputEl?.current?.value.trim().toLowerCase() as string;

    if (email?.length > 0 && isEmailValid(email)) {
      setForm({ state: Form.Loading });
    } else {
      return;
    }

    const res = await fetch(`/api/subscribe`, {
      body: JSON.stringify({
        email,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    const { error } = await res.json();

    if (error) {
      setForm({
        state: Form.Error,
        message: error,
      });
      return;
    }

    if (inputEl && inputEl.current) {
      inputEl.current.value = "";
    }

    setForm({
      state: Form.Success,
      message: `Success! You've been added to the list!`,
    });
  }

  return {
    subscribe,
    inputEl,
    form,
  };
}

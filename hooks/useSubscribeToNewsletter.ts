import { FormEvent, useRef, useState } from "react";
import { FormState, Form } from "types/form";

export default function useSubscribeToNewsletter() {
  const [form, setForm] = useState<FormState>({ state: Form.Initial });
  const inputEl = useRef<HTMLInputElement | null>(null);

  async function subscribe(e: FormEvent) {
    e.preventDefault();
    setForm({ state: Form.Loading });

    const res = await fetch(`/api/subscribe`, {
      body: JSON.stringify({
        email: inputEl?.current?.value,
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

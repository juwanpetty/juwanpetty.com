import React from "react";
import { Form as FormType } from "types/form";
import { useSubscribeToNewsletter } from "hooks";

import styled from "styled-components";

type Props = {};

function Subscribe({}: Props) {
  const { form, subscribe, inputEl } = useSubscribeToNewsletter();

  return (
    <Form onSubmit={subscribe}>
      <FormLabel>
        <FormInput
          ref={inputEl}
          placeholder="Enter your email"
          type="email"
          autoComplete="email"
          required
        />
        <FormButton type="submit">
          {form.state === FormType.Loading ? (
            <span>loading...</span>
          ) : (
            "Notify Me"
          )}
        </FormButton>
      </FormLabel>
    </Form>
  );
}

export default Subscribe;

const Form = styled.form`
  display: flex;
  gap: 0.75rem;
`;

const FormLabel = styled.label`
  position: relative;
`;

const FormInput = styled.input`
  font-size: 0.875rem;
  line-height: 1.25rem;
  padding: 0.75rem;
  border-radius: 0.375rem;
  border: 1px solid #d2d4dc;
  min-width: 400px;
  padding-right: 100px;
`;

const FormButton = styled.button`
  line-height: 1.25rem;
  padding: 0.5rem 0.75rem;
  border-radius: 0.375rem;
  color: white;
  background: black;
  border: 1px solid black;
  text-transform: uppercase;
  font-size: 0.75rem;
  font-weight: 600;
  position: absolute;
  top: 0.25rem;
  right: 0.25rem;
`;

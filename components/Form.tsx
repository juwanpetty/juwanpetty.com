import React, { FormEvent } from "react";
import styled from "styled-components";

type Props = {
  id: string;
  name: string;
  placeholder?: string;
  buttonContent?: string;
  onSubmit: () => void;
};

const Form = ({
  id,
  name,
  placeholder,
  buttonContent = "Submit",
  onSubmit,
}: Props) => {
  const formSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <Wrapper onSubmit={formSubmit}>
      <div>
        <Input type="text" name={name} id={id} placeholder={placeholder} />
        <Button type="submit">{buttonContent}</Button>
      </div>
      <Description>I&apos;ll only use this for spam. Kidding.</Description>
    </Wrapper>
  );
};

export default Form;

const Wrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  & > div {
    position: relative;
    display: flex;
    gap: 0.75rem;
  }
`;

const Input = styled.input`
  font-size: 0.875rem;
  line-height: 1.25rem;
  padding: 0.75rem;
  border-radius: 0.375rem;
  border: 1px solid #d2d4dc;
  min-width: 400px;
`;

const Button = styled.button`
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

const Description = styled.p`
  font-size: 0.875rem;
  line-height: 1.25rem;
  color: rgb(107 114 128);
  text-align: center;
`;

import { NextPage } from "next";
import Head from "next/head";

import { Subscribe } from "components";
import styled from "styled-components";

const Index: NextPage = () => {
  return (
    <>
      <Head>
        <title>Coming Soon | Juwan Petty</title>
        <meta
          name="description"
          content="A personal website by Juwan Petty. Coming soon."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container>
        <Title>Coming Soon</Title>
        <Subtitle>
          Something’s stirring in this corner of the internet. <br />
          Add your name to the email list to be notified when the site goes
          live.
        </Subtitle>

        <Subscribe />

        <Caption>I&apos;ll only use this for spam. Kidding.</Caption>
      </Container>
    </>
  );
};

export default Index;

const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 96px;
  font-weight: 700;
`;

const Subtitle = styled.p`
  font-size: 18px;
  text-align: center;
  margin-bottom: 6rem;
`;

const Caption = styled.p`
  font-size: 0.875rem;
  line-height: 1.25rem;
  color: rgb(107 114 128);
  text-align: center;
  margin-top: 0.75rem;
`;

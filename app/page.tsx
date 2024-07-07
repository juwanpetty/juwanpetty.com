import { Metadata } from "next";
import { Page } from "@/shared/Page";

export const metadata: Metadata = {
  title: "Juwan Petty",
};

async function Home() {
  return (
    <Page>
      <p className="mb-6 text-base leading-7 text-sand-12">
        Welcome to my corner of the internet.
      </p>
      <p className="text-base leading-7 text-sand-12">
        Hi, I&apos;m Juwan Petty. I&apos;m a software engineer who loves to
        build things. I write about software development, productivity, and the
        IndieWeb movement.
      </p>
    </Page>
  );
}

export default Home;

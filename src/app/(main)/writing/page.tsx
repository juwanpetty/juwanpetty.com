import { PageLayout } from "@/shared/components/page-layout";
import { PostList } from "@/features/writing/components/post-list";

const breadcrumbLinks = [
  { href: "/", name: "Explore" },
  { href: "/writing", name: "Writing" },
];

export default function WritingIndex() {
  return (
    <PageLayout
      title="Writing"
      subtitle="Beautifully designed components that you can copy and paste into your apps. Accessible. Customizable. Open Source."
      breadcrumbLinks={breadcrumbLinks}
    >
      <PostList
        posts={[
          {
            title: "Getting Started with Next.js",
            publishedAt: "2024-09-01",
            excerpt:
              "Next.js is a powerful React framework that enables developers to build fast, production-ready applications with ease. In this post, we cover the essentials of setting up Next.js, from initial installation to creating your first page. Whether you're building a blog or a complex web app, Next.js provides the tools to get started quickly and efficiently.",
            slug: "getting-started-with-nextjs",
            tags: ["Next.js", "JavaScript", "Web Development"],
          },
          {
            title: "Mastering TypeScript Basics",
            publishedAt: "2024-09-10",
            excerpt:
              "TypeScript is a superset of JavaScript that brings strong typing to your code, helping to prevent errors and improve readability. This post dives into TypeScript fundamentals, including types, interfaces, and functions, offering a solid foundation for developers looking to enhance their JavaScript skills with type safety and better tooling.",
            slug: "mastering-typescript-basics",
            tags: ["TypeScript", "JavaScript", "Frontend"],
          },
          {
            title: "Building a Chat Application with Socket.io",
            publishedAt: "2024-08-20",
            excerpt:
              "Creating real-time chat applications has never been easier with Socket.io, a JavaScript library that enables real-time, bidirectional communication between clients and servers. In this guide, we go over setting up Socket.io with Node.js, building the server and client, and managing real-time events for an interactive chat experience.",
            slug: "building-chat-app-socketio",
            tags: ["Socket.io", "Node.js", "Real-Time"],
          },
          {
            title: "Exploring React Hooks in Depth",
            publishedAt: "2024-08-15",
            excerpt:
              "React hooks provide a modern way to manage state and lifecycle events in functional components, simplifying code and improving readability. This post covers key hooks like useState, useEffect, and custom hooks, demonstrating how to use them effectively to build responsive and maintainable React applications.",
            slug: "exploring-react-hooks",
            tags: ["React", "Hooks", "JavaScript"],
          },
          {
            title: "Creating a Responsive E-Commerce Storefront",
            publishedAt: "2024-07-30",
            excerpt:
              "Responsive design is crucial for e-commerce sites that need to look great on any device. In this post, we explore creating a responsive storefront with HTML, CSS, and JavaScript, focusing on grid layouts, product displays, and an intuitive user experience that adjusts seamlessly to screen sizes.",
            slug: "responsive-ecommerce-store",
            tags: ["E-Commerce", "CSS", "Frontend"],
          },
          {
            title: "Understanding CSS Flexbox and Grid",
            publishedAt: "2024-07-05",
            excerpt:
              "CSS Flexbox and Grid are essential for modern layout design, offering powerful ways to align, distribute, and organize content on the web. This post explores both concepts, covering use cases, pros and cons, and real-world examples to help you master these layout techniques for a polished and flexible UI.",
            slug: "css-flexbox-grid",
            tags: ["CSS", "Layout", "Frontend"],
          },
          {
            title: "Developing a Personal Portfolio",
            publishedAt: "2024-06-25",
            excerpt:
              "A personal portfolio website is essential for showcasing your skills, projects, and experience. In this guide, we walk through building a visually appealing portfolio that highlights your achievements and serves as a professional hub to impress potential employers and collaborators.",
            slug: "developing-personal-portfolio",
            tags: ["Portfolio", "Web Development", "UI/UX"],
          },
          {
            title: "Optimizing Performance in Next.js",
            publishedAt: "2024-05-18",
            excerpt:
              "Performance optimization is key to providing users with a fast and responsive experience. This post covers techniques for improving Next.js application performance, including image optimization, code splitting, and server-side rendering, ensuring your site loads quickly and efficiently.",
            slug: "optimizing-performance-nextjs",
            tags: ["Next.js", "Performance", "JavaScript"],
          },
          {
            title: "Integrating GraphQL in React Applications",
            publishedAt: "2024-04-10",
            excerpt:
              "GraphQL is a query language that offers a flexible and efficient approach to managing data in modern applications. This post explores integrating GraphQL with React, including setup, query structuring, and efficient data handling, enabling you to build powerful and scalable applications.",
            slug: "integrating-graphql-react",
            tags: ["GraphQL", "React", "APIs"],
          },
          {
            title: "Building a Markdown Blog with Next.js",
            publishedAt: "2024-03-20",
            excerpt:
              "Markdown offers a simple syntax for creating rich text content, and combining it with Next.js allows for a seamless blog setup. This guide walks through setting up a Markdown-based blog, including parsing markdown, rendering posts, and adding essential features for a fully functional blog.",
            slug: "markdown-blog-nextjs",
            tags: ["Markdown", "Next.js", "Blog"],
          },
        ]}
      />
    </PageLayout>
  );
}

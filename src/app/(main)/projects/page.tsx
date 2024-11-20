import { ProjectList } from "@/features/projects/components/project-list";
import { PageLayout } from "@/shared/components//page-layout";

const breadcrumbLinks = [
  { href: "/", name: "Explore" },
  { href: "/projects", name: "Projects" },
];

export default function ProjectIndex() {
  return (
    <PageLayout
      title="Projects"
      subtitle="Beautifully designed components that you can copy and paste into your apps. Accessible. Customizable. Open Source."
      breadcrumbLinks={breadcrumbLinks}
    >
      <ProjectList
        projects={[
          {
            title: "Personal Portfolio Website",
            description:
              "A portfolio website to showcase my work, blog posts, and side projects.",
            slug: "personal-portfolio-website",
          },
          {
            title: "Task Manager App",
            description:
              "A full-featured task manager with real-time collaboration and reminders.",
            slug: "task-manager-app",
          },
          {
            title: "E-Commerce Storefront",
            description:
              "A responsive e-commerce platform with a shopping cart, payment integration, and product management.",
            slug: "ecommerce-storefront",
          },
          {
            title: "Chat Application",
            description:
              "A real-time chat application built with Socket.io and React.",
            slug: "chat-application",
          },
          {
            title: "Markdown Blog Engine",
            description:
              "A blogging platform that uses Markdown for content creation and supports dynamic routing.",
            slug: "markdown-blog-engine",
          },
          {
            title: "Weather Dashboard",
            description:
              "An interactive weather app that provides real-time weather updates and forecasts for any location.",
            slug: "weather-dashboard",
          },
          {
            title: "Recipe Finder",
            description:
              "A recipe discovery app that filters recipes based on ingredients, dietary restrictions, and cuisine types.",
            slug: "recipe-finder",
          },
          {
            title: "Expense Tracker",
            description:
              "A personal finance app to track expenses, categorize spending, and generate reports.",
            slug: "expense-tracker",
          },
          {
            title: "Event Planner",
            description:
              "A tool for organizing events, managing guest lists, and sending invitations.",
            slug: "event-planner",
          },
          {
            title: "Photo Gallery",
            description:
              "A modern photo gallery app with image uploading, tagging, and sharing features.",
            slug: "photo-gallery",
          },
        ]}
      />
    </PageLayout>
  );
}

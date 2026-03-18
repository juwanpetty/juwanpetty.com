import { Icon } from "@/components/icon";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function BlogDetail() {
  return (
    <div>
      <div className="mb-10 flex items-center">
        <Button variant="ghost" size="sm" asChild>
          <Link href="/" className="text-secondary-foreground">
            <Icon name="back" className="size-4.5" />
            <span>Blog</span>
          </Link>
        </Button>
      </div>

      <div className="flex flex-col gap-1">
        <h1 className="text-secondary-foreground mt-2 text-2xl font-semibold tracking-tight">
          Installation
        </h1>

        <p className="text-muted-foreground text-base/7 text-pretty">
          March 16, 2026
        </p>
      </div>

      <div className="prose mt-10">
        <h2>
          <a className="text-secondary-foreground text-base font-[550] tracking-tight no-underline">
            Syntax support
          </a>
        </h2>

        <p className="text-secondary-foreground text-base/7 text-pretty">
          Tailwind CSS uses custom CSS syntax like{" "}
          <code className="rounded-sm bg-neutral-100 px-1 py-0.5 text-sm leading-relaxed font-normal text-neutral-900">
            @theme
          </code>
          ,{" "}
          <code className="rounded-sm bg-neutral-100 px-1 py-0.5 text-sm leading-relaxed font-normal text-neutral-900">
            @variant
          </code>
          , and{" "}
          <code className="rounded-sm bg-neutral-100 px-1 py-0.5 text-sm leading-relaxed font-normal text-neutral-900">
            @source
          </code>
          , and in some editors this can trigger warnings or errors where these
          rules aren&apos;t recognized.
        </p>

        <p className="text-secondary-foreground text-base/7 text-pretty">
          If you&apos;re using VS Code, our official{" "}
          <a
            href="https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss"
            className="text-neutral-900 decoration-1 underline-offset-4"
          >
            Tailwind CSS IntelliSense
          </a>{" "}
          plugin includes a dedicated Tailwind CSS language mode that has
          support for all of the custom at-rules and functions Tailwind uses.
        </p>

        <p className="text-secondary-foreground text-base/7 text-pretty">
          In some cases, you may need to disable native CSS linting/validations
          if your editor is very strict about the syntax it expects in your CSS
          files.
        </p>

        <h2>
          <a className="text-secondary-foreground text-base font-[550] tracking-tight no-underline">
            Cursor
          </a>
        </h2>

        <p className="text-secondary-foreground text-base/7 text-pretty">
          <a
            href="https://cursor.com/?utm_source=tailwind"
            className="text-secondary-foreground decoration-1 underline-offset-4"
          >
            Cursor
          </a>{" "}
          is an AI-native code editor with features like context-aware
          autocomplete and built-in coding agents. Since it supports VS Code
          extensions, all of the Tailwind CSS tooling you&apos;re already
          familiar with works out of the box – including our official{" "}
          <a
            href="https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss"
            className="text-secondary-foreground decoration-1 underline-offset-4"
          >
            Tailwind CSS IntelliSense
          </a>{" "}
          extension and the{" "}
          <a
            href="https://github.com/tailwindlabs/prettier-plugin-tailwindcss"
            className="text-secondary-foreground decoration-1 underline-offset-4"
          >
            Prettier plugin
          </a>{" "}
          for class sorting.
        </p>

        <img
          alt="Tailwind CSS IntelliSense extension for Cursor"
          width="1344"
          height="672"
          className="rounded-lg"
          src="https://tailwindcss.com/_next/static/media/cursor-intellisense.dbd6aaee.png"
        ></img>
      </div>

      <footer className="mt-16">
        <div className="flex items-center justify-between gap-2">
          <Button variant="ghost" size="sm" asChild>
            <Link href="/" className="text-secondary-foreground">
              <Icon name="arrow-left" className="size-4" />
              <span>Installation</span>
            </Link>
          </Button>

          <Button variant="ghost" size="sm" asChild>
            <Link href="/" className="text-secondary-foreground">
              <span>Compatibility</span>
              <Icon name="arrow-right" className="size-4" />
            </Link>
          </Button>
        </div>
      </footer>
    </div>
  );
}

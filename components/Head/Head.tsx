import NextHead from "next/head";

const ogImage = "https://ui-snippets.dev/thumbnail.jpg";

type Props = {
  title?: string;
  description?: string;
  image?: string;
  children?: React.ReactNode;
};

const Head = ({
  title = "UI Snippets",
  description = "A collection of UI Snippets",
  image = ogImage,
  children,
}: Props) => (
  <NextHead>
    {/* Title */}
    <title>{title}</title>
    <meta name="og:title" content={title} />

    {/* Description */}
    <meta name="description" content={description} />
    <meta name="og:description" content={description} />

    {/* Image */}
    <meta name="twitter:image" content={image} />
    <meta name="og:image" content={image} />

    {/* URL */}
    <meta name="og:url" content="https://ui-snippets.dev/" />

    {/* General */}
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta httpEquiv="Content-Language" content="en" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:site" content="@juwanpetty" />
    <meta name="author" content="Juwan Petty" />

    {/* Theme */}
    <meta name="theme-color" content="#000000" />
    <meta name="msapplication-TileColor" content="#000000" />

    {/* Favicons */}
    {/* Standard for most desktop browsers */}
    <link rel="shortcut icon" href="assets/favicon-32.png" />

    {/* Chrome Web Store icon and small Windows 8 start screen icon */}
    <meta name="msapplication-TileImage" content="assets/favicon-128.png" />

    {/* IOS preferred */}
    <link rel="apple-touch-icon" href="assets/favicon-180.png" />

    {/* Google Developer web app manifest recommendation */}
    <link rel="shortcut icon" href="assets/favicon-192.png" />

    {children}
  </NextHead>
);

export default Head;

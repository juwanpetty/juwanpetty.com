type PageProps = {
  children: React.ReactNode;
};

function Page({ children }: PageProps) {
  return (
    <div className="relative mx-auto w-full max-w-screen-sm">{children}</div>
  );
}

export { Page };

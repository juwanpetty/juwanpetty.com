import React from "react";
import { Page } from "../../shared/Page";

function Tools() {
  const breadcrumbs = [{ label: "Tools", href: "/tools" }];

  return (
    <Page
      breadcrumbs={breadcrumbs}
      title="Tools"
      subtitle="Tools and technologies I use."
    >
      Content goes here
    </Page>
  );
}

export default Tools;

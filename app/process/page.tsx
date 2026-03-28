import { ProcessPageView } from "@/components/pages/SurentSupplementalViews";
import { SchemaScript } from "@/components/site/SchemaScript";
import { createPageMetadata } from "@/lib/seo/metadata";
import { breadcrumbSchema, webpageSchema } from "@/lib/seo/schema";

export const metadata = createPageMetadata({
  title: "Process",
  description:
    "Understand the Surent Capital process for reviewing, structuring, diligencing, and closing complex real estate transactions.",
  path: "/process",
});

export default function ProcessPage() {
  return (
    <>
      <SchemaScript
        schemas={[
          webpageSchema({
            path: "/process",
            name: "Process",
            description:
              "The Surent Capital process from intake through closing.",
          }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Process", path: "/process" },
          ]),
        ]}
      />
      <ProcessPageView />
    </>
  );
}

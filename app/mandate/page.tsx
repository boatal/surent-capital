import { MandatePageView } from "@/components/pages/SurentPageViews";
import { SchemaScript } from "@/components/site/SchemaScript";
import { createPageMetadata } from "@/lib/seo/metadata";
import { breadcrumbSchema, webpageSchema } from "@/lib/seo/schema";

export const metadata = createPageMetadata({
  title: "Mandate",
  description:
    "Learn Surent Capital's mandate for deploying structured capital into real estate situations that fall outside conventional lender requirements.",
  path: "/mandate",
});

export default function MandatePage() {
  return (
    <>
      <SchemaScript
        schemas={[
          webpageSchema({
            path: "/mandate",
            name: "Mandate",
            description:
              "Surent Capital's mandate for structured capital deployment.",
          }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Mandate", path: "/mandate" },
          ]),
        ]}
      />
      <MandatePageView />
    </>
  );
}

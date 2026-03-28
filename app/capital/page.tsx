import { CapitalPageView } from "@/components/pages/SurentPageViews";
import { SchemaScript } from "@/components/site/SchemaScript";
import { createPageMetadata } from "@/lib/seo/metadata";
import { breadcrumbSchema, webpageSchema } from "@/lib/seo/schema";

export const metadata = createPageMetadata({
  title: "Capital",
  description:
    "Explore Surent Capital's bridge, construction, mezzanine, preferred, and situational capital solutions for complex real estate deals.",
  path: "/capital",
});

export default function CapitalPage() {
  return (
    <>
      <SchemaScript
        schemas={[
          webpageSchema({
            path: "/capital",
            name: "Capital",
            description:
              "Bridge lending, construction capital, mezzanine, preferred, and situational capital.",
          }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Capital", path: "/capital" },
          ]),
        ]}
      />
      <CapitalPageView />
    </>
  );
}

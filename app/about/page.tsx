import { AboutPageView } from "@/components/pages/SurentSupplementalViews";
import { SchemaScript } from "@/components/site/SchemaScript";
import { createPageMetadata } from "@/lib/seo/metadata";
import { breadcrumbSchema, personSchema, webpageSchema } from "@/lib/seo/schema";

export const metadata = createPageMetadata({
  title: "About",
  description:
    "Read about Surent Capital's perspective, values, and leadership, including Robert World II and the firm's approach to structured real estate capital.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <SchemaScript
        schemas={[
          webpageSchema({
            path: "/about",
            name: "About",
            description:
              "Company perspective, values, and leadership for Surent Capital.",
            type: "AboutPage",
          }),
          personSchema(),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "About", path: "/about" },
          ]),
        ]}
      />
      <AboutPageView />
    </>
  );
}

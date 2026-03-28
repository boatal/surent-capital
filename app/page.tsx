import { HomePageView } from "@/components/pages/SurentPageViews";
import { SchemaScript } from "@/components/site/SchemaScript";
import { createPageMetadata } from "@/lib/seo/metadata";
import {
  breadcrumbSchema,
  organizationSchema,
  webpageSchema,
  websiteSchema,
} from "@/lib/seo/schema";

export const metadata = createPageMetadata({
  title: "Structured Capital For Complex Real Estate",
  description:
    "Surent Capital provides structured capital for complex real estate situations where timing, complexity, and execution certainty determine the outcome.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <SchemaScript
        schemas={[
          organizationSchema(),
          websiteSchema(),
          webpageSchema({
            path: "/",
            name: "Surent Capital",
            description:
              "Structured capital for complex real estate situations.",
          }),
          breadcrumbSchema([{ name: "Home", path: "/" }]),
        ]}
      />
      <HomePageView />
    </>
  );
}

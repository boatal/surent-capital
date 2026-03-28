import { StrategyPageView } from "@/components/pages/SurentPageViews";
import { SchemaScript } from "@/components/site/SchemaScript";
import { createPageMetadata } from "@/lib/seo/metadata";
import { breadcrumbSchema, webpageSchema } from "@/lib/seo/schema";

export const metadata = createPageMetadata({
  title: "Strategy",
  description:
    "See how Surent Capital evaluates timing, complexity, structure, and certainty when deploying capital into real estate transactions.",
  path: "/strategy",
});

export default function StrategyPage() {
  return (
    <>
      <SchemaScript
        schemas={[
          webpageSchema({
            path: "/strategy",
            name: "Strategy",
            description:
              "The logic, principles, and investment thesis behind Surent Capital.",
          }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Strategy", path: "/strategy" },
          ]),
        ]}
      />
      <StrategyPageView />
    </>
  );
}

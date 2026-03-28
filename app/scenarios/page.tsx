import { ScenariosPageView } from "@/components/pages/SurentPageViews";
import { SchemaScript } from "@/components/site/SchemaScript";
import { createPageMetadata } from "@/lib/seo/metadata";
import { breadcrumbSchema, webpageSchema } from "@/lib/seo/schema";

export const metadata = createPageMetadata({
  title: "Scenarios",
  description:
    "Review real-world scenarios that show how Surent Capital responds when traditional capital sources cannot execute.",
  path: "/scenarios",
});

export default function ScenariosPage() {
  return (
    <>
      <SchemaScript
        schemas={[
          webpageSchema({
            path: "/scenarios",
            name: "Scenarios",
            description:
              "Real-world structured capital scenarios handled by Surent Capital.",
            type: "CollectionPage",
          }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Scenarios", path: "/scenarios" },
          ]),
        ]}
      />
      <ScenariosPageView />
    </>
  );
}

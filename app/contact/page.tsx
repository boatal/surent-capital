import { ContactPageView } from "@/components/pages/SurentSupplementalViews";
import { SchemaScript } from "@/components/site/SchemaScript";
import { createPageMetadata } from "@/lib/seo/metadata";
import { breadcrumbSchema, contactPageSchema } from "@/lib/seo/schema";

export const metadata = createPageMetadata({
  title: "Submit A Deal",
  description:
    "Submit a real estate opportunity to Surent Capital for review, including deal criteria, sponsor intake, and direct contact information.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <SchemaScript
        schemas={[
          contactPageSchema(),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Contact", path: "/contact" },
          ]),
        ]}
      />
      <ContactPageView />
    </>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { I18nProvider } from "@/lib/i18n";
import { Portfolio } from "@/components/portfolio/Portfolio";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Jean Paul Tech Studios — Senior Mobile & Full-Stack Engineer" },
      {
        name: "description",
        content:
          "Senior React Native and Full-Stack Engineer specialized in fintech, AI-powered apps, real-time systems, and production-grade mobile experiences.",
      },
      {
        property: "og:title",
        content: "Jean Paul Tech Studios — Senior Mobile & Full-Stack Engineer",
      },
      {
        property: "og:description",
        content: "Building premium mobile products that scale. Available for select engagements.",
      },
      { property: "og:type", content: "website" },
      // { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: IndexPage,
});

function IndexPage() {
  return (
    <I18nProvider>
      <Portfolio />
    </I18nProvider>
  );
}

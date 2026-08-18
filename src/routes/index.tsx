import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "PeopleMetrics — HR Analytics Dashboard Template" },
      {
        name: "description",
        content:
          "Professional HR analytics template with headcount, recruitment, compensation and retention dashboards.",
      },
      { property: "og:title", content: "PeopleMetrics — HR Analytics Dashboard Template" },
      {
        property: "og:description",
        content:
          "Responsive HTML/CSS/JS template for HR analytics: KPIs, charts, filterable tables and export controls.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="h-screen w-full bg-background">
      <h1 className="sr-only">PeopleMetrics HR Analytics Dashboard Template</h1>
      <iframe
        src="/hr-analytics-template.html"
        title="HR analytics dashboard template preview"
        className="h-full w-full border-0"
      />
    </main>
  );
}

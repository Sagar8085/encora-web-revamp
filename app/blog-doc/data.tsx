export const blogData = {
  metadata: {
    title: "Insights",
    description: "Short notes on returns, reuse, and ops.",
  },
  heading: "Insights",
  subheading: "Short notes on returns, reuse, and ops.",
  nav: {
    older: "Older",
    newer: "Newer",
  },
  posts: [
    {
      slug: "proof-at-drop",
      title: 'Why "proof at drop" matters',
      excerpt:
        "Photo + weight + reason at drop turns debates into data. Refunds go faster; disputes go down; your team stops playing detective.",
      date: new Date().toISOString().split("T")[0],
      tags: ["returns", "ops"],
    },
    {
      slug: "access-vs-reuse",
      title: "Access vs. Reuse: when to use which",
      excerpt:
        "Access = brand-agnostic returns hub; Reuse = campus-grade container flow. Same core, different guardrails.",
      date: new Date().toISOString().split("T")[0],
      tags: ["reuse", "returns"],
    },
    {
      slug: "connect-webhooks",
      title: "Connect: webhooks without a POS rip-and-replace",
      excerpt:
        "Push refund status and exceptions to your POS/OMS via webhooks and idempotent events—no migration required.",
      date: new Date().toISOString().split("T")[0],
      tags: ["api", "ops"],
    },
  ],
};

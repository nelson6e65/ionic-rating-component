/**
 * @type {import('semantic-release').GlobalConfig}
 */
export default {
  branches: ["main"],
  plugins: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    [
      "@semantic-release/npm",
      {
        pkgRoot: "dist",
      },
    ],
    [
      "@semantic-release/github",
      {
        assignees: "@nelson6e65",
        discussionCategoryName: "announcements",
      },
    ],
  ],
};

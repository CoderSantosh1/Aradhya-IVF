/** Types inferred from the category data JSON. */
export type CategoryData = typeof import("../data/category.json");
export type SiteData = CategoryData["common"]["site"];
export type Treatment = CategoryData["categories"]["AaradhyaIVF"]["treatments"][number];
export type BlogPost = CategoryData["categories"]["AaradhyaIVF"]["blogPosts"][number];

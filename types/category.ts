/** Types inferred from the category data JSON. */
export type CategoryData = typeof import("../data/category.json");
export type SocialIconName = keyof typeof import("../components/icons").socialIcons;
export type SiteData = Omit<CategoryData["common"]["site"], "socials"> & {
  socials: Array<{
    label: string;
    href: string;
    icon: SocialIconName;
  }>;
};
export type Treatment = CategoryData["categories"]["AaradhyaIVF"]["treatments"][number];
export type BlogPost = CategoryData["categories"]["AaradhyaIVF"]["blogPosts"][number];
export type StepIconName = "users" | "clipboard" | "flask" | "embryo" | "baby";
export type JourneyStep = Omit<CategoryData["categories"]["AaradhyaIVF"]["steps"][number], "icon"> & {
  icon: StepIconName;
};

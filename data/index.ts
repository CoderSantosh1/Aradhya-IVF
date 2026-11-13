import categoryData from "./category.json";
import type { SiteData } from "@/types/category";

const category = categoryData.categories.AaradhyaIVF;

export const site = categoryData.common.site as SiteData;
export const navLinks = categoryData.common.navLinks;
export const marqueeItems = categoryData.common.marqueeItems;
export const footerServices = categoryData.common.footerServices;

export const treatments = category.treatments;
export const sidebarTreatmentSlugs = category.sidebarTreatmentSlugs;
export const cardTreatments = category.treatments.filter((treatment) => treatment.card);
export const getTreatment = (slug: string) => category.treatments.find((treatment) => treatment.slug === slug);
export const specialists = category.specialists;
export const gallery = category.gallery;
export const blogPosts = category.blogPosts;
export const getPost = (slug: string) => category.blogPosts.find((post) => post.slug === slug);
export const faqs = category.faqs;
export const testimonials = category.testimonials;
export const steps = category.steps as import("@/types/category").JourneyStep[];

export type { BlogPost, CategoryData, JourneyStep, SiteData, StepIconName, Treatment } from "@/types/category";

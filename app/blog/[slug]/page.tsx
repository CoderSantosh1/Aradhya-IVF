import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import PageBanner from "@/components/PageBanner";
import SectionLabel from "@/components/SectionLabel";
import { ArrowLeft, ArrowRight, Calendar, Heart, Tag, User } from "@/components/icons";
import { blogPosts, getPost } from "@/lib/data";
import { delay } from "@/lib/utils";

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps<"/blog/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.intro.slice(0, 155),
    openGraph: { type: "article", images: [post.image] },
  };
}

/** Render the title with its highlighted phrase in brand colour. */
function Title({ title, highlight }: { title: string; highlight: string }) {
  const idx = title.indexOf(highlight);
  if (idx === -1) return <>{title}</>;
  return (
    <>
      {title.slice(0, idx)}
      <span className="text-primary">{highlight}</span>
      {title.slice(idx + highlight.length)}
    </>
  );
}

export default function BlogDetailPage({ params }: PageProps<"/blog/[slug]">) {
  return (
    <>
      <PageBanner title="Blog Detail" titleAs="p" crumbs={[{ label: "Blog", href: "/blog" }, { label: "Blog Detail" }]} />
      <Suspense fallback={<ArticleSkeleton />}>
        <BlogArticle params={params} />
      </Suspense>
    </>
  );
}

function ArticleSkeleton() {
  return (
    <div className="mx-auto max-w-[1351px] animate-pulse space-y-6 px-4 py-12 sm:px-8 lg:px-[85px]">
      <div className="mx-auto h-12 w-2/3 rounded-lg bg-white/50" />
      <div className="aspect-[1181/391] rounded-[18px] bg-white/50" />
      <div className="h-24 rounded-lg bg-white/40" />
    </div>
  );
}

async function BlogArticle({ params }: { params: PageProps<"/blog/[slug]">["params"] }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const index = blogPosts.findIndex((p) => p.slug === slug);
  const prev = blogPosts[index - 1];
  const next = blogPosts[index + 1];

  return (
      <article className="py-12 lg:pb-10 lg:pt-[52px]">
        <div className="mx-auto max-w-[1351px] px-4 sm:px-8 lg:px-[85px]">
          <header className="text-center">
            <SectionLabel className="[&>span:nth-child(2)]:text-[16px] [&>span:nth-child(2)]:font-semibold [&>span:nth-child(2)]:text-ink">
              Blog Details
            </SectionLabel>
            <h1 data-reveal="up" className="mx-auto mt-5 max-w-[1000px] font-serif text-[32px] font-medium leading-tight text-ink sm:text-[44px]">
              <Title title={post.title} highlight={post.highlight} />
            </h1>
            <ul data-reveal="up" style={delay(150)} className="mt-5 flex flex-wrap items-center justify-center gap-x-7 gap-y-3 font-sans text-[16px] text-muted">
              <li className="flex items-center gap-2.5"><Calendar size={22} className="text-primary" /><time>{post.date}</time></li>
              <li aria-hidden className="hidden h-5 w-px bg-gold sm:block" />
              <li className="flex items-center gap-2.5"><User size={22} className="text-primary" />By {post.author}</li>
              <li aria-hidden className="hidden h-5 w-px bg-gold sm:block" />
              <li className="flex items-center gap-2.5"><Tag size={22} className="text-primary" />{post.category}</li>
            </ul>
          </header>

          <div data-reveal="mask" className="relative mt-8 aspect-[1181/391] overflow-hidden rounded-[18px] shadow-soft">
            <Image src={post.image} alt={post.title} fill preload sizes="(min-width: 1351px) 1181px, 100vw" className="object-cover" />
          </div>

          <p data-reveal="up" className="mt-7 font-sans text-[18px] leading-[1.75] text-muted sm:text-[20px]">{post.intro}</p>

          <div className="mt-8 space-y-8 lg:space-y-6">
            {post.tips.map((tip, i) => {
              const imageRight = i % 2 === 0;
              return (
                <section key={tip.title} className="grid items-center gap-6 md:grid-cols-2 md:gap-9">
                  <div data-reveal={imageRight ? "left" : "right"} className={imageRight ? "" : "md:order-2"}>
                    <h2 className="flex items-center gap-6 font-serif text-[26px] font-medium text-ink sm:text-[30px]">
                      <span className="grid size-[62px] shrink-0 place-items-center rounded-full bg-primary-soft font-sans text-[22px] font-semibold text-primary">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      {tip.title}
                    </h2>
                    <p className="mt-3 font-sans text-[17px] leading-[1.7] text-muted sm:pl-[88px] sm:text-[18.5px]">{tip.body}</p>
                  </div>
                  <div data-reveal={imageRight ? "mask-left" : "mask"} className={`img-zoom relative aspect-[567/235] overflow-hidden rounded-[18px] shadow-soft ${imageRight ? "" : "md:order-1"}`}>
                    <Image src={tip.image} alt="" fill sizes="(min-width: 768px) 570px, 100vw" className="object-cover" />
                  </div>
                </section>
              );
            })}
          </div>

          <aside data-reveal="up" className="mt-8 flex flex-col gap-6 rounded-[18px] border border-white bg-white/50 p-6 shadow-soft sm:flex-row sm:items-center sm:gap-10 sm:px-11">
            <span className="grid size-[76px] shrink-0 place-items-center rounded-full bg-primary-soft text-primary">
              <Heart size={38} className="animate-[heartbeat_1.6s_ease-in-out_infinite]" />
            </span>
            <span className="hidden h-[76px] w-px bg-primary/30 sm:block" />
            <div>
              <h2 className="font-serif text-[22px] font-semibold text-primary">Conclusion</h2>
              <p className="mt-1 font-sans text-[17px] leading-[1.65] text-muted">{post.conclusion}</p>
            </div>
          </aside>

          <nav aria-label="More articles" className="mt-10 grid gap-4 sm:grid-cols-2">
            {prev ? (
              <Link href={`/blog/${prev.slug}`} className="group flex items-center gap-4 rounded-2xl bg-white/50 p-5 transition-all duration-300 hover:bg-white hover:shadow-soft">
                <ArrowLeft size={22} className="shrink-0 text-primary transition-transform group-hover:-translate-x-1" />
                <span><span className="block font-sans text-sm uppercase tracking-widest text-muted">Previous</span><span className="font-serif text-lg text-ink">{prev.title}</span></span>
              </Link>
            ) : <span />}
            {next && (
              <Link href={`/blog/${next.slug}`} className="group flex items-center justify-end gap-4 rounded-2xl bg-white/50 p-5 text-right transition-all duration-300 hover:bg-white hover:shadow-soft">
                <span><span className="block font-sans text-sm uppercase tracking-widest text-muted">Next</span><span className="font-serif text-lg text-ink">{next.title}</span></span>
                <ArrowRight size={22} className="shrink-0 text-primary transition-transform group-hover:translate-x-1" />
              </Link>
            )}
          </nav>
        </div>
      </article>
  );
}

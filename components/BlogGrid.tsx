"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import { blogPosts } from "@/lib/data";
import { delay } from "@/lib/utils";
import { ArrowRight, Calendar } from "./icons";
import Pagination from "./Pagination";

const PER_PAGE = 4;

export default function BlogGrid() {
  const [page, setPage] = useState(1);
  const top = useRef<HTMLDivElement>(null);
  const total = Math.ceil(blogPosts.length / PER_PAGE);
  const posts = blogPosts.slice((page - 1) * PER_PAGE, page * PER_PAGE);

  const change = (p: number) => {
    setPage(p);
    top.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div ref={top} className="scroll-mt-28">
      <ul key={page} className="grid gap-[30px] md:grid-cols-2">
        {posts.map((post, i) => (
          <li key={post.slug} data-reveal="up" style={delay((i % 2) * 140)}>
            <article data-tilt="4" className="group relative h-full overflow-hidden rounded-[18px] bg-white/55 shadow-[0_15px_40px_-25px_rgb(180_43_85/0.5)] ring-1 ring-white transition-all duration-500 hover:-translate-y-2 hover:bg-white/90 hover:shadow-card">
              <div className="relative aspect-[612/330] overflow-hidden">
                <Image
                  src={post.image}
                  alt=""
                  fill
                  sizes="(min-width: 768px) 612px, 100vw"
                  className="object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110"
                />
                <span className="absolute bottom-4 left-5 rounded-full bg-primary px-5 py-2 font-sans text-[16px] font-medium text-white shadow-[0_0_0_5px_rgb(255_255_255/0.45)]">
                  {post.category}
                </span>
              </div>
              <div className="px-6 pb-7 pt-5">
                <h2 className="font-serif text-[24px] font-medium leading-[1.3] text-ink transition-colors duration-300 group-hover:text-primary sm:text-[30px]">
                  <Link href={`/blog/${post.slug}`} className="after:absolute after:inset-0">
                    {post.title}
                  </Link>
                </h2>
                <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 font-sans text-[15px] text-muted sm:text-[16px]">
                  <span className="flex items-center gap-3">
                    <Calendar size={22} className="text-primary" />
                    Post By {post.author}
                  </span>
                  <span className="h-px w-5 bg-gold" aria-hidden />
                  <time>{post.date}</time>
                  <ArrowRight size={20} className="ml-auto -translate-x-3 text-primary opacity-0 transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100" />
                </div>
              </div>
            </article>
          </li>
        ))}
      </ul>
      <Pagination page={page} total={total} onChange={change} size="lg" />
    </div>
  );
}

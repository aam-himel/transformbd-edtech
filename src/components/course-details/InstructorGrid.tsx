"use client";

import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, PlayCircle, Linkedin, Twitter, Globe } from "lucide-react";
import { motion } from "motion/react";

// Types
export type Instructor = {
  id: string;
  name: string;
  title: string;
  avatar: string; // local / public image path or remote URL
  rating?: number; // 0-5
  students?: number;
  tags?: string[];
  links?: {
    website?: string;
    twitter?: string;
    linkedin?: string;
  };
};

// Demo data (replace with your API data)
const demoInstructors: Instructor[] = [
  {
    id: "4",
    name: "Ethan Park",
    title: "Full‑Stack Instructor",
    avatar: "/images/instructors/p4.png",
    rating: 4.92,
    students: 15600,
    tags: ["Node.js", "Postgres", "Prisma"],
    links: { website: "#", twitter: "#", linkedin: "#" },
  },
  {
    id: "5",
    name: "Zara Ali",
    title: "Data Viz Specialist",
    avatar: "/images/instructors/p1.png",
    rating: 4.85,
    students: 8600,
    tags: ["D3.js", "Charts", "Storytelling"],
    links: { website: "#", twitter: "#", linkedin: "#" },
  },
  {
    id: "6",
    name: "Liam Chen",
    title: "DevOps Coach",
    avatar: "/images/instructors/p2.png",
    rating: 4.88,
    students: 10400,
    tags: ["Docker", "Kubernetes", "CI/CD"],
    links: { website: "#", twitter: "#", linkedin: "#" },
  },
];

// Star rating component (no half-star icon dependency)
function Stars({ value = 0 }: { value?: number }) {
  const full = Math.floor(value);
  const hasHalf = value - full >= 0.5;
  return (
    <div className="flex items-center gap-1" aria-label={`Rating ${value} out of 5`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${i < full ? "fill-current" : hasHalf && i === full ? "[clip-path:polygon(0_0,50%_0,50%_100%,0_100%)] fill-current" : ""}`}
        />
      ))}
      <span className="ml-1 text-sm text-gray-200">{value.toFixed(2)}</span>
    </div>
  );
}

// Main grid component
export default function InstructorGrid({
  instructors = demoInstructors,
}: {
  instructors?: Instructor[];
}) {
  return (
    <section className="w-full py-12">
      {/* White page background assumption */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <header className="mb-8 text-center">
          <div className=' flex items-center justify-center w-full'>
            <h2 className='relative mb-6 inline-block px-1.5 text-3xl font-bold text-center font-mono tracking-wider text-orange-500 uppercase dark:text-sky-300'>
              <span className='absolute inset-0 border border-dashed border-orange-300/60 bg-emerald-400/10 group-hover:bg-sky-400/15 dark:border-sky-300/30'></span>
              ইন্সট্রাক্টর
              <svg
                width='5'
                height='5'
                viewBox='0 0 5 5'
                className='absolute top-[-2px] left-[-2px] fill-sky-300 dark:fill-sky-300/50'
              >
                <path d='M2 0h1v2h2v1h-2v2h-1v-2h-2v-1h2z'></path>
              </svg>
              <svg
                width='5'
                height='5'
                viewBox='0 0 5 5'
                className='absolute top-[-2px] right-[-2px] fill-sky-300 dark:fill-sky-300/50'
              >
                <path d='M2 0h1v2h2v1h-2v2h-1v-2h-2v-1h2z'></path>
              </svg>
              <svg
                width='5'
                height='5'
                viewBox='0 0 5 5'
                className='absolute bottom-[-2px] left-[-2px] fill-sky-300 dark:fill-sky-300/50'
              >
                <path d='M2 0h1v2h2v1h-2v2h-1v-2h-2v-1h2z'></path>
              </svg>
              <svg
                width='5'
                height='5'
                viewBox='0 0 5 5'
                className='absolute right-[-2px] bottom-[-2px] fill-sky-300 dark:fill-sky-300/50'
              >
                <path d='M2 0h1v2h2v1h-2v2h-1v-2h-2v-1h2z'></path>
              </svg>
            </h2>
          </div>
          <p className="mt-2 text-gray-200">Hand‑picked experts with real‑world experience.</p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {instructors.map((ins, idx) => (
            <motion.div
              key={ins.id}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: idx * 0.04 }}
            >
              <Card className="group relative overflow-hidden rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow bg-white">
                {/* Soft top gradient ribbon to pop on white pages */}
                <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-blue-50/80 to-transparent" />

                <CardHeader className="pt-6 pb-0">
                  <div className="relative mx-auto h-28 w-28 overflow-hidden rounded-full ring-4 ring-white shadow-sm">
                    <Image
                      src={ins.avatar}
                      alt={ins.name}
                      fill
                      className="object-cover"
                      sizes="112px"
                    />
                    {/* Hover play to preview intro video (optional) */}
                    <button
                      className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute inset-0 grid place-items-center bg-black/30"
                      aria-label={`Play ${ins.name} intro`}
                    >
                      <PlayCircle className="h-10 w-10 text-white drop-shadow" />
                    </button>
                  </div>
                  <CardTitle className="mt-4 text-center">
                    <span className="block text-lg font-semibold leading-tight">{ins.name}</span>
                    <span className="mt-1 block text-sm font-normal text-gray-200">{ins.title}</span>
                  </CardTitle>
                </CardHeader>

                <CardContent className="space-y-2 pb-4">
                  <div className="flex items-center justify-center">
                    <Stars value={ins.rating ?? 0} />
                    {ins.students ? (
                      <span className="ml-3 text-sm text-gray-200">{Intl.NumberFormat().format(ins.students)} students</span>
                    ) : null}
                  </div>

                  {ins.tags && ins.tags.length > 0 ? (
                    <div className="flex flex-wrap items-center justify-center gap-2">
                      {ins.tags.map((t) => (
                        <Badge key={t} variant="secondary" className="rounded-full px-3 py-1">
                          {t}
                        </Badge>
                      ))}
                    </div>
                  ) : null}

                  <div className="flex items-center justify-center gap-3 pt-2">
                    {ins.links?.website ? (
                      <Button asChild size="icon" variant="ghost" className="hover:bg-muted">
                        <a href={ins.links.website} aria-label={`${ins.name} website`} target="_blank" rel="noreferrer">
                          <Globe className="h-5 w-5" />
                        </a>
                      </Button>
                    ) : null}
                    {ins.links?.twitter ? (
                      <Button asChild size="icon" variant="ghost" className="hover:bg-muted">
                        <a href={ins.links.twitter} aria-label={`${ins.name} on Twitter`} target="_blank" rel="noreferrer">
                          <Twitter className="h-5 w-5" />
                        </a>
                      </Button>
                    ) : null}
                    {ins.links?.linkedin ? (
                      <Button asChild size="icon" variant="ghost" className="hover:bg-muted">
                        <a href={ins.links.linkedin} aria-label={`${ins.name} on LinkedIn`} target="_blank" rel="noreferrer">
                          <Linkedin className="h-5 w-5" />
                        </a>
                      </Button>
                    ) : null}
                  </div>

                  <div className="pt-2">
                    <Button className="w-full rounded-xl">View Profile</Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

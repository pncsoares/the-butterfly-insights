"use client";

import Footer from "@/components/footer";
import Header from "@/components/header";
import Insight from "@/components/insight";
import Dedication from "@/components/walkthrough";
import { insights } from "@/data/insights";
import type { InsightType } from "@/types/insight";
import { Skeleton } from "@heroui/react";
import { useEffect, useState } from "react";

const insightDivClassName: string =
  "flex flex-col items-center justify-center align-center w-full gap-10 px-5";

export default function Home() {
  const [currentInsight, setCurrentInsight] = useState<InsightType | null>(
    null,
  );

  useEffect(() => {
    setCurrentInsight(insights[Math.floor(Math.random() * insights.length)]);
  }, []);

  return (
    <main className="flex flex-1 w-full flex-col items-center justify-between py-5 sm:py-10 sm:items-start">
      <Header />
      {currentInsight ? (
        <div className={insightDivClassName}>
          <Insight insight={currentInsight.insight} />
          <Dedication walkthrough={currentInsight.walkthrough} />
        </div>
      ) : (
        <div className={insightDivClassName}>
          <div className="flex flex-col w-full max-w-md space-y-3 items-center align-center">
            <Skeleton className="h-4 w-full rounded" />
            <Skeleton className="h-4 w-3/6 rounded" />
          </div>
          <div className="flex flex-col w-full max-w-md space-y-3 items-center align-center">
            <Skeleton className="h-4 w-full rounded" />
            <Skeleton className="h-4 w-5/6 rounded" />
            <Skeleton className="h-4 w-5/6 rounded" />
            <Skeleton className="h-4 w-4/6 rounded" />
          </div>
        </div>
      )}
      <Footer />
    </main>
  );
}

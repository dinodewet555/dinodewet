"use client";
import dynamic from "next/dynamic";

const CustomCursor = dynamic(() => import("@/components/CustomCursor"), { ssr: false });
const ScrollProgress = dynamic(() => import("@/components/ScrollProgress"), { ssr: false });

export default function ClientEffects() {
  return (
    <>
      <CustomCursor />
      <ScrollProgress />
    </>
  );
}

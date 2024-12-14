"use client";
import Image from "next/image";
import Home from "./pages/Home";
import About from "./pages/QualityandRewards";
import ThirdPage from "./pages/ThirdPage";

export default function Page() {
  return (
    <div>
      <Home />
      <About />
      <ThirdPage/>
    </div>
  );
}

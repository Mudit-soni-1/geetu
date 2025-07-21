
import React from "react";
import LoveCalculator from "@/components/LoveCalculator";
import Navbar from "@/components/Navbar";

const LoveCalculatorPage: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className="container py-12 px-4 pt-20">
        <h1 className="text-4xl font-bold text-center mb-8">
          Cosmic Love Calculator
        </h1>
        <LoveCalculator />
      </div>
    </>
  );
};

export default LoveCalculatorPage;

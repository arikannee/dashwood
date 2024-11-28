"use client";
import { useState, useEffect } from 'react';

const YearsOfExperience = () => {
  const [years, setYears] = useState(10); // Start with 10 as a placeholder for loading
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    const currentYear = new Date().getFullYear();
    setYears(currentYear - 2014); // Calculate years since 2014
    setLoading(false); // Set loading to false once the years are calculated
  }, []);

  return (
    <div>
      {loading ? (
        <h2 className="text-2xl mb-0">10+</h2> // Show 10+ during loading
      ) : (
        <h2 className="text-2xl mb-0">{years}+ </h2> // Show actual years after loading
      )}
      Years of Experience
    </div>
  );
}

export default YearsOfExperience;

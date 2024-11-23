"use client"
import { useState, useEffect } from 'react';

const YearsOfExperience = () => {
  const [years, setYears] = useState(0);

  useEffect(() => {
    const currentYear = new Date().getFullYear();
    setYears(currentYear - 2016); // Calculate years since 2016
  }, []);

  return (
    <div>
      <h2 className="text-2xl mb-0">{years}+</h2> Years of Experience
    </div>
  );
}

export default YearsOfExperience;


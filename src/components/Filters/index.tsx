
/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import React from 'react';

const MarketCapSelect = ({ onChange, currentSelect }: any) => {
  const options = [
    { label: 'All', value: '' },  // 'All' option for no filter
    { label: '< $1B', value: 'under_1B' },
    { label: '$1B - $10B', value: '1B_to_10B' },
    { label: '> $10B', value: 'over_10B' },
  ];

  return (
    <div className="flex items-center">
      <label htmlFor="marketCap" className="mr-2 text-sm text-gray-700">
        Filter by Market Cap:
      </label>
      <select
        id="marketCap"
        value={currentSelect}
        onChange={(e) => onChange(e.target.value)}
        className="bg-white border border-gray-300 text-gray-700 rounded-md p-2"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default MarketCapSelect;

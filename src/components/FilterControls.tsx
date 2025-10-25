'use client';

import { Region, Industry } from '@/data/types';

interface FilterControlsProps {
  regions: Region[];
  industries: Industry[];
  onRegionChange: (value: Region | 'all') => void;
  onIndustryChange: (value: Industry | 'all') => void;
}

export default function FilterControls({
  regions,
  industries,
  onRegionChange,
  onIndustryChange,
}: FilterControlsProps) {
  return (
    <aside className="filter-controls">
      <div className="filter-group">
        <label htmlFor="region-filter">Filter by Region</label>
        <select
          id="region-filter"
          onChange={(e) => onRegionChange(e.target.value as Region | 'all')}
        >
          <option value="all">All Regions</option>
          {regions.map((r) => (
            <option key={r} value={r}>
              {r}
            </option>
          ))}
        </select>
      </div>
      <div className="filter-group">
        <label htmlFor="industry-filter">Filter by Industry</label>
        <select
          id="industry-filter"
          onChange={(e) => onIndustryChange(e.target.value as Industry | 'all')}
        >
          <option value="all">All Industries</option>
          {industries.map((i) => (
            <option key={i} value={i}>
              {i}
            </option>
          ))}
        </select>
      </div>
    </aside>
  );
}
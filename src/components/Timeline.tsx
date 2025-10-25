'use client';

import { useState } from 'react';
import { RegulationEntry, Region, Industry } from '@/data/types';
import FilterControls from './FilterControls';
import RegulationCard from './RegulationCard';

interface TimelineProps {
  regulations: RegulationEntry[];
  regions: Region[];
  industries: Industry[];
}

export default function Timeline({
  regulations,
  regions,
  industries,
}: TimelineProps) {
  const [filterRegion, setFilterRegion] = useState<Region | 'all'>('all');
  const [filterIndustry, setFilterIndustry] = useState<Industry | 'all'>('all');

  // Apply filters
  const filteredRegulations = regulations.filter((reg) => {
    const regionMatch = filterRegion === 'all' || reg.region === filterRegion;
    const industryMatch =
      filterIndustry === 'all' || reg.industry === filterIndustry;
    return regionMatch && industryMatch;
  });

  return (
    <div className="timeline-container">
      <FilterControls
        regions={regions}
        industries={industries}
        onRegionChange={setFilterRegion}
        onIndustryChange={setFilterIndustry}
      />
      <div className="timeline-list">
        {filteredRegulations.length > 0 ? (
          filteredRegulations.map((reg) => (
            <RegulationCard key={reg.id} entry={reg} />
          ))
        ) : (
          <p className="no-results">
            No regulations found matching your criteria.
          </p>
        )}
      </div>
    </div>
  );
}
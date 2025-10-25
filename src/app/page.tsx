import regulationsData from '@/data/regulations.json';
import { RegulationEntry, Region, Industry } from '@/data/types';
import Timeline from '@/components/Timeline';

/**
 * Reads, sorts, and prepares regulation data on the server.
 */
async function getTimelineData() {
  const regulations = regulationsData as RegulationEntry[];

  // Sort regulations by date, newest first
  const sortedRegulations = regulations.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  // Get unique filter options from the data
  const regions = [...new Set(regulations.map((r) => r.region))].sort() as Region[];
  const industries = [...new Set(regulations.map((r) => r.industry))].sort() as Industry[];

  return { sortedRegulations, regions, industries };
}

export default async function HomePage() {
  const { sortedRegulations, regions, industries } = await getTimelineData();

  return (
    <main className="container">
      <header className="page-header">
        <h1>Global AI Governance Chronology</h1>
        <p>
          A filterable timeline of AI-related laws, regulations, and policies
          worldwide.
        </p>
      </header>
      <Timeline
        regulations={sortedRegulations}
        regions={regions}
        industries={industries}
      />
    </main>
  );
}
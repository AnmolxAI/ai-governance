import regulationsData from '@/data/regulations.json';
import { RegulationEntry, Region, Industry } from '@/data/types';
import Timeline from '@/components/Timeline';
import Footer from '@/components/Footer';
import ThemeToggle from '@/components/ThemeToggle';
import SubstackSubscription from '@/components/SubstackSubscription';

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
        <div className="header-top">
          <h1>AI Governance Today</h1>
          <ThemeToggle />
        </div>
        <p>
          Making sense of AI policy, one week at a time. Breaking down new
          regulations, explaining governance frameworks, and tracking the global
          effort to govern artificial intelligence responsibly.
        </p>
        <p className="author">By Anmol Kumar</p>
        <SubstackSubscription />
      </header>
      <section className="timeline-section">
        <h2>Global AI Governance RegulationChronology</h2>
        <p>
          A filterable timeline of AI and privacy-related laws, regulations,
          frameworks and policies worldwide.
        </p>
      </section>
      <Timeline
        regulations={sortedRegulations}
        regions={regions}
        industries={industries}
      />
      <Footer />
    </main>
  );
}
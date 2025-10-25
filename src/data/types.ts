/**
 * Defines the filterable categories for Region.
 * Add more as your JSON data expands.
 */
export type Region = 
  | "United States" 
  | "European Union" 
  | "Japan" 
  | "China" 
  | "United Kingdom" 
  | "International" 
  | "France" 
  | "Canada";

/**
 * Defines the filterable categories for Industry.
 * Add more as your JSON data expands.
 */
export type Industry = 
  | "General" 
  | "Healthcare" 
  | "Finance" 
  | "Transportation" 
  | "Workplace" 
  | "Media / Consumer Protection" 
  | "Privacy" 
  | "R&D"
  | "Data Governance";

/**
 * Represents a single entry in your AI Governance timeline.
 */
export interface RegulationEntry {
  /** A unique ID for React keys */
  id: string;
  /** The date of the event in YYYY-MM-DD format for easy sorting */
  date: string; 
  /** The specific entity (e.g., "United States (Colorado)") */
  jurisdiction: string;
  /** The general filterable region */
  region: Region;
  /** The title of the regulation */
  title: string;
  /** The current status (e.g., "Enacted", "Proposed") */
  status: string;
  /** The general filterable industry */
  industry: Industry;
  /** A brief description of the event */
  notes: string;
}
export interface Organisation {
  id?: string;

  // Core
  name: string;
  leader: string;

  // Elements
  description: string;
  iconUrl: string;
  imageUrl: string;

  // Traceability
  modified?: string; // DATE/TIME + USER
}

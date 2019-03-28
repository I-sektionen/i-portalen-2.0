export interface Hero {
  id?: string;

  // Core
  name: string;

  // Elements
  // description?: string;
  linkUrl?: string;
  imageUrl: string;

  // Traceability
  modified?: any; // DATE/TIME + USER
}

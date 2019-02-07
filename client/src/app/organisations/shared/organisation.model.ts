export enum Area {
  External = 'Arbetsmarknad och externa kanaler',
  Internal = 'Interna kanaler',
  Social = 'Sociala aktiviteter och mottagning',
  Education = 'Utbildning och arbetsmiljö',
}

export interface Organisation {
  id?: string;

  // Core
  name: string;
  leader: string;
  area: Area;

  // Elements
  description: string;
  iconUrl: string;
  imageUrl: string;

  // Traceability
  modified?: any; // DATE/TIME + USER
}

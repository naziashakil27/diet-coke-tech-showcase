export interface FlavorItem {
  id: string;
  name: string;
  tagline: string;
  image: string;
  accentColor: string;
  badge: string;
  canColor: string;
  description: string;
}

export interface TechSpec {
  id: string;
  label: string;
  value: string;
  unit?: string;
  description: string;
  iconName: string;
}

export interface ProductVariant {
  id: string;
  name: string;
  image: string;
  accentColor: string;
  label: string;
}

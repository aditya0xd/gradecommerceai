import {
  HeartPulse, Landmark, Home, GraduationCap,
  Truck, ShoppingCart, Factory, Plane,
  Hotel, BrainCircuit,
  type LucideIcon
} from "lucide-react";

export type IndustryItem = {
  n: string;
  icon: LucideIcon;
};

export const INDUSTRIES: IndustryItem[] = [
  { icon: HeartPulse, n: 'Healthcare' },
  { icon: Landmark, n: 'FinTech' },
  { icon: Home, n: 'Real Estate' },
  { icon: GraduationCap, n: 'Education' },
  { icon: Truck, n: 'Logistics' },
  { icon: ShoppingCart, n: 'Retail' },
  { icon: Factory, n: 'Manufacturing' },
  { icon: Plane, n: 'Travel' },
  { icon: Hotel, n: 'Hospitality' },
  { icon: BrainCircuit, n: 'Artificial Intelligence' }
];

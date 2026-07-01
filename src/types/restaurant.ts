export type SortOption = "aiScore" | "googleRating" | "reviewCount";

export interface Restaurant {
  id: number;
  name: string;
  city: string;
  latitude: number;
  longitude: number;
  googleRating: number;
  reviewCount: number;
  aiScore: number;
  friesScore: number;
  burgerScore: number;
  cleanlinessScore: number;
  speedScore: number;
  staffScore: number;
  orderAccuracyScore: number;
  summary: string;
  awards: string[];
}

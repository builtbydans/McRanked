import type { Restaurant } from "@/types/restaurant";

export async function analyseRestaurant(
  restaurant: Restaurant,
): Promise<Restaurant> {
  void restaurant;
  throw new Error("Not implemented");
}

export async function analyseAllRestaurants(
  restaurants: Restaurant[],
): Promise<Restaurant[]> {
  void restaurants;
  throw new Error("Not implemented");
}

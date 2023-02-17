import { IRatings } from "types";
import { client } from "./client";

export async function saveUserInfo(userDetails: any): Promise<unknown> {
  const data: Record<string, string> = {
    firstName: userDetails.given_name,
    lastName: userDetails.family_name,
    phoneNumber: "08012345678",
    emailAddress: userDetails.email,
    country: userDetails.zoneinfo.split("/")[0],
    area: "Paris",
    city: userDetails.zoneinfo.split("/")[1],
    street: "rue de la paix",
    streetNumber: "1",
    userId: userDetails.email
  };
  return client("java", "store-details", { body: data });
}

export async function getRecommendedMovies(): Promise<unknown> {
  return client("java", "recommended-movies");
}

export async function getRecentMovies(): Promise<unknown> {
  return client("java", "recent-movies");
}

export async function getRatings(movie_id: number): Promise<unknown> {
  return client("express", `get-rating/${movie_id}`);
}

export async function createRatings(data: IRatings): Promise<unknown> {
  return client("express", "create-rating", {
    body: data
  });
}

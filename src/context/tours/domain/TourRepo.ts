import { Tour } from "./Tour";

export interface TourRepo {
    save(tour: Tour): void
}
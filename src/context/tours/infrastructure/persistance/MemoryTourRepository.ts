import { Tour } from "../../domain/Tour";
import { TourRepo } from "../../domain/TourRepo";


export class MemoryTourRepository implements TourRepo {
    tours: Tour[] = [];

    save(tour: Tour) {
        this.tours.push(tour);
    }

    getTours() {
        this.tours.map(tour => console.log(tour))
    }

}
import { UseCase } from "../../../shared/application/UseCase";
import { UserRepo } from "../../../user/domain/UserRepo";
import { TourRepo } from "../../domain/TourRepo";
import { Tour } from "../../domain/Tour";

export default class CreateTour implements UseCase {
    private tourRepository: TourRepo;
    private userRepository: UserRepo;

    constructor(
        tourRepository: TourRepo,
        userRepository: UserRepo,
    ) {
        this.tourRepository = tourRepository
        this.userRepository = userRepository
    }

    execute(props): void {
        const user = this.userRepository.get(props.userId)

        if (!user) {
            throw new Error("User not found");
        }

        const tour = Tour.create({
            title: props.title,
            description: props.description,
            capacity: props.capacity,
            date: props.date,
            user: user
        })
        
        this.tourRepository.save(tour)

        // lanzar new TourWasCreated
    }
} 
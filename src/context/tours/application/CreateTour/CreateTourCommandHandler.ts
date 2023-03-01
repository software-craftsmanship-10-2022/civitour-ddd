import { UserRepo } from "../../../user/domain/UserRepo"
import { TourRepo } from "../../domain/TourRepo"
import { CommandBus } from "../../../shared/domain/CommandBus"
import CreateTourCommand from "./CreateTourCommand"
import { Tour } from "../../domain/Tour"

export default class CreateTourCommandHandler implements CommandBus {
    private userRepository: UserRepo
    private tourRepository: TourRepo
    
    constructor(userRepo: UserRepo, tourRepo: TourRepo) {
        this.userRepository = userRepo;
        this.tourRepository = tourRepo
    }
    
    dispatch(command: CreateTourCommand): void {
        const user = this.userRepository.get(command.getUserId())

        if (!user) {
            throw new Error("User not found");
        }
        
        const tour = Tour.create({
            title: command.getTourTitle(),
            description: command.getTourDescription(),
            capacity: command.getTourCapacity(),
            date: command.getTourDate(),
            user: user
        })
        
        this.tourRepository.save(tour)

        // publish TourWasCreated
    }
}
import { UserId } from "../../../user/domain/UserId"
import { TourTitle } from "../../domain/TourTitle"
import { Command } from "../../../shared/domain/Command"
import { TourDescription } from "../../domain/TourDescription"
import { TourCapacity } from "../../domain/TourCapacity"
import { TourDate } from "../../domain/TourDate"

export default class CreateTourCommand implements Command {
    private userId: UserId
    private tourTitle: TourTitle
    private tourDescription: TourDescription
    private tourDate: TourDate
    private tourCapacity: TourCapacity


    constructor(userId: string, tourTitle:string, tourDescription: string, tourDate: Date, tourCapacity: number) {
        this.userId = UserId.create(userId)
        this.tourTitle = TourTitle.create(tourTitle)
        this.tourDescription = TourDescription.create(tourDescription)
        this.tourDate = TourDate.create(tourDate)
        this.tourCapacity = TourCapacity.create(tourCapacity)
    }

    getUserId(): UserId {
        return this.userId
    }

    getTourTitle(): TourTitle {
        return this.tourTitle
    }

    getTourDescription(): TourDescription{
        return this.tourDescription;
    }

    getTourDate(): TourDate{
        return this.tourDate;
    }

    getTourCapacity(): TourCapacity {
        return this.tourCapacity
    }
}
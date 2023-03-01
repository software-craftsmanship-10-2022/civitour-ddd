export class TourTitle{

    #value: string;

    private constructor(value: string){
        this.#value = value
    }

    public static create(value: string): TourTitle{

        if (value === undefined || value === null || value.length <= 2 || value.length > 60) {
            throw new Error('Title must be greater than 2 chars and less than 60.')
        }
         
        return new TourTitle(value);
    }

    get value(): string{
        return this.#value;
    }
}
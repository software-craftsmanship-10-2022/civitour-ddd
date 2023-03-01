export class UserName{

    #value: string;

    private constructor(value: string){
        this.#value = value
    }

    public static create(value: string): UserName{

        if (value === undefined || value === null || value.length <= 3 || value.length > 100) {
            throw new Error('Name must be greater than 3 chars and less than 100.')
        }
         
        return new UserName(value);
    }

    get value(): string{
        return this.#value;
    }
}
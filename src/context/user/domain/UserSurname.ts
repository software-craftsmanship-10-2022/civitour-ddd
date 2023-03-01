export class UserSurname{

    #value: string;

    private constructor(value: string){
        this.#value = value
    }

    static create(value: string): UserSurname{

        if (value === undefined || value === null || value.length <= 2 || value.length > 100) {
            throw new Error('Surname must be greater than 2 chars and less than 100.')
        }
         
        return new UserSurname(value);
    }

    get value(): string{
        return this.#value;
    }
}
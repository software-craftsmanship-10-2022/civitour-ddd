export class UserPhone{

    #value: string;

    private constructor(value: string){
        this.#value = value
    }

    public static create(value: string): UserPhone{
        const spainPhoneRegex = /^\+34\d{9}$/;
        if(!value.match(spainPhoneRegex)){
            throw new Error('Invalid phone number format')
        }
        return new UserPhone(value);
    }

    get value(): string{
        return this.#value;
    }
}
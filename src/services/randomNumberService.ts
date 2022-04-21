class RandomNumberService {
    public static generateRandomNumber = async () : Promise<number> => {
        //this is a dummy method that will always crash in order to demonstrate an uncontrollable API dependency
        const response = await fetch('')
        const number = await response.json() as number
        return number
    }
}

export default RandomNumberService
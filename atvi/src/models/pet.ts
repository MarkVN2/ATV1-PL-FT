export default class Pet {
    private name: string
    private type: string
    private race: string
    private gender: string

    constructor(name: string, race: string, gender: string, type: string) {
        this.name = name
        this.race = race
        this.gender = gender
        this.type = type
    }

    public get getName(){
        return this.name
    }
    public get getRace(){
        return this.race
    }
    public get getGender(){
        return this.gender
    }
    public get getType(){
        return this.type
    }
    public setName(name: string){
        this.name = name
    }
    public setRace(race: string){
        this.race = race
    }
    public setGender(gender: string){
        this.gender = gender
    }
    public setType(type: string){
        this.type = type
    }
}
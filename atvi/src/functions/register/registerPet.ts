import Entry from "../../io/entry";
import Register from "../register";

export default class RegisterPet extends Register{
    
    public register(): void {
        console.log(`\nCadastro concluído :)\n`);
    }
}
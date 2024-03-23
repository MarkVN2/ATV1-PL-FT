import PromptSync from "prompt-sync";

export default class Entry {
    public getNum(entry : string ) : number {
        let prompt = PromptSync();
        let str_entry  = prompt(entry);
        let num_entry = new Number(str_entry);
        return num_entry.valueOf();
    }
    public getStr(entry : string ) : string {
        let prompt = PromptSync();
        let str_entry  = prompt(entry);
        return str_entry;
    }
}
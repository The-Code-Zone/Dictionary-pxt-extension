//% color=#e6e6fa
//% weight=79
//% icon="\uf240"
//% blockGap=8 block="Dictionary"
//% groups='["Create"]'
namespace Dictionary{
    
    export class Dictionary<Keys, Values> {
        private keys: Keys[]
        private values: Values[]

        constructor(keys: Keys[], values: Values[]) {
            if(this.keys.length === this.values.length){
                this.keys = keys
                this.values = values
            }
            else if(this.keys.length>this.values.length){
                throw console.error("There are Keys without Values")
            }
            else{
                throw console.error("There are Values without Keys")
            }
        }

        public set(key: Keys, value: Values) {
            if (this.keys.indexOf(key) != -1) {
                this.keys.push(key)
                this.values.push(value)
            }
            else {
                throw console.error("This key already exists. Keys must be unique.");
            }
        }

        public get(): [Keys[], Values[]] {
            return [this.keys, this.values]
        }

        public get_keys_list(): Keys[] {
            return this.keys
        }

        public get_values_list(): Values[] {
            return this.values
        }

        public getValue(key: Keys): Values {
            if (this.keys.indexOf(key) != -1) {
                return this.values[this.keys.indexOf(key)]
            }
            else {
                throw console.error("This key does not exist")
            }
        }

        public getKey(value: Values): Keys[] {
            if (this.values.indexOf(value) != -1) {
                let answer: Keys[] = []
                for (let i = 0; i < this.values.length; i++) {
                    if (value === this.values[i]) {
                        answer.push(this.keys[i])
                    }
                }
                return answer
            }
            else {
                throw console.error("This key does not exist")
            }
        }

        public remove(key: Keys, value: Values) {
            if (this.keys.indexOf(key) != -1) {
                if (this.values[this.keys.indexOf(key)] === value) {
                    this.keys.splice(this.keys.indexOf(key), 1)
                    this.values.splice(this.values.indexOf(value), 1)
                }
            }
            else {
                throw console.error("That is not a valid key:value pair")
            }
        }

        public remove_first() {
            this.keys.shift()
            this.values.shift()
        }

        public remove_last() {
            this.keys.pop()
            this.values.pop()
        }

        public toString(): string[] {
            let answer: string[] = []
            for (let i = 0; i < this.keys.length; i++) {
                answer.push(this.keys[i] + ":" + this.values[i])
            }
            return answer
        }

        public entryToString(key: Keys, value: Values): string {
            return key + ":" + value
        }

        public clean(){
            this.keys = []
            this.values = []
        }
    }

    //% block="create Dictionary with keys $list and values $list"
    //% blockId="dictionary_create"
    //% blockSetVariable="dictionary"
    //% group="Create"
    //% weight=100
    export function create(Keys: any[], Values: any[]): Dictionary<any[], any[]>{
        return new Dictionary(Keys, Values);
    }

    export function set(dict: Dictionary<any, any>, Key: any, Value: any){
        dict.set(Key, Value)
    }

}


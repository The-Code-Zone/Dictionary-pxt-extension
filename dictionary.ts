//% color=#EEBB00
//% weight=10
//% icon="\uf240"
//% blockGap=8 block="Dictionary"
//% groups='["Create", "Edit", "Retrieve", "String"]'
namespace Dictionary { 

    export class Dictionary {
        private keys: any[]
        private values: any[]

        constructor(key: any[], value: any[]) {
            this.keys = []
            this.values = []
            if (this.keys.length === this.values.length) {
                this.keys = key
                this.values = value
            }
            else if (this.keys.length > this.values.length) {
                throw console.error("There are Keys without Values")
            }
            else {
                throw console.error("There are Values without Keys")
            }
        }

        public set(key: any, value: any) {
            if (this.keys.indexOf(key) != -1) {
                this.keys.push(key)
                this.values.push(value)
            }
            else {
                throw console.error("This key already exists. Keys must be unique.");
            }
        }

        public get(): [any[], any[]] {
            return [this.keys, this.values]
        }

        public get_keys_list(): any[] {
            return this.keys
        }

        public get_values_list(): any[] {
            return this.values
        }

        public getValue(key: any): any{
            if (this.keys.indexOf(key) != -1) {
                return this.values[this.keys.indexOf(key)]
            }
            else {
                throw console.error("This key does not exist")
            }
        }

        public getKey(value: any): any[] {
            if (this.values.indexOf(value) != -1) {
                let answer: any[] = []
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

        public replaceValue(key: any, newValue: any): void {
            let index = this.keys.indexOf(key);
            if (index != -1) {
                this.values[index] = newValue;
            }
        }

        public replaceKey(key: any, newKey: any): void {
            let index = this.keys.indexOf(key);
            if (index != -1) {
                this.values[index] = newKey;
            }
        }

        public remove(key: any, value: any) {
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

        public entryToString(key: any, value: any): string {
            return key + ":" + value
        }

        public clean() {
            this.keys = []
            this.values = []
        }
    }
    //% block="keys $k and values $v"
    //% blockId="dictionary_create"
    //% blockSetVariable="dictionary"
    //% group="Create"
    //% weight=100
    export function create(k: any[] = [], v: any[] = []): Dictionary {
        return new Dictionary(k, v);
    }

    //% block="$d add key $k and value $v"
    //% blockId="dictionary_set"
    //% group="Edit"
    //% weight=100
    export function set_key_value_pair(d: Dictionary, k: any, v: any) {
        d.set(k, v)
    }

    //% block="$d get value at key $k"
    //% blockId="dictionary_get_value"
    //% group="Retrieve"
    //% weight=100
    export function get_value(d: Dictionary, k: any): any {
        return d.getValue(k)
    }

    //% block="$d get key(s) with the value $v"
    //% blockId="dictionary_get_keys_from_value"
    //% group="Retrieve"
    //% weight=100
    export function get_keys_from_value(d: Dictionary, v: any): any[] {
        return d.getKey(v)
    }

    //% block="%d get values"
    //% blockId="dictionary_get_values_list"
    //% group="Retrieve"
    //% weight=100
    export function get_values_list(d: Dictionary): any[] {
        return d.get_values_list()
    }

    //% block="%d get keys"
    //% blockId="dictionary_get_keys_list"
    //% group="Retrieve"
    //% weight=100
    export function get_keys_list(d: Dictionary): any[] {
        return d.get_keys_list()
    }

    //% block="%d replace %value with %newValue"
    //% blockId="replaceValue"
    //% group="Edit"
    //% weight=100
    export function replaceValue(d: Dictionary, value: any, newValue: any): void {
        d.replaceKey(value, newValue)
    }

    //% block="%d replace key at %value with %key"
    //% blockId="replaceKey"
    //% group="Edit"
    //% weight=100
    export function replaceKey(d: Dictionary, value: any, key: any): void {
        d.replaceKey(value, key)
    }

    //% block="%d remove key, value pair %k %v"
    //% blockId="dictionary_remove"
    //% group="Edit"
    //% weight=100
    export function remove(d: Dictionary, k: any, v: any) {
        d.remove(k, v)
    }

    //% block="get and remove first key, value pair from %d"
    //% blockId="dictionary_get_and_remove_first"
    //% group="Edit"
    //% weight=100
    export function remove_first(d: Dictionary): any {
        return d.remove_first()
    }

    //% block="get and remove last key, value pair from %d"
    //% blockId="dictionary_get_and_remove_last"
    //% group="Edit"
    //% weight=100
    export function remove_last(d: Dictionary): any {
        return d.remove_last()
    }

    //% block="convert %d to string"
    //% blockId="dictionary_to_string"
    //% group="String"
    //% weight=100
    export function toString(d: Dictionary): string[] {
        return d.toString()
    }

    //% block="convert key, value pair $k $v from $d to string"
    //% blockId="dictionary_entry_to_string"
    //% group="String"
    //% weight=100
    export function entryToString(d: Dictionary, k: any, v: any): string {
        return d.entryToString(k, v)
    }

}

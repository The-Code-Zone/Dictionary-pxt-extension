/// <reference no-default-lib="true"/>

interface Dictionary<K, V> {
    
    /**
    * Append a new key, value pair to the dictionary.
    */
    //% help=dictionary/set
    //% shim=Dictionary_::set weight=50
    //% blockId="dictionary_set" block="keys %list| values %list| add key %value| add value %value| to dictionary" blockNamespace="dictionary"
    //% group="Modify"
    set(key: K, value: V): void;

    get(key: K): V;

    delete(key: K): void;

    size(): number;

    clear(): void;

    containsKey(key: K): boolean;

    containsValue(value: V): boolean;

}

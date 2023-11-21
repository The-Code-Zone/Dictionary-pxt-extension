interface Dictionary<K, V> {

    
    set(key: K, value: V): void;

    get(key: K): V;

    delete(key: K): void;

    size(): number;

    clear(): void;

    containsKey(key: K): boolean;

    containsValue(value: V): boolean;

}

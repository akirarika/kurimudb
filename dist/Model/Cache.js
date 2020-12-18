import { BehaviorSubject } from 'rxjs';
export default class Cache {
    constructor(model) {
        this.value = new Map();
        this.model = model;
    }
    all() {
        const result = {};
        for (const [key, value] of this.value.entries())
            result[key] = value.getValue();
        return result;
    }
    get$(key) {
        if (this.value.has(key))
            return this.value.get(key);
        else
            this.value.set(key, new BehaviorSubject(null));
        return this.value.get(key);
    }
    get(key, def = null) {
        let result;
        if (this.value.has(key))
            result = this.value.get(key)?.getValue();
        else
            result = def;
        return result;
    }
    add(key, value) {
        if (this.value.has(key))
            throw new Error(`Key already exists in the object store.`);
        this.value.set(key, new BehaviorSubject(value));
    }
    put(key, value) {
        if (this.value.has(key))
            this.value.get(key)?.next(value);
        else
            this.value.set(key, new BehaviorSubject(value));
    }
    forget(key) {
        this.value.get(key)?.next(void 0);
    }
    has(key) {
        return this.value.has(key);
    }
    count() {
        return this.value.size;
    }
}
//# sourceMappingURL=Cache.js.map
import { globalConfig, runtime } from "../providers";
import { cacheFactory } from "../providers";
import { SubscribeConfigInterface } from "./subscribe-config.interface";
import { SubscribeInterface } from "./subscribe.interface";

let counter = 0;

export class CacheItem {
  value: unknown;
  key: string | number;
  modelName: string;
  subscribers: Map<number, Function>;

  constructor(value: unknown, key: string | number, modelName: string) {
    this.value = value;
    this.key = key;
    this.modelName = modelName;
    this.subscribers = new Map();
  }

  set(value: unknown): void {
    this.value = value;
    this.publish();
  }

  get(): unknown {
    if (undefined !== runtime.readItemDependencies) {
      runtime.readItemDependencies.push(this);
    }
    if (this.modelName in runtime.readModelInternalItemDependencies) {
      for (const id in runtime.readModelInternalItemDependencies[this.modelName]) {
        runtime.readModelInternalItemDependencies[this.modelName][id].push(this);
      }
    }
    return this.value;
  }

  forget(): void {
    this.value = undefined;
  }

  publish() {
    const value = this.value;
    const key = this.key;
    const arr: unknown[] = [];

    if (undefined === value) return;

    this.subscribers.forEach((job) => arr.push(job(value, key)));

    return Promise.all(arr);
  }

  subscribe: SubscribeInterface = (
    closFunc,
    config: SubscribeConfigInterface = {}
  ) => {
    const conf: SubscribeConfigInterface = {
      immediate: true,
      autoUnsubscribe: true,
      ...config,
    };

    this.subscribers.set(++counter, closFunc);
    const id = counter;
    if (conf.immediate) this.publish();

    const unsubscribe = () => this.subscribers.delete(id);
    if (conf.autoUnsubscribe) {
      if (false !== globalConfig.autoUnsubscribe)
        globalConfig.autoUnsubscribe(unsubscribe);
    }
    return unsubscribe;
  };
}

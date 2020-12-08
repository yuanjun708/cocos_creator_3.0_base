// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import { _decorator, Component, Node, AudioClip, resources, sys } from 'cc';
const { ccclass, property } = _decorator;

export namespace BlTools {

    export class AudioManager extends Component {

        public static playMusic(name: string) {
            const path = `audio/music/${name}`;
            resources.load(path, AudioClip, (err, clip) => {
                if (err) {
                    console.warn(err);
                    return;
                }
                clip?.setLoop(true);
                clip?.play();
            });
        }

        public static playSound(name: string) {
            const path = `audio/sound/${name}`;
            resources.load(path, AudioClip, (err, clip) => {
                if (err) {
                    console.warn(err);
                    return;
                }
                clip?.setLoop(false);
                clip?.playOneShot(1);
            });
        }
    }

    interface IEventData {
        func: Function;
        target: any;
    }
    interface IEvent {
        [eventName: string]: IEventData[];
    }
    export class CustomEventListener extends Component {
        public static handle: IEvent = {};

        public static on(eventName: string, cb: Function, target?: any) {
            if (!this.handle[eventName]) {
                this.handle[eventName] = [];
            }
            const data: IEventData = { func: cb, target };
            this.handle[eventName].push(data);
        }

        public static off(eventName: string, cb: Function, target?: any) {
            const list = this.handle[eventName];
            if (!list || list.length <= 0) {
                return;
            }
            for (let i = 0; i < list.length; i++) {
                const event = list[i];
                if (event.func === cb && (!target || target === event.target)) {
                    list.splice(i, 1);
                    break;
                }
            }
        }

        public static dispatchEvent(eventName: string, ...args: any) {
            const list = this.handle[eventName];
            if (!list || list.length <= 0) {
                return;
            }
            for (let i = 0; i < list.length; i++) {
                const event = list[i];
                event.func.apply(event.target, args);
            }
        }
    }

    export class StorageUtil extends Component {

        private static storageMap: Map<string, unknown> = new Map();

        public static dumpStorageMap() {
            const data = [] as any;
            this.storageMap.forEach((v, k) => {
                data.push({ key: k, value: v });
            });
            console.table(data);
        }

        public static clearCache() {
            this.storageMap.clear();
        }

        public static read<T>(key: string, value?: T): T {
            let result = value;
            if (this.storageMap.has(key)) {
                return this.storageMap.get(key) as T;
            }
            const userData = JSON.parse(sys.localStorage.getItem(key));
            if (userData !== null) {
                result = userData;
            }
            this.storageMap.set(key, result);
            return result as T;
        }

        public static write<T>(key: string, value: T) {
            this.storageMap.set(key, value);
            sys.localStorage.setItem(key, JSON.stringify(value || null));
        }

        public static remove(key: string) {
            this.storageMap.delete(key);
            sys.localStorage.removeItem(key);
        }

        public static clear() {
            this.storageMap.clear();
            sys.localStorage.clear();
        }

    }

}

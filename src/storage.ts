/*
* File: storage.ts
* Desc: storage do sth
* File Created: 2019-12-31 14:33:04
* Author: chenghao
* ------
* Copyright 2019 - present, chenghao
*/
import { isJsonString } from './utils';
type TstorageType = 'localStorage' | 'sessionStorage';
class storage {
    static prefix = location.origin + location.pathname;

    static setStorage(storageType: TstorageType, key: string, value: any) {
        key = this.transformKey(key);
        if (typeof value !== 'string') {
            value = JSON.stringify(value);
        }
        window[storageType].setItem(key, value);
    }

    static getStorage(storageType: TstorageType, key: string, withoutParse?: boolean) {
        const value = window[storageType].getItem(this.transformKey(key));
        if (!value) return null;
        if (withoutParse) return value;
        if (isJsonString(value)) return JSON.parse(value);
        return value;
    }

    static removeStorage(storageType: TstorageType, key: string) {
        window[storageType].removeItem(this.transformKey(key));
    }

    static transformKey(key: string) {
        return `${this.prefix}@${key}`;
    }
}

export default storage;

/*
 * File: index.ts
 * Desc: local storage helper
 * File Created: 2019-12-31 13:09:01
 * Author: chenghao
 * ------
 * Copyright 2019 - present, chenghao
 */
import storage from './storage';
class umbrella {
    static config(prefix: string) {
        storage.prefix = prefix;
    }

    static setLocalStorage(key: string, value: any) {
        storage.setStorage('localStorage', key, value);
    }
    static getLocalStorage(key: string, withoutParse?: boolean) {
        return storage.getStorage('localStorage', key, withoutParse);
    }
    static removeLocalStorage(key: string) {
        storage.removeStorage('localStorage', key);
    }

    static setSessionStorage(key: string, value: any) {
        storage.setStorage('sessionStorage', key, value);
    }
    static getSessionStorage(key: string, withoutParse?: boolean) {
        return storage.getStorage('sessionStorage', key, withoutParse);
    }
    static removeSessionStorage(key: string) {
        storage.removeStorage('sessionStorage', key);
    }
}

export default umbrella;

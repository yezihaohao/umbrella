/*
 * File: browserMocks.ts
 * Desc: window.localstorage mock file
 * File Created: 2019-12-31 14:08:48
 * Author: chenghao
 * ------
 * Copyright 2019 - present, chenghao
 */
const storageMock = (function() {
    let store: any = {};
    return {
        getItem: function(key: string) {
            return store[key] || null;
        },
        setItem: function(key: string, value: string) {
            store[key] = value;
        },
        removeItem: function(key: string) {
            delete store[key];
        },
        clear: function() {
            store = {};
        },
        getAll: function() {
            return store;
        }
    };
})();

Object.defineProperties(window, {
    localstorage: {
        value: storageMock,
    },
    sessionStorage: {
        value: storageMock,
    },
});

/*
 * File: index.test.ts
 * Desc: test case
 * File Created: 2019-12-31 14:07:35
 * Author: chenghao
 * ------
 * Copyright 2019 - present, chenghao
 */
import umbrella from '.';
describe('test storage helper set & get', () => {
    beforeEach(() => localStorage.clear());
    afterAll(() => localStorage.clear());

    it('set localStorage', () => {
        umbrella.setLocalStorage('test', 'test');
        const value = umbrella.getLocalStorage('test');
        expect(value).toEqual('test');
    });

    it('set sessionStorage', () => {
        umbrella.setSessionStorage('sessionTest', { name: 'test' });
        const value = umbrella.getSessionStorage('sessionTest');
        expect(value).toEqual({ name: 'test' });

        const valueWithoutParse = umbrella.getSessionStorage('sessionTest', true);
        expect(valueWithoutParse).toEqual(JSON.stringify({ name: 'test' }));
    });
});

describe('test storage helper remove', () => {
    beforeEach(() => {
        umbrella.setLocalStorage('test', 'test');
        umbrella.setSessionStorage('sessionTest', 'test');
    });
    afterAll(() => localStorage.clear());

    it('remove localStorage', () => {
        umbrella.removeLocalStorage('test');
        expect(umbrella.getLocalStorage('test')).toEqual(null);
    });

    it('remove sessionStorage', () => {
        umbrella.removeSessionStorage('sessionTest');
        expect(umbrella.getSessionStorage('sessionTest')).toEqual(null);
    });
});

describe('test storage helper config', () => {
    afterAll(() => localStorage.clear());
    it('confit prefix name', () => {
        umbrella.config('umbrella');
        umbrella.setLocalStorage('test', 'test');
        expect(localStorage.key(0)).toEqual('umbrella@test');
    });
});

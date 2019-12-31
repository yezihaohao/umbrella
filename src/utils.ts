/*
 * File: utils.ts
 * Desc: utils
 * File Created: 2019-12-31 13:30:47
 * Author: chenghao
 * ------
 * Copyright 2019 - present, chenghao
 */
export function isJsonString(str: string) {
    try {
        JSON.parse(str);
        return true;
    } catch (error) {
        return false;
    }
}

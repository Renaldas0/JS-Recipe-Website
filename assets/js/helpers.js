import { async } from 'regenerator-runtime';
import { TIMEOUT_SECONDS } from './config';

const timeout = function (s) {
    return new Promise(function (_, reject) {
        setTimeout(function () {
            reject(new Error(`Request took too long! Timeout after ${s} seconds`));
        }, s * 1000);
    });
};

export async function getJSON(url) {
    try {
        const response = await Promise.race([fetch(url), timeout(TIMEOUT_SECONDS)]);
        const data = await response.json();

        if (!response.ok) throw new Error(`${data.message} (${response.status})`);
        return data;
    } catch (error) {
        throw error;
    };
};
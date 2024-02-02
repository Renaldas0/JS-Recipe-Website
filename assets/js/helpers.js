import { TIMEOUT_SECONDS } from './config.js';

const timeout = function (s) {
    return new Promise(function (_, reject) {
        setTimeout(function () {
            reject(new Error(`Request took too long! Timeout after ${s} seconds`));
        }, s * 1000);
    });
};

export const AJAX = async function (url, uploadData = undefined) {
    try {
        const fetchPro = uploadData ? fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(uploadData),
        }) : fetch(url);

        const response = await Promise.race([fetchPro, timeout(TIMEOUT_SECONDS)]);
        const data = await response.json();

        if (!response.ok) throw new Error(`${data.message} (${response.status})`);
        return data;
    } catch (error) {
        throw error;
    };
}

// export async function getJSON(url) {
//     try {
//         const fetchPro = fetch(url);
//         const response = await Promise.race([fetchPro, timeout(TIMEOUT_SECONDS)]);
//         const data = await response.json();

//         if (!response.ok) throw new Error(`${data.message} (${response.status})`);
//         return data;
//     } catch (error) {
//         throw error;
//     };
// };

// export async function sendJSON(url, uploadData) {
//     try {
//         const fetchPro =

//         const response = await Promise.race([fetchPro, timeout(TIMEOUT_SECONDS)]);
//         const data = await response.json();

//         if (!response.ok) throw new Error(`${data.message} (${response.status})`);
//         return data;
//     } catch (error) {
//         throw error;
//     };
// };
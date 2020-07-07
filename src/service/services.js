import axios from 'axios';

const API = axios.create({
    timeout: 60000
});

/**
 * Do request API and return promise
 * @param {String} url
 * @param {String} httpMethod
 * @param {Object} params
 * @param {Object} header 
 */
export const request = (url, httpMethod, params, header = {}) =>
    new Promise((resolve, reject) => {
        try {
            const configObj = {
                headers: {
                    ...header
                }
            }

            switch (httpMethod.toUpperCase()) {
                // GET
                case 'GET':
                    API.get(url, configObj)
                        .then(response => {
                            resolve(parseResponse(response))
                        })
                        .catch(error => {
                            reject(parseResponse(null, error));
                        });
                    break;

                // POST
                case 'POST':
                    API.post(url, params, configObj)
                        .then(response => resolve(parseResponse(response)))
                        .catch(error => reject(error));
                    break;

                // PUT
                case 'PUT':
                    API.put(url, params, configObj)
                        .then(response => resolve(parseResponse(response)))
                        .catch(error => reject(error));
                    break;

                // DELETE
                case 'DELETE':
                    API.delete(url, params, configObj)
                        .then(response => resolve(parseResponse(response)))
                        .catch(error => reject(error));
                    break;
            }
        } catch (error) {
            reject(error);
        }
    });

/**
 * Get response object
 * @param {Object} response
 * @param {Object} error
 */
const parseResponse = (response, error = null) => {
    if (error !== null) {
        const errorObj = JSON.parse(JSON.stringify(error));
        return { error: true, message: errorObj.message };
    }

    return { status: response.status, response: response.data };
}
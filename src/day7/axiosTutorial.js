import React, { Component } from 'react';
import { View } from 'react-native';

//Import axios library
import axios from 'axios';

class AxiosTutorial extends Component {
    componentDidMount() {
        this.getMoviesFromAPIInstance();
    }

    getMoviesFromAPI() {
        const api = axios.create({
            timeout: 1000,
            baseURL: 'https://reactnative.dev',
            headers: {
                'Accept': 'application/json',
            }
        });
        //Make a request for get movies list
        api.get('/movies.json')
            .then(response => {
                // handle success
                console.log(response);
            })
            .catch(error => {
                // handle error
                console.log(error);
            });
    }

    getMoviesFromAPI() {
        //Make a request for get movies list
        axios.get('https://reactnative.dev/movies.json')
            .then(response => {
                // handle success
                console.log(response);
            })
            .catch(error => {
                // handle error
                console.log(error);
            });
    }

    /**
     * Request with axios config
     */
    doPostMovies() {
        //Make a request for post movies list
        axios({
            method: 'POST', //Request method such as GET, POST, PUT, DELETE
            url: 'https://reactnative.dev/movies',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            data: {
                firstParam: 'your param value',
                secondParam: 'your other param value'
            }
        })
            .then(response => {
                // handle success
                console.log(response);
            })
            .catch(error => {
                // handle error
                console.log(error);
            });
    }

    // Want to use async/await? Add the `async` keyword to your outer function/method.
    async getMoviesFromAPIAsync() {
        try {
            const response = await axios.get('https://reactnative.dev/movies.json');
            // handle success
            console.log(response);
        } catch (error) {
            // handle error
            console.log(error);
        }
    }

    axiosConfig() {
        const config = {
            // `url` is the server URL that will be used for the request
            url: '/movies',

            // `method` is the request method to be used when making the request
            method: 'GET', //default

            // `baseURL` will be prepended to `url` unless `url` is absolute.
            // It can be convenient to set `baseURL` for an instance of axios to pass relative URLs
            // to methods of that instance.
            baseURL: 'https://reactnative.dev',

            // `headers` are custom headers to be sent
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },

            // `params` are the URL parameters to be sent with the request
            // Must be a plain object or a URLSearchParams object
            params: {
                ID: '12345'
            },

            // `data` is the data to be sent as the request body
            // Only applicable for request methods 'PUT', 'POST', and 'PATCH'
            // When no `transformRequest` is set, must be of one of the following types:
            // - string, plain object, ArrayBuffer, ArrayBufferView, URLSearchParams
            // - Browser only: FormData, File, Blob
            // - Node only: Stream, Buffer
            data: {
                firstParam: 'your param value',
                secondParam: 'your other param value'
            },

            // `timeout` specifies the number of milliseconds before the request times out.
            // If the request takes longer than `timeout`, the request will be aborted.
            timeout: 1000, // default is `0` (no timeout)
        }
    }

    axiosSchema() {
        const schema = {
            // `data` is the response that was provided by the server
            data: {},

            // `status` is the HTTP status code from the server response
            status: 200,

            // `statusText` is the HTTP status message from the server response
            statusText: 'OK',

            // `headers` the headers that the server responded with
            // All header names are lower cased
            headers: {},

            // `config` is the config that was provided to `axios` for the request
            config: {},

            // `request` is the request that generated this response
            // It is the last ClientRequest instance in node.js (in redirects)
            // and an XMLHttpRequest instance in the browser
            request: {}
        }
    }

    render() {
        return (
            <View />
        )
    }
}

export default AxiosTutorial;
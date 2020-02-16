//* IMPORTS
/* 
    This file acts as an aggregator for functions related to the auth callbacks
    Each function corresponds to a file in the `callbacks/auth` directory
*/
import handleAuthChanged from './handleAuthChanged';
import handleAuthSuccess from './handleAuthSuccess';

export default {
    handleAuthChanged,
    handleAuthSuccess
}
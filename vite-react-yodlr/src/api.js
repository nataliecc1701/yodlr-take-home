/** Class to handle all yodlr API calls. This class doesn't need to know anything about the front end
 * and the front end doesn't need to know specifics of the API
 */

import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:3000";

class YodlrApi {
    
    /** generic helper function for requests */
    
    static async request(endpoint, data={}, method="get") {
        const url = `${BASE_URL}/${endpoint}`;
        
        // we could set up a "params" object here to move our data into a query string for get requests, but the API we're querying
        // doesn't use query strings
        // similarly, it doesn't check auth, so we're not going to be passing it auth tokens
        
        console.debug("API CALL:", endpoint, data, method);
        try {
            let response = await axios({ url, method, data })
            return response.data;
        } catch (err) {
            console.error("API Error:", err.response);
            let message = err.response.data.error.message;
            throw Array.isArray(message) ? message : [message];
          }
    }
    
    /** get all users */
    
    static async getUsers() {
        let res = await this.request("users/");
        return res;
    }
    
    /** register a user */
    static async registerUser(newUser) {
        let res = await this.request("users/", newUser, "post");
        return res.user;
    }
    
    /** get a specific user by Id */
    
    static async getUser(id) {
        let res = await this.request(`users/${id}`);
        return res;
    }
    
    /** update a user */
    
    static async updateUser(id, data) {
        data.id = id;
        
        let res = await this.request(`users/${id}`, {data}, "put")
        return res;
    }
    
    static async deleteUser(id) {
        let res = await this.request(`users/${id}`, {}, "delete");
        return res;
    }
}

export default YodlrApi;
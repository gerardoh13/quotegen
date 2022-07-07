import axios from "axios";
import * as serviceHelper from './serviceHelpers'

let getQuotes = () => {
    const config = {
        method: "GET",
        url: "https://zenquotes.io/api/quotes/",
        withCredentials: true,
        crossdomain: true,
        headers: { "Content-Type": "application/json" }
        };
    
        return axios(config)
        .then(serviceHelper.onGlobalSuccess)
        .catch(serviceHelper.onGlobalError);
}
export { getQuotes };
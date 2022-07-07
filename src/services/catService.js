import axios from "axios";
import * as serviceHelper from './serviceHelpers'

let getCatPics = () => {
    const config = {
        method: "GET",
        url: "https://api.thecatapi.com/v1/images/search",
        withCredentials: true,
        crossdomain: false,
        headers: {
            "Content-Type": "application/json"
            }
        };
    
        return axios(config)
        .then(serviceHelper.onGlobalSuccess)
        .catch(serviceHelper.onGlobalError);
}
export { getCatPics };
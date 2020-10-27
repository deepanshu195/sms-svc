import axios from "axios";
import responseMessage from "../utils/responseMessage";
async function apiCallExecutor(requestedObject: Object): Promise<any> {
  // try {
    let response = await axios(requestedObject);
    // @ts-ignore
     return  response;
 }
const api = {
  apiCallExecutor,
};
export default api;

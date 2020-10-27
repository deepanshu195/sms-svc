import axios from 'axios';
async function apiCallExecutor(requestedObject: any): Promise<any> {
    const response = await axios(requestedObject);
    return response;
}
const api = {
    apiCallExecutor,
};
export default api;

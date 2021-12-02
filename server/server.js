import Axios from "axios";
import { AsyncStorage } from "react-native";

const baseURL = "http://localhost:7000/api/user";
// const baseURL = "http://192.168.1.5:7000/api/user";
const tokenKey = 'x-access-token';

Axios.defaults.baseURL = baseURL;
Axios.defaults.headers.common['authtoken'] = AsyncStorage.getItem('x-access-token')

export {tokenKey};
export default Axios;
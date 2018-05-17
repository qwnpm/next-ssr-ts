import { ModelProxy } from "modelproxy-ssr";
import http1 from "./configs/http1";
import reactEngine from "./engines/reactEngine";


let state = "dev";
// if (__PROD__) {
//     state = "prd";
// }

// if (__STAG__) {
//     state = "stg";
// }
let proxy = new ModelProxy();
proxy.loadConfig(http1, { engine: "reactEngine", state });// 加载接口配置
proxy.addEngines({ "reactEngine": reactEngine });// 加载引擎
export default proxy;

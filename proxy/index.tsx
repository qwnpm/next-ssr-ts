import { ModelProxy } from "modelproxy";
import http1 from "./configs/http1";
import fetchEngine from "./useconfig/commonfetch";

let state = "dev";
if (__PROD__) {
    state = "prd";
}

if (__STAG__) {
    state = "stg";
}
let proxy = new ModelProxy();
proxy.loadConfig(http1, { engine: "fetch", state });// 加载接口配置
proxy.addEngines({ "fetch": fetchEngine });// 加载引擎
export default proxy;

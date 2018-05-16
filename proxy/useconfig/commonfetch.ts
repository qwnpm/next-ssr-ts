import { IProxyCtx } from "modelproxy/out/models/proxyctx";
import { FetchEngine } from "../engines/fetchEngine";

/**
 * 接口的配置以及初始化
 * 这里有fetch和jsonp的接口转发器
 */
let fetchEngine = new FetchEngine();

/**
 * fetch接口引擎初始化
 */
fetchEngine.init();

// 如果有http错误，则抛出错误
fetchEngine.use(async (ctx: IProxyCtx, next: Function) => {
    if (!ctx.result.ok || ctx.result.status !== 200) {
        throw new Error(ctx.result.statusText);
    }

    ctx.result = await ctx.result.json();

    await next();
});

// 如果有服务器端约定错误，测抛出错误
fetchEngine.use(async (ctx: IProxyCtx, next: Function) => {
    if (ctx.result.code !== undefined && ctx.result.code !== 200) {
        throw new Error(ctx.result.message);
    }
    ctx.result = ctx.result.data;

    await next();
});

export default fetchEngine;
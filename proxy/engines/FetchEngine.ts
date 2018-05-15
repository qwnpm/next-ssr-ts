import { BaseEngine } from "modelproxy";
import { IProxyCtx } from "modelproxy/out/models/proxyctx";
import fetch from 'isomorphic-fetch'; //请求
import { IInterfaceModel } from "modelproxy/out/models/interface";

//超时
const _fetch = (fetchPromise: Promise<any>, timeout: number) => {
    let abortFn;
    let abortPromise = new Promise((resolve, reject) => {
        abortFn = () => {
            reject(new Error(`timeout（${timeout}）`));
        };
    });
    let abortablePromise = Promise.race([
        fetchPromise,
        abortPromise
    ]);

    let timeid = setTimeout(() => {
        abortFn();
    }, timeout);

    abortablePromise.then(() => {
        clearTimeout(timeid);
    }, () => {
        clearTimeout(timeid);
    });

    return abortablePromise;
}


export class FetchEngine extends BaseEngine {
    constructor() {
        super();
        this.init();
    }

    init() {
        this.use(async (ctx: IProxyCtx, next) => {
            let bodyParams = new URLSearchParams();
            let body, headers: any = { "X-Requested-With": "XMLHttpRequest" };
            let searchParams = new URLSearchParams();
            let { timeout = 20000, headers: originHeaders = {}, type = "" } = ctx.executeInfo.settings || {};

            // 处理参数
            if (ctx.executeInfo.params && ctx.executeInfo.params.constructor === Object) {
                Object.keys(ctx.executeInfo.params).forEach((key) => {
                    ctx.executeInfo.params[key] !== undefined && searchParams.append(key, ctx.executeInfo.params[key]);
                });
            }

            // 处理设置
            if (!ctx.executeInfo.settings) {
                headers = Object.assign({}, headers, {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                });
                body = JSON.stringify(ctx.executeInfo.data || {});
            } else {
                switch (type) {
                    case "params":
                        headers = Object.assign({}, {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json'
                        }, headers);
                        body = bodyParams;
                        break;
                    default:
                        headers = Object.assign({}, {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json'
                        }, headers);
                        body = JSON.stringify(ctx.executeInfo.data || {});
                        break;
                }
                headers = Object.assign({}, headers || {}, originHeaders);
            }
            for (let data in ctx.executeInfo.data) {
                //formData.append(data, ctx.executeInfo.data[data]);
                bodyParams.append(data, ctx.executeInfo.data[data]);
            }

            // 发送请求
            ctx.result = await _fetch(fetch(this.getFullPath(ctx.instance as any, ctx.executeInfo) , {
                method: ctx.instance.method as any,
                headers: headers,
                credentials: "same-origin",
                // mode: "cors",
                body: ["GET", "OPTIONS", "HEAD"].indexOf((ctx.instance.method as any).toUpperCase()) === -1 ? body : null
            }), timeout);

            await next();
        });
    }

    /**
     * 调用接口代理方法                                                                                                                                                                                                                                                                      
     * @param instance 接口的信息
     * @param options  调用接口的参数
     */
    async proxy(instance: IInterfaceModel, options: any): Promise<any> {
        const fn = this.callback(() => { });
        const ctx: IProxyCtx = {
            instance: instance,
            executeInfo: options,
        };

        await fn(ctx);

        if (ctx.isError) {
            throw ctx.err;
        }

        return ctx.result;
    }
}
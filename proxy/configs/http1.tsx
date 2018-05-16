var host = "https://jsonplaceholder.typicode.com";

 export default {
    "key": "http1",
    "title": "测试接口数据",
    "state": "uat1",
    "engine": "default",
    "mockDir": "./mocks/",
    "states": {
        "prod": "https://jc-ws-rsv.mmall.com",
        "uat1": "http://jc-ws-rsv.uat1.rs.com",
        "stg": "https://jc-ws-rsv.mklmall.com",
        "dev": host
    },
    "interfaces": [{
        "path": "/posts/{/params}",
        "method": "get",
        "key": "post1",
        "title": "获取资料"
    },{
        "path": "/posts/{/params}/comments",
        "method": "get",
        "key": "post2",
        "title": "获评论"
    }]
}
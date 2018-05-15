var host = "http://jc-ws-rsv.dev.rs.com";

module.exports = {
    "key": "jcgw",
    "title": "测试接口数据",
    "state": "uat1",
    "engine": "default",
    "mockDir": "./mocks/",
    "states": {
        "prod": "https://jc-ws-rsv.mmall.com",
        "uat1": "http://jc-ws-rsv.uat1.rs.com",
        "stg": "https://jc-ws-rsv.mklmall.com",
        "dev": "http://jc-ws-rsv.dev.rs.com"
    },
    "interfaces": [{
        "path": "/booking/add",
        "method": "post",
        "key": "postInvitation",
        "title": "邀约"
    }]

   
}
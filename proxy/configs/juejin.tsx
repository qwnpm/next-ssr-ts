var host = "https://recommender-api-ms.juejin.im/v1";

 export default {
    "key": "juejin",
    "title": "掘金接口数据",
    "state": "uat1",
    "engine": "default",
    "mockDir": "./mocks/",
    "states": {
        "prod": host,
        "uat1": host,
        "stg": host,
        "dev": host
    },
   
    "interfaces": [{
        "path": "/get_recommended_entry",
        "method": "get",
        "key": "getRecommendedEntry",
        "title": "获取列表"
    }]
}
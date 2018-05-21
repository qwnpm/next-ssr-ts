
import proxy from "../../../proxy";
import { compose, setStatic } from "recompose";
import { IProps } from "../constants/recommend";

export const getInitialDate = async()=>{
    let result
    await proxy.executeAll({
        article: proxy.execute.bind(proxy, "http1", "post1",  {params:{id:1}}),
        comments: proxy.execute.bind(proxy, "http1", "post2",  {params:{id:1}}),
    }).then(data=>{
        result = data;
       return proxy.execute("http1","getUserInfo",{params:{id:data.article.userId}});
    }).then(data=>{
        result.user = data
    });

    return result;
}

export const getInitialHoc = compose<IProps, any>(
    setStatic('getInitialProps',  async ({ req }) => {
            let result = await getInitialDate();
            return result;
        }
    )
);
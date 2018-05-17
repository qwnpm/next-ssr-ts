import { compose, withHandlers, lifecycle, setStatic } from "recompose";
import { IProps } from '../constants/developer';
// import fetch from 'isomorphic-unfetch'
// import proxy from "proxy";
import proxy from "../../../proxy";

export const hoc = compose<IProps, any>(
    setStatic('getInitialProps',  async ({ req }) => {
        let result
        console.log("====getInitialProps =====")
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
    ),
    withHandlers({
        
    }),
    lifecycle({
        componentDidMount:function(){
           
        }
    })
);
import { compose, withHandlers, lifecycle} from "recompose";
import { IProps } from '../constants/home';
import { getInitialHoc } from "./getInitial";

export const hoc = compose<IProps, any>(getInitialHoc,
    withHandlers({
        
    }),
    lifecycle({
        componentDidMount:function(){
           
        }
    })
);
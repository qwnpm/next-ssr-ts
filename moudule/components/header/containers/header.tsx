import { compose, withHandlers, lifecycle } from "recompose";
import { IProps } from '../constants/header';

export const hoc = compose<IProps, any>(
    withHandlers({
        
    }),
    lifecycle({
        componentDidMount:function(){
           
        }
    })
);
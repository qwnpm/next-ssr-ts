import { compose,setStatic } from "recompose";
import { IProps } from '../constants/home';
import { getInitialDate as recommendInit} from "../../recommend/containers/getInitial";

export const getInitialHoc = compose<IProps, any>(
    setStatic('getInitialProps',  async ({ req }) => {
            let result = await recommendInit();
            return result;
        }
    )
);
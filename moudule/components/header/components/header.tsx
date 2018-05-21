import * as React from 'react';
import { hoc } from '../containers/header';
import { IProps } from '../constants/header';
import Link from 'next/link';
import { menuConfig } from '../constants/config';
import css from '../styles/header.scss'

export class HeaderComponent extends React.Component<IProps, any> {
    render() {
        return (
               <div className={css.uiHeader}>
                    {/* <div className="logo">
                        <span><IconComments type="logo" width={157.7} height={50}/></span>
                    </div> */}
                    <ul>
                        {menuConfig.map(menu=>{
                            return  <Link key={menu.url} as={`${menu.url}`} href={`${menu.serverUrl}`}>
                                        <span className={css.title}>{menu.title}</span>
                                    </Link>
                        })
                        }
                    </ul>
                    {/* <div className="contact">
                        <span><IconComments type="phone" width={20} height={20}/></span>
                        <h6>021-6025 6795</h6>
                    </div> */}
              
                </div>
        );
    }
}

export const HeaderComponentWithHoc = hoc(HeaderComponent);
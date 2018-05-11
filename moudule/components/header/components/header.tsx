import * as React from 'react';
import { hoc } from '../containers/header';
import { IProps } from '../constants/header';
import Link from 'next/link'
import { menuConfig } from '../config';
  
export class HeaderComponent extends React.Component<IProps, any> {
    render() {
        return (
            <ul>
                {menuConfig.map((menu) => (
                <li key={menu.url}>
                    <Link as={`${menu.url}`} href={`${menu.serverUrl}`}>
                        <a>{menu.title}</a>
                    </Link>
                </li>
                ))}
            </ul>
        );
    }
}

export const HeaderComponentWithHoc = hoc(HeaderComponent);
import * as React from 'react';
import { Svg } from '../svg/Svg';

export interface IBreadcrumbLinkProps {
  name: string;
  link?: string;
  onClick?: (props: IBreadcrumbLinkProps) => boolean;  // return false to cancel the href event
}

export class BreadcrumbLink extends React.Component<IBreadcrumbLinkProps, {}> {

  private onClick(e: React.MouseEvent<HTMLAnchorElement>): boolean {
    if (this.props.onClick && !this.props.onClick(this.props)) {
      e.stopPropagation();
      e.nativeEvent.stopImmediatePropagation();
      e.preventDefault();
      return false;
    }
    return true;
  }

  render() {
    return (<li className='breadcrumb-title'>
      <a className='link' href={this.props.link} onClick={(e: React.MouseEvent<HTMLAnchorElement>) => this.onClick(e)}>{this.props.name}</a>
      <Svg svgName='arrow-right-rounded' svgClass='breadcrumb-arrow' />
    </li>);
  }
}

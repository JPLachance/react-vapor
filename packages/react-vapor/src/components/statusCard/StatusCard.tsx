import classNames from 'classnames';
import * as React from 'react';

import {Loading} from '../loading/Loading';
import {Svg} from '../svg/Svg';

export interface StatusCardProps {
    title: string;
    className?: string;
    icon?: string;
    simple?: boolean;
    loading?: boolean;
}

export class StatusCard extends React.Component<StatusCardProps> {
    render() {
        const cardClasses: string = classNames('status-card px3 flex flex-center', this.props.className, {
            simple: this.props.simple,
            loading: this.props.loading,
        });

        return <div className={cardClasses}>{this.getContent()}</div>;
    }

    private getContent(): JSX.Element {
        return this.props.loading ? (
            <Loading key="loading" className="center-align" />
        ) : (
            <>
                {this.props.icon && (
                    <Svg key="icon" className="py3 mr3" svgName={this.props.icon} svgClass="icon mod-2x" />
                )}
                <div key="status" className="py2">
                    <h3>{this.props.title}</h3>
                    {this.props.children && <div className="mt1">{this.props.children}</div>}
                </div>
            </>
        );
    }
}

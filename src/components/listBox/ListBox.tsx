import * as classNames from 'classnames';
import * as React from 'react';
import * as _ from 'underscore';
import {IItemBoxProps, ItemBox} from '../itemBox/ItemBox';

export interface IListBoxProps {
    items: IItemBoxProps[];
    onOptionClick?: (option: IItemBoxProps) => void;
    noResultItem?: IItemBoxProps;
    classes?: string[];
}

export class ListBox extends React.Component<IListBoxProps> {

    static defaultProps: Partial<IListBoxProps> = {
        noResultItem: {
            value: 'No Items',
        },
    };

    private getClasses(): string {
        return classNames('list-box', this.props.classes);
    }

    protected getItems(): JSX.Element[] | JSX.Element {
        const items = _.chain(this.props.items)
            .map((item: IItemBoxProps) => <ItemBox key={item.value} {..._.extend(item, {onOptionClick: this.props.onOptionClick})} />)
            .value();

        return items.length
            ? items
            : <ItemBox {..._.extend(this.props.noResultItem, {classes: ['multi-line']})} />;
    }

    render() {
        return (
            <ul className={this.getClasses()}>
                {this.getItems()}
            </ul>
        );
    }
}

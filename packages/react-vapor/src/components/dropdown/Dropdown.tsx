import classNames from 'classnames';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

export interface IDropdownOwnProps extends React.ClassAttributes<Dropdown> {
    id?: string;
    toggleContent: JSX.Element[];
    dropdownItems: JSX.Element[];
    className?: string;
    disabled?: boolean;
}

export interface IDropdownStateProps {
    isOpened?: boolean;
}

export interface IDropdownDispatchProps {
    onRender?: () => void;
    onDestroy?: () => void;
    onClick?: () => void;
    onDocumentClick?: () => void;
}

export interface IDropdownProps extends IDropdownOwnProps, IDropdownStateProps, IDropdownDispatchProps {}

export class Dropdown extends React.Component<IDropdownProps, any> {
    private dropdown: HTMLDivElement;

    private handleClick = () => {
        if (!this.props.disabled) {
            this.props.onClick?.();
        }
    };

    private handleDocumentClick = (e: MouseEvent) => {
        if (this.props.isOpened) {
            const facetSearch: Element | Text = ReactDOM.findDOMNode(this.dropdown);

            if (!facetSearch.contains(e.target as Node)) {
                this.props.onDocumentClick();
            }
        }
    };

    componentDidMount() {
        if (this.props.onRender) {
            this.props.onRender();
        }

        if (this.props.onDocumentClick) {
            document.addEventListener('click', this.handleDocumentClick);
        }
    }

    componentWillUnmount() {
        if (this.props.onDocumentClick) {
            document.removeEventListener('click', this.handleDocumentClick);
        }

        if (this.props.onDestroy) {
            this.props.onDestroy();
        }
    }

    render() {
        const dropdownClasses = classNames(
            'dropdown',
            {
                open: this.props.isOpened,
                'cursor-default': this.props.disabled,
            },
            this.props.className
        );

        return (
            <div className={dropdownClasses} ref={(dropdown: HTMLDivElement) => (this.dropdown = dropdown)}>
                <span
                    className={classNames('dropdown-toggle inline-flex flex-center', {
                        'disabled transparency-4 cursor-default': this.props.disabled,
                    })}
                    onClick={() => this.handleClick()}
                >
                    {this.props.toggleContent}
                </span>
                <ul className="dropdown-menu normal-height">{this.props.dropdownItems}</ul>
            </div>
        );
    }
}

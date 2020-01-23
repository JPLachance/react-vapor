(window.webpackJsonp=window.webpackJsonp||[]).push([[109],{1204:function(r,o,n){"use strict";n.r(o),o.default="import * as classNames from 'classnames';\r\nimport * as React from 'react';\r\nimport * as _ from 'underscore';\r\n\r\nimport {DropPodPosition} from '../drop/DomPositionCalculator';\r\nimport {Drop, IDropOwnProps} from '../drop/Drop';\r\nimport {IItemBoxProps} from '../itemBox/ItemBox';\r\nimport {ListBox} from '../listBox/ListBox';\r\nimport {Svg} from '../svg/Svg';\r\nimport {actionableItemContainer, actionableItemContent, actionableItemDots} from './styles/ActionableItem.scss';\r\n\r\nexport interface IActionableItemProps {\r\n    id: string;\r\n    onItemClick?: (e?: React.MouseEvent<HTMLDivElement>) => any;\r\n    actions?: IItemBoxProps[];\r\n    containerClassName?: string;\r\n    dropProps?: Partial<IDropOwnProps>;\r\n}\r\n\r\nexport class ActionableItem extends React.Component<IActionableItemProps & React.HTMLAttributes<HTMLDivElement>> {\r\n    static defaultProps: Partial<IActionableItemProps> = {\r\n        actions: [],\r\n    };\r\n\r\n    render() {\r\n        return (\r\n            <div {..._.omit(this.props, 'actions', 'onItemClick', 'dropProps')}>\r\n                <div\r\n                    className={classNames(\r\n                        {'cursor-pointer': !!this.props.onItemClick},\r\n                        'actionable-item-content inline-block text-medium-blue border-color-medium-grey mod-border bg-pure-white',\r\n                        actionableItemContent,\r\n                        actionableItemContainer,\r\n                        this.props.containerClassName\r\n                    )}\r\n                    onClick={(e: React.MouseEvent<HTMLDivElement>) => this.props.onItemClick?.(e)}\r\n                >\r\n                    {this.props.children}\r\n                </div>\r\n                {this.props.actions && this.props.actions.length ? (\r\n                    <Drop\r\n                        id={this.props.id}\r\n                        positions={[DropPodPosition.bottom, DropPodPosition.top]}\r\n                        buttonContainerProps={{className: 'inline-block'}}\r\n                        parentSelector={'body'}\r\n                        renderOpenButton={(onClick: () => void) => (\r\n                            <div\r\n                                onClick={onClick}\r\n                                className={classNames(\r\n                                    'actionable-item-dots cursor-pointer inline-block mod-border-top mod-border-right border-color-medium-grey mod-border-bottom bg-pure-white',\r\n                                    actionableItemDots,\r\n                                    actionableItemContainer\r\n                                )}\r\n                            >\r\n                                <Svg svgName=\"more-append\" svgClass=\"icon mod-12 fill-medium-blue\" />\r\n                            </div>\r\n                        )}\r\n                        {...(this.props.dropProps || {})}\r\n                    >\r\n                        <ListBox items={this.props.actions} />\r\n                    </Drop>\r\n                ) : null}\r\n            </div>\r\n        );\r\n    }\r\n}\r\n"}}]);
//# sourceMappingURL=109.bundle.js.map
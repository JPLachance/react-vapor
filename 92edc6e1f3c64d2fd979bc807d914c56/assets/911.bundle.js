(window.webpackJsonp=window.webpackJsonp||[]).push([[911],{1997:function(n,t,r){"use strict";r.r(t),t.default="import * as React from 'react';\r\nimport * as _ from 'underscore';\r\n\r\nimport {closeModal, IModalActionPayload} from '../../components/modal/ModalActions';\r\nimport {IReduxAction, ReduxConnect} from '../../utils/ReduxUtils';\r\nimport {IWithDirtyProps, withDirty} from '../withDirty/withDirty';\r\nimport {PreventNavigationPrompt} from './PreventNavigationPrompt';\r\n\r\nexport interface IWithPreventNavigationConfig {\r\n    id: string;\r\n    title?: string;\r\n    content?: React.ReactNode;\r\n    exit?: string;\r\n    stay?: string;\r\n}\r\n\r\nexport interface IWithPreventNavigationInjectedProps extends IWithDirtyProps {\r\n    validateShouldNavigate: (isDirty: boolean) => boolean;\r\n}\r\n\r\nexport interface IWithPreventNavigationDispatchProps {\r\n    closeModal: (id: string) => void;\r\n}\r\n\r\nexport interface IWithPreventNavigationState {\r\n    showPrevent: boolean;\r\n}\r\n\r\nexport const preventNavigationDefaultConfig: Partial<IWithPreventNavigationConfig> = {\r\n    title: 'Unsaved Changes',\r\n    content: 'Are you sure you want to leave this page without saving? All unsaved changes will be lost.',\r\n    exit: 'Exit without applying changes',\r\n    stay: 'Cancel',\r\n};\r\n\r\nexport const modalWithPreventNavigation = <T, R = any>(config: IWithPreventNavigationConfig) => (\r\n    Component: React.ComponentClass<T, R>\r\n): React.ComponentClass<T & Partial<IWithPreventNavigationInjectedProps>, R> => {\r\n    const mapDispatchToProps = (\r\n        dispatch: (action: IReduxAction<IModalActionPayload>) => void\r\n    ): IWithPreventNavigationDispatchProps => ({\r\n        closeModal: (id: string) => dispatch(closeModal(id)),\r\n    });\r\n\r\n    @ReduxConnect(undefined, mapDispatchToProps)\r\n    class ModalWithPreventNavigation extends React.PureComponent<\r\n        IWithPreventNavigationDispatchProps,\r\n        IWithPreventNavigationState\r\n    > {\r\n        private ComponentWithDirty: React.ComponentClass<\r\n            IWithDirtyProps & T & Partial<IWithPreventNavigationInjectedProps>\r\n        >;\r\n\r\n        constructor(props: IWithPreventNavigationDispatchProps) {\r\n            super(props);\r\n            this.state = {\r\n                showPrevent: false,\r\n            };\r\n\r\n            const {title, content, exit, stay} = _.defaults(config, preventNavigationDefaultConfig);\r\n            this.ComponentWithDirty = withDirty<T & Partial<IWithPreventNavigationInjectedProps>>({\r\n                id: config.id,\r\n                showDirty: (isDirty: boolean) => {\r\n                    return (\r\n                        isDirty && (\r\n                            <PreventNavigationPrompt\r\n                                id={`prevent-navigation-${config.id}`}\r\n                                isOpen={this.state.showPrevent}\r\n                                title={title}\r\n                                onStay={() => this.setState({showPrevent: false})}\r\n                                onClose={() => {\r\n                                    this.setState({showPrevent: false});\r\n                                    this.props.closeModal(config.id);\r\n                                }}\r\n                                exit={exit}\r\n                                stay={stay}\r\n                                content={content}\r\n                            />\r\n                        )\r\n                    );\r\n                },\r\n            })(Component as any);\r\n        }\r\n\r\n        render() {\r\n            const newProps = {\r\n                ..._.omit(this.props, 'closeModal'),\r\n                validateShouldNavigate: (isDirty: boolean) => {\r\n                    if (isDirty) {\r\n                        this.setState({showPrevent: true});\r\n                        return false;\r\n                    }\r\n                    return true;\r\n                },\r\n            };\r\n            return <this.ComponentWithDirty {...newProps}>{this.props.children}</this.ComponentWithDirty>;\r\n        }\r\n    }\r\n\r\n    return ModalWithPreventNavigation as any;\r\n};\r\n"}}]);
//# sourceMappingURL=911.bundle.js.map
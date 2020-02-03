(window.webpackJsonp=window.webpackJsonp||[]).push([[659],{1762:function(t,n,e){"use strict";e.r(n),n.default="import * as React from 'react';\nimport {connect} from 'react-redux';\nimport {Defaults} from '../../Defaults';\nimport {IReactVaporState} from '../../ReactVapor';\nimport {IDispatch} from '../../utils/ReduxUtils';\nimport {RefreshCallBackActions} from './RefeshCallbackActions';\nimport {RefreshStatus, RefreshStatusSelectors} from './RefreshCallbackReducer';\n\nexport interface IRefreshCallbackOwnProps {\n    id: string;\n    delay?: number;\n    renderCount?: (count: number) => React.ReactNode;\n    callback: (start: () => void) => void;\n}\n\nexport interface IRefreshCallbackState {\n    count: number;\n}\n\nconst mapStateToProps = (state: IReactVaporState, ownProps: IRefreshCallbackOwnProps) => ({\n    status: RefreshStatusSelectors.getRefreshStatus(state, {id: ownProps.id}),\n});\n\nconst mapDispatchToProps = (dispatch: IDispatch, ownProps: IRefreshCallbackOwnProps) => ({\n    start: () => dispatch(RefreshCallBackActions.start(ownProps.id)),\n    stop: () => dispatch(RefreshCallBackActions.stop(ownProps.id)),\n    inProgress: () => dispatch(RefreshCallBackActions.inProgress(ownProps.id)),\n});\n\nexport type IRefreshCallbackProps = IRefreshCallbackOwnProps &\n    ReturnType<typeof mapStateToProps> &\n    ReturnType<typeof mapDispatchToProps>;\n\nclass RefreshCallbackDisconnected extends React.PureComponent<IRefreshCallbackProps, IRefreshCallbackState> {\n    static defaultProps: Partial<IRefreshCallbackProps> = {\n        delay: 10,\n        renderCount: (count: number) => <span>Auto refresh in {count} seconds</span>,\n    };\n\n    private activeInterval: number;\n\n    state = {\n        count: this.props.delay,\n    };\n\n    get isInProgress() {\n        return this.state.count === 0 && this.props.status === RefreshStatus.inProgress;\n    }\n\n    get isStopped() {\n        return this.props.status === RefreshStatus.stopped;\n    }\n\n    get isStarted() {\n        return this.props.status === RefreshStatus.started;\n    }\n\n    private stopInterval() {\n        clearInterval(this.activeInterval);\n    }\n\n    private startInterval() {\n        this.activeInterval = window.setInterval(() => {\n            this.setState((prevState: IRefreshCallbackState) => ({\n                count: prevState.count - 1,\n            }));\n        }, Defaults.REFRESH_CALLBACK_INTERVAL_MS);\n        this.props.inProgress();\n    }\n\n    componentDidMount() {\n        this.startInterval();\n    }\n\n    componentDidUpdate(prevProps: Readonly<IRefreshCallbackProps>, prevState: Readonly<IRefreshCallbackState>) {\n        if (this.isStarted) {\n            this.stopInterval();\n            this.setState({\n                count: this.props.delay,\n            });\n            this.startInterval();\n        } else if (this.isStopped) {\n            this.stopInterval();\n        }\n    }\n\n    componentWillUnmount() {\n        this.stopInterval();\n    }\n\n    render() {\n        if (this.isInProgress) {\n            this.stopInterval();\n            this.props.stop();\n            this.props.callback?.(this.props.start);\n        }\n\n        return this.props.renderCount(this.state.count);\n    }\n}\n\nexport const RefreshCallback = connect(mapStateToProps, mapDispatchToProps)(RefreshCallbackDisconnected);\n"}}]);
//# sourceMappingURL=659.bundle.js.map
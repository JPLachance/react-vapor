(window.webpackJsonp=window.webpackJsonp||[]).push([[346],{1441:function(n,r,o){"use strict";o.r(r),r.default='import * as React from \'react\';\r\nimport * as _ from \'underscore\';\r\n\r\nimport {IDispatch, ReduxConnect} from \'../../../utils/ReduxUtils\';\r\nimport {UUID} from \'../../../utils/UUID\';\r\nimport {IDropdownOption} from \'../DropdownSearch\';\r\nimport {updateOptionsDropdownSearch} from \'../DropdownSearchActions\';\r\nimport {DropdownSearchConnected} from \'../DropdownSearchConnected\';\r\nimport {MultiSelectDropdownSearchConnected} from \'../MultiSelectDropdownSearch/MultiSelectDropdownSearchConnected\';\r\n\r\ninterface DropdownSearchExamplesProps {\r\n    onOptionsChanged?: (id: string, options: IDropdownOption[]) => void;\r\n}\r\n\r\nconst maxPage: number = 500; // Change this for the max number of elements in the infinite scroll example (page * 10 element)\r\n\r\nconst mapStateToProps = () => ({});\r\n\r\nconst mapDispatchToProps = (dispatch: IDispatch): DropdownSearchExamplesProps => ({\r\n    onOptionsChanged: (id: string, options: IDropdownOption[]) => dispatch(updateOptionsDropdownSearch(id, options)),\r\n});\r\n\r\n@ReduxConnect(mapStateToProps, mapDispatchToProps)\r\nexport class DropdownSearchExamples extends React.Component<DropdownSearchExamplesProps, {}> {\r\n    static deprecated = true;\r\n\r\n    private ids: string[] = [];\r\n    private optionsPage: number = 1;\r\n    private options: IDropdownOption[];\r\n\r\n    componentWillMount() {\r\n        // Generate ids ONCE for the components below\r\n        for (let i = 0; i < 15; i++) {\r\n            this.ids[i] = UUID.generate();\r\n        }\r\n\r\n        this.options = [\r\n            {value: \'Option 1\', displayValue: \'Option 1\', hidden: false},\r\n            {value: \'Option 2\', displayValue: \'Option 2\'},\r\n            {value: \'Option 3\', displayValue: \'Option 3\'},\r\n            {value: \'Option 4\', displayValue: \'Option 4\'},\r\n            {value: \'Option 5\', displayValue: \'Option 5\'},\r\n            {value: \'Option 6\', displayValue: \'Option 6\'},\r\n            {value: \'Option 7\', displayValue: \'Option 7\'},\r\n            {value: \'Option 8\', displayValue: \'Option 8\'},\r\n            {value: \'Option 9\', displayValue: \'Option 9\'},\r\n            {value: \'Option 10\', displayValue: \'Option 10\'},\r\n        ];\r\n    }\r\n\r\n    render() {\r\n        const defaultOptions = {\r\n            defaultOptions: [...this.options],\r\n        };\r\n\r\n        const customOptions = {\r\n            defaultOptions: [\r\n                {\r\n                    value: \'test 1\',\r\n                    displayValue: \'test 1\',\r\n                    prefix: \'Prefix\',\r\n                    svg: {svgName: \'access-private\', svgClass: \'icon fill-blue\'},\r\n                },\r\n                {value: \'test 2\', prefix: \'Prefix 2\', svg: {svgName: \'access-secured\', svgClass: \'icon fill-blue\'}},\r\n            ],\r\n            defaultSelectedOption: {\r\n                value: \'test 1\',\r\n                displayValue: \'test 1\',\r\n                prefix: \'Prefix\',\r\n                svg: {svgName: \'access-private\', svgClass: \'icon fill-blue\'},\r\n            },\r\n        };\r\n\r\n        const manyOptions = {\r\n            defaultOptions: _.times(5000, (n: number) => {\r\n                return {\r\n                    displayValue: `Test ${n}`,\r\n                    value: `Test ${n}`,\r\n                };\r\n            }),\r\n        };\r\n\r\n        return (\r\n            <div className="mt2">\r\n                <div className="form-group">\r\n                    <label className="form-control-label">Multiselect Dropdown</label>\r\n                    <div className="form-control">\r\n                        <MultiSelectDropdownSearchConnected\r\n                            {...defaultOptions}\r\n                            id={this.ids[0]}\r\n                            deselectAllTooltipText="Unselect all"\r\n                            filterPlaceholder="Select options"\r\n                        />\r\n                    </div>\r\n                </div>\r\n                <div className="form-group">\r\n                    <label className="form-control-label">Default Dropdown</label>\r\n                    <div className="form-control">\r\n                        <DropdownSearchConnected {...defaultOptions} id={this.ids[1]} />\r\n                    </div>\r\n                </div>\r\n                <div className="form-group">\r\n                    <label className="form-control-label">Default Dropdown with appends and disabled options</label>\r\n                    <div className="form-control">\r\n                        <DropdownSearchConnected\r\n                            id={this.ids[2]}\r\n                            defaultOptions={defaultOptions.defaultOptions.map((opt, i) => ({\r\n                                ...opt,\r\n                                append: i % 2 ? \'APP\' : undefined,\r\n                                disabled: i < 2,\r\n                                disabledTooltip: {title: \'i am disabled\', placement: \'top\'},\r\n                            }))}\r\n                            maxWidth="300px"\r\n                        />\r\n                    </div>\r\n                </div>\r\n                <div className="form-group">\r\n                    <label className="form-control-label">Default Dropdown with single custom option support</label>\r\n                    <div className="form-control">\r\n                        <DropdownSearchConnected\r\n                            {...defaultOptions}\r\n                            id={this.ids[3]}\r\n                            supportSingleCustomOption\r\n                            noResultText="Press enter or tab to select the above value, or remove it to display all options."\r\n                        />\r\n                    </div>\r\n                </div>\r\n                <div className="form-group">\r\n                    <label className="form-control-label">Dropdown with default selected option</label>\r\n                    <div className="form-control">\r\n                        <DropdownSearchConnected\r\n                            {...defaultOptions}\r\n                            id={this.ids[4]}\r\n                            defaultSelectedOption={{value: \'Option 1\'}}\r\n                        />\r\n                    </div>\r\n                </div>\r\n                <div className="form-group">\r\n                    <label className="form-control-label">Dropdown with custom default selected option</label>\r\n                    <div className="form-control">\r\n                        <DropdownSearchConnected\r\n                            {...defaultOptions}\r\n                            id={this.ids[5]}\r\n                            defaultSelectedOption={{value: \'Custom default selected option\'}}\r\n                        />\r\n                    </div>\r\n                </div>\r\n                <div className="form-group">\r\n                    <label className="form-control-label">Dropdown with 5 000 options</label>\r\n                    <div className="form-control">\r\n                        <DropdownSearchConnected {...manyOptions} id={this.ids[6]} />\r\n                    </div>\r\n                </div>\r\n                <div className="form-group">\r\n                    <label className="form-control-label">Dropdown with max width 350px</label>\r\n                    <div className="form-control">\r\n                        <DropdownSearchConnected {...defaultOptions} maxWidth="350px" id={this.ids[7]} />\r\n                    </div>\r\n                </div>\r\n                <div className="form-group">\r\n                    <label className="form-control-label">Dropdown with filter placeholder</label>\r\n                    <div className="form-control">\r\n                        <DropdownSearchConnected\r\n                            {...defaultOptions}\r\n                            filterPlaceholder="Filter placeholder test"\r\n                            id={this.ids[8]}\r\n                        />\r\n                    </div>\r\n                </div>\r\n                <div className="form-group">\r\n                    <label className="form-control-label">Dropdown with fixed width 500px</label>\r\n                    <div className="form-control">\r\n                        <DropdownSearchConnected {...defaultOptions} width="500px" id={this.ids[9]} />\r\n                    </div>\r\n                </div>\r\n                <div className="form-group">\r\n                    <label className="form-control-label">Dropdown with highlight on filter search</label>\r\n                    <div className="form-control">\r\n                        <DropdownSearchConnected {...defaultOptions} highlightAllFilterResult id={this.ids[10]} />\r\n                    </div>\r\n                </div>\r\n                <div className="form-group">\r\n                    <label className="form-control-label">Dropdown with custom option</label>\r\n                    <div className="form-control">\r\n                        <DropdownSearchConnected {...customOptions} id={this.ids[11]} />\r\n                    </div>\r\n                </div>\r\n                <div className="form-group">\r\n                    <label className="form-control-label">Dropdown disabled</label>\r\n                    <div className="form-control">\r\n                        <DropdownSearchConnected {...defaultOptions} isDisabled id={this.ids[12]} />\r\n                    </div>\r\n                </div>\r\n                <div className="form-group">\r\n                    <label className="form-control-label">Dropdown with an infinite scroll</label>\r\n                    <div className="form-control">\r\n                        <DropdownSearchConnected\r\n                            {...defaultOptions}\r\n                            defaultOptions={this.options}\r\n                            id={this.ids[13]}\r\n                            infiniteScroll={{\r\n                                next: () => {\r\n                                    this.optionsPage++;\r\n                                    this.getNewOptions();\r\n                                },\r\n                                dataLength: 0, // Needed to satisfy interface but will overwritten (because of the way we pass options)\r\n                                hasMore: true, // Also needed to satisfy the interface, but will be overwritten because the dropdown currently has a hard time changing props\r\n                                endMessage: (\r\n                                    <div className="option-wrapper">\r\n                                        <span className="dropdown-option">No more items to show</span>\r\n                                    </div>\r\n                                ),\r\n                                loader: (\r\n                                    <div className="option-wrapper">\r\n                                        <span className="dropdown-option">Loading more items...</span>\r\n                                    </div>\r\n                                ),\r\n                            }}\r\n                            hasMoreItems={() => this.optionsPage < maxPage - 1} // Used to overwrite the hasMore prop for the infinite scroll\r\n                            customFiltering={(filterText: string) => this.filter(filterText)}\r\n                        />\r\n                    </div>\r\n                </div>\r\n                <div className="form-group">\r\n                    <label className="form-control-label">\r\n                        Dropdown with an infinite scroll & filters on all options\r\n                    </label>\r\n                    <div className="form-control">\r\n                        <DropdownSearchConnected\r\n                            {...manyOptions}\r\n                            autoInfiniteScroll={{\r\n                                optionsPerPage: 10,\r\n                                endMessage: (\r\n                                    <div className="option-wrapper">\r\n                                        <span className="dropdown-option">No more items to show</span>\r\n                                    </div>\r\n                                ),\r\n                                loader: (\r\n                                    <div className="option-wrapper">\r\n                                        <span className="dropdown-option">Loading more items...</span>\r\n                                    </div>\r\n                                ),\r\n                            }}\r\n                            id={this.ids[14]}\r\n                        />\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        );\r\n    }\r\n\r\n    private getNewOptions() {\r\n        if (this.optionsPage < maxPage) {\r\n            _.times(10, (n: number) => {\r\n                const optionNumber: number = n + this.optionsPage * 10;\r\n                this.options.push({\r\n                    displayValue: `Option ${optionNumber}`,\r\n                    value: `Option ${optionNumber}`,\r\n                });\r\n            });\r\n            this.props.onOptionsChanged(this.ids[13], this.options);\r\n        }\r\n    }\r\n\r\n    private filter(filterText: string) {\r\n        this.props.onOptionsChanged(this.ids[13], [\r\n            {\r\n                displayValue: `Custom option return by filtering`,\r\n                value: `Custom option`,\r\n            },\r\n            {\r\n                displayValue: `Custom option ${filterText}`,\r\n                value: `Custom option2`,\r\n            },\r\n        ]);\r\n    }\r\n}\r\n'}}]);
//# sourceMappingURL=346.bundle.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[671],{1761:function(e,r,n){"use strict";n.r(r),r.default="import * as React from 'react';\r\nimport {connect} from 'react-redux';\r\nimport * as _ from 'underscore';\r\n\r\nimport {IReactVaporExampleState} from '../../../../docs/Reducers';\r\nimport {withServerSideProcessing} from '../../../hoc/withServerSideProcessing/withServerSideProcessing';\r\nimport {FilterBoxSelectors} from '../../filterBox/FilterBoxSelectors';\r\nimport {IItemBoxProps} from '../../itemBox/ItemBox';\r\nimport {selectWithFilter} from '../hoc/SelectWithFilter';\r\nimport {selectWithInfiniteScroll, SelectWithInfiniteScrollProps} from '../hoc/SelectWithInfiniteScroll';\r\nimport {ISingleSelectOwnProps, SingleSelectConnected} from '../SingleSelectConnected';\r\n\r\nconst PER_PAGE = 10;\r\nconst IMG_SIZE = 50;\r\n\r\ninterface PhotoProps {\r\n    albumId: string;\r\n    id: string;\r\n    title: string;\r\n    url: string;\r\n    thumbnailUrl: string;\r\n}\r\n\r\nconst clean = <T extends object>(o: T) => _(o).pick(_.identity);\r\n\r\nfunction usePhotosAPIMock(): [any[], number, (params?: any, overwrite?: boolean) => void] {\r\n    const [photos, setPhotos] = React.useState([]);\r\n    const [totalEntries, setTotalEntries] = React.useState(0);\r\n\r\n    function fetchPhotos(params?: any, overwrite = true) {\r\n        const cleanParams = clean(params);\r\n        const queryString = !_.isEmpty(cleanParams)\r\n            ? `?${new URLSearchParams(Object.entries(cleanParams)).toString()}`\r\n            : '';\r\n\r\n        return fetch(`https://jsonplaceholder.typicode.com/photos${queryString}`)\r\n            .then((response) => {\r\n                setTotalEntries(parseInt(response.headers.get('x-total-count'), 10));\r\n                return response.json();\r\n            })\r\n            .then((newPhotos) => {\r\n                if (overwrite) {\r\n                    setPhotos(newPhotos);\r\n                } else {\r\n                    setPhotos([...photos, ...newPhotos]);\r\n                }\r\n            });\r\n    }\r\n\r\n    return [photos, totalEntries, fetchPhotos];\r\n}\r\n\r\nconst PhotoItem: React.FunctionComponent<PhotoProps> = ({id, url, title, thumbnailUrl}) => {\r\n    return (\r\n        <div className=\"flex flex-center\">\r\n            <a href={url} target=\"__blank\" className=\"mr2\">\r\n                <img src={thumbnailUrl} alt={title} width={IMG_SIZE} height={IMG_SIZE} />\r\n            </a>\r\n            <span>{title}</span>\r\n        </div>\r\n    );\r\n};\r\n\r\nconst mapStateToProps = (state: IReactVaporExampleState, props: {id: string}) => ({\r\n    filterValue: FilterBoxSelectors.getFilterText(state, props),\r\n});\r\n\r\nconst ServerSideSingleSelect: React.ComponentType<ISingleSelectOwnProps & SelectWithInfiniteScrollProps> = _.compose(\r\n    withServerSideProcessing,\r\n    selectWithFilter,\r\n    selectWithInfiniteScroll\r\n)(SingleSelectConnected);\r\n\r\nfunction ServerSideSingleSelectExampleDisconnected({\r\n    filterValue,\r\n    id,\r\n}: {id: string} & ReturnType<typeof mapStateToProps>) {\r\n    const [photos, totalEntries, fetchPhotos] = usePhotosAPIMock();\r\n    const [pageNbr, setPage] = React.useState(1);\r\n\r\n    React.useEffect(() => {\r\n        fetchPhotos({_page: 1, _limit: PER_PAGE});\r\n    }, []);\r\n\r\n    function fetchNextPage() {\r\n        fetchPhotos({_page: pageNbr + 1, _limit: PER_PAGE, q: filterValue}, false);\r\n        setPage(pageNbr + 1);\r\n    }\r\n\r\n    function applyFilter() {\r\n        fetchPhotos({_page: 1, _limit: PER_PAGE, q: filterValue});\r\n        setPage(1);\r\n    }\r\n\r\n    return (\r\n        <div className=\"form-group\">\r\n            <p className=\"form-control-label\">\r\n                SingleSelect using server-side filtering and pagination with infinite scroll\r\n            </p>\r\n            <div className=\"form-control\">\r\n                <ServerSideSingleSelect\r\n                    id={id}\r\n                    items={photos.map(\r\n                        (photo: PhotoProps): IItemBoxProps => ({\r\n                            value: photo.id,\r\n                            displayValue: <PhotoItem {...photo} />,\r\n                        })\r\n                    )}\r\n                    totalEntries={totalEntries}\r\n                    next={fetchNextPage}\r\n                    onUpdate={applyFilter}\r\n                    canClear\r\n                />\r\n            </div>\r\n        </div>\r\n    );\r\n}\r\n\r\nconst ServerSideSingleSelectExample = connect(mapStateToProps)(ServerSideSingleSelectExampleDisconnected);\r\n\r\nexport function ServerSideSelectExamples() {\r\n    return (\r\n        <div className=\"mod-form-top-bottom-padding\">\r\n            <h1 className=\"mb2\">Server-side selects</h1>\r\n            <ServerSideSingleSelectExample id=\"server-side-single-select\" />\r\n        </div>\r\n    );\r\n}\r\n"}}]);
//# sourceMappingURL=671.bundle.js.map
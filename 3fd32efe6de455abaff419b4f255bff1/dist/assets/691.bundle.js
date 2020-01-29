(window.webpackJsonp=window.webpackJsonp||[]).push([[691],{1791:function(n,r,t){"use strict";t.r(r),r.default="import * as React from 'react';\r\nimport * as InfiniteScroll from 'react-infinite-scroll-component';\r\nimport * as _ from 'underscore';\r\n\r\nimport {Loading} from '../../loading/Loading';\r\nimport {ISelectOwnProps} from '../SelectConnected';\r\n\r\nexport interface SelectWithInfiniteScrollProps {\r\n    totalEntries: number;\r\n    next: () => void;\r\n}\r\n\r\nexport function selectWithInfiniteScroll<P extends ISelectOwnProps>(\r\n    Component: React.ComponentType<P>\r\n): React.ComponentType<P & SelectWithInfiniteScrollProps> {\r\n    const ComponentWithInfiniteScroll: React.FunctionComponent<P & SelectWithInfiniteScrollProps> = (props) => {\r\n        const dataLength = _.size(props.items);\r\n        const hasMore = props.totalEntries - dataLength > 0;\r\n\r\n        function itemsWrapper(items: React.ReactNode): React.ReactNode {\r\n            return (\r\n                <InfiniteScroll\r\n                    dataLength={dataLength}\r\n                    hasMore={hasMore}\r\n                    loader={<Loading className=\"p2 full-content-x\" />}\r\n                    next={props.next}\r\n                    scrollableTarget={props.id}\r\n                    scrollThreshold={1}\r\n                    style={{overflow: 'initial'}}\r\n                >\r\n                    {items}\r\n                </InfiniteScroll>\r\n            );\r\n        }\r\n\r\n        return <Component {...(props as P)} wrapItems={itemsWrapper} />;\r\n    };\r\n    ComponentWithInfiniteScroll.displayName = `withInfiniteScroll(${Component.displayName})`;\r\n    ComponentWithInfiniteScroll.defaultProps = {\r\n        totalEntries: 0,\r\n    } as Partial<P & SelectWithInfiniteScrollProps>;\r\n    return ComponentWithInfiniteScroll;\r\n}\r\n"}}]);
//# sourceMappingURL=691.bundle.js.map
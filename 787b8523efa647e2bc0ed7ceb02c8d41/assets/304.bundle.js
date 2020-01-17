(window.webpackJsonp=window.webpackJsonp||[]).push([[304],{1398:function(n,r,e){"use strict";e.r(r),r.default="import {IDragSource, IDropTarget} from 'react-dnd';\r\nimport {DragDropContext} from 'react-dnd';\r\nimport HTML5Backend from 'react-dnd-html5-backend';\r\nimport {findDOMNode} from 'react-dom';\r\nimport * as _ from 'underscore';\r\nimport {DnDContainer, IDraggableContainerOwnProps} from './DnDContainer';\r\n\r\nconst move = (dragIndex: number, hoverIndex: number, list: any[], callBack: (listReorder: any[]) => void) => {\r\n    const moving = list[dragIndex];\r\n    const newOrder = [...list];\r\n\r\n    // Remove the element at position dragIndex\r\n    newOrder.splice(dragIndex, 1);\r\n\r\n    // Insert the moving element at hoverIndex\r\n    newOrder.splice(hoverIndex, 0, moving);\r\n\r\n    callBack(newOrder);\r\n};\r\n\r\nconst getBoxTarget = (parameter: string): IDropTarget => ({\r\n    hover(props: IDraggableContainerOwnProps, monitor: any, component?: DnDContainer): void {\r\n        const dragIndex = monitor.getItem().index;\r\n        const hoverIndex = props.index;\r\n\r\n        // Don't replace items with themselves\r\n        if (dragIndex === hoverIndex) {\r\n            return;\r\n        }\r\n\r\n        // Determine rectangle on screen\r\n        const hoverBoundingRect = (findDOMNode(component) as Element).getBoundingClientRect();\r\n\r\n        // Get vertical middle\r\n        const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;\r\n\r\n        // Determine mouse position\r\n        const clientOffset = monitor.getClientOffset();\r\n\r\n        // Get pixels to the top\r\n        const hoverClientY = clientOffset.y - hoverBoundingRect.top;\r\n\r\n        // Only perform the move when the mouse has crossed half of the items height\r\n        // When dragging downwards, only move when the cursor is below 50%\r\n        // When dragging upwards, only move when the cursor is above 50%\r\n\r\n        // Dragging downwards\r\n        if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {\r\n            return;\r\n        }\r\n\r\n        // Dragging upwards\r\n        if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {\r\n            return;\r\n        }\r\n\r\n        // Time to actually perform the action\r\n        props.move(dragIndex, hoverIndex);\r\n\r\n        // Note: we're mutating the monitor item here!\r\n        // Generally it's better to avoid mutations,\r\n        // but it's good here for the sake of performance\r\n        // to avoid expensive index searches.\r\n        monitor.getItem().index = hoverIndex;\r\n    },\r\n    drop(props: IDraggableContainerOwnProps, monitor: any) {\r\n        monitor.getItem()[parameter] = null;\r\n    },\r\n});\r\n\r\nconst getSelectedBoxSource = (parameter: string): IDragSource => ({\r\n    isDragging(props: IDraggableContainerOwnProps, monitor: any) {\r\n        return props.id === monitor.getItem()[parameter];\r\n    },\r\n    beginDrag(props: IDraggableContainerOwnProps) {\r\n        return {...props};\r\n    },\r\n});\r\n\r\n// This object is usefull when the drag happen outside of the DraggableSelectedOption,\r\n// instead of making the child handle it, the parent catches the event\r\nconst parentDropTarget = {\r\n    drop: _.noop,\r\n};\r\n\r\nlet context: any;\r\nconst TagControlContext = (DecoratedClass: any) => {\r\n    if (!context) {\r\n        context = DragDropContext(HTML5Backend);\r\n    }\r\n    return context(DecoratedClass);\r\n};\r\n\r\nexport const DnDUtils = {\r\n    move,\r\n    getBoxTarget,\r\n    getSelectedBoxSource,\r\n    parentDropTarget,\r\n    TagControlContext,\r\n};\r\n"}}]);
//# sourceMappingURL=304.bundle.js.map
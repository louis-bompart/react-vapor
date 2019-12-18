import * as moment from 'moment';
import * as React from 'react';
import {DateUtils} from '../../../utils/DateUtils';
import {SELECTION_BOXES_LONG} from '../../datePicker/examples/DatePickerExamplesCommon';
import {IExampleRowData, TableHOCServerExampleId} from '../examples/TableHOCServerExample';
import {TableRowConnected} from '../TableRowConnected';
import {TableRowNumberColumn} from '../TableRowNumberColumn';

const generateRows = (allData: IExampleRowData[]) =>
    allData.map((data: IExampleRowData, i: number) => (
        <TableRowConnected
            id={data.username}
            tableId={TableHOCServerExampleId}
            key={data.username}
            actions={tableActions(data.username)}
            isMultiselect
            disabled={i % 3 === 0}
            collapsible={{content: <div className="py2">👋</div>}}
        >
            <TableRowNumberColumn number={i + 1} />
            <td key="city">{data.city}</td>
            <td key="email">{data.email.toLowerCase()}</td>
            <td key="username">{data.username.toLowerCase()}</td>
            <td key="date-of-birth">{data.dateOfBirth.toLocaleDateString()}</td>
        </TableRowConnected>
    ));

const tableActions = (username: string) => [
    {
        primary: true,
        icon: 'edit',
        name: 'edit',
        enabled: true,
        trigger: () => alert(username),
        callOnDoubleClick: true,
    },
];

const tablePredicates = [
    {
        id: 'address.city',
        prepend: <span className="mr1 text-medium-grey">City:</span>,
        values: [
            {displayValue: 'All', value: '', selected: true},
            {displayValue: 'Lebsackbury', value: 'Lebsackbury'},
        ],
    },
    {
        id: 'username',
        prepend: <span className="mr1 text-medium-grey">Username:</span>,
        values: [
            {displayValue: 'All', value: '', selected: true},
            {displayValue: 'bret', value: 'Bret'},
        ],
    },
];

const tableDatePickerConfig = {
    datesSelectionBoxes: SELECTION_BOXES_LONG,
    years: [...DateUtils.getPreviousYears(25), DateUtils.currentYear.toString()],
    initialDateRange: [
        moment()
            .subtract(25, 'years')
            .toDate(),
        moment().toDate(),
    ],
};

export const TableHOCExampleUtils = {
    generateRows,
    tableActions,
    tablePredicates,
    tableDatePickerConfig,
};
import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';

import { date } from '../../functions/dates';
import BaseTable from './BaseTable';

const mapStateToProps = (state) => ({
    data: state.reports.data,
    pagination: state.reports.pagination,
    queryParams: state.reports.queryParams,
});

class ReportsTable extends BaseTable {
    /**
     * Patients table constructor.
     */
    constructor() {
        super();
        this.searchHint = 'Search Reports';
    }

    /**
     * Renders the table header.
     *
     * @return {XML}
     */
    header() {
        return (
            <TableRow>
                <TableHeaderColumn>
                    Test
                </TableHeaderColumn>
                <TableHeaderColumn>
                    Reason
                </TableHeaderColumn>
                <TableHeaderColumn>
                    Technologist
                </TableHeaderColumn>
                <TableHeaderColumn style={{ width: 73 }} />
            </TableRow>
        );
    }

    /**
     * Renders the rows for the table.
     *
     * @return {Array}
     */
    rows() {
        const rows = [];

        for (const report of this.props.data) {
            console.log(report);
            rows.push(
                <TableRow key={report.id} selectable={false}>
                    <TableRowColumn>
                        {report.current_revision.data.data.test}
                    </TableRowColumn>
                    <TableRowColumn>
                        {report.current_revision.data.data.test_reason}
                    </TableRowColumn>
                    <TableRowColumn>
                        {report.user.data.name}
                    </TableRowColumn>
                    <TableRowColumn style={{ width: 73 }}>
                        <Link to={`/reports/${report.id}`}>
                            View Report
                        </Link>
                    </TableRowColumn>
                </TableRow>
            );
        }

        return rows;
    }
}

export default connect(mapStateToProps)(ReportsTable);

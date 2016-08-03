import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';

import { date } from '../../functions/dates';
import BaseTable from './BaseTable';

const mapStateToProps = (state) => ({
    data: state.patients.data,
    pagination: state.patients.pagination,
    queryParams: state.patients.queryParams,
});

class PatientsTable extends BaseTable {
    /**
     * Patients table constructor.
     */
    constructor() {
        super();
        this.searchHint = 'Search Patients';
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
                    <Link to={`${window.location.pathname}?sort=name`}>
                        Name
                    </Link>
                </TableHeaderColumn>
                <TableHeaderColumn>
                    <Link to={`${window.location.pathname}?sort=age`}>
                        Age
                    </Link>
                </TableHeaderColumn>
                <TableHeaderColumn>
                    <Link to={`${window.location.pathname}?sort=dob`}>
                        Date of Birth
                    </Link>
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

        for (const patient of this.props.data) {
            rows.push(
                <TableRow key={patient.id} selectable={false}>
                    <TableRowColumn>
                        {patient.name}
                    </TableRowColumn>
                    <TableRowColumn>
                        {patient.age}
                    </TableRowColumn>
                    <TableRowColumn>
                        {date(patient.dob)}
                    </TableRowColumn>
                    <TableRowColumn style={{ width: 73 }}>
                        <Link to={`${window.location.pathname}/${patient.id}`}>
                            View Patient
                        </Link>
                    </TableRowColumn>
                </TableRow>
            );
        }

        return rows;
    }
}

export default connect(mapStateToProps)(PatientsTable);

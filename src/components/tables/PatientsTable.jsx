import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';

import BaseTable from './BaseTable';
import { date } from '../../functions/dates';
import { patientsFetch } from '../../state/actions';

const mapStateToProps = (newState, state) => ({
    data: newState.patients.data,
    pagination: newState.patients.pagination,
    queryParams: state.queryParams || newState.reports.queryParams,
    organisation: newState.user.organisation,
});

const mapDispatchToProps = (dispatch) => ({
    patientsFetch: (organisationId, queryParams = {}) => dispatch(patientsFetch(organisationId, queryParams)),
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
     * Called when a table refresh is required - should dispatch a request for new table data.
     */
    fetchFreshTableData() {
        this.props.patientsFetch(this.props.organisationId, this.queryParams);
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
                    Name
                </TableHeaderColumn>
                <TableHeaderColumn>
                    Age
                </TableHeaderColumn>
                <TableHeaderColumn>
                    Date of Birth
                </TableHeaderColumn>
                <TableHeaderColumn>
                    Patient Since
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
                    <TableRowColumn>
                        {date(patient.created_at)}
                    </TableRowColumn>
                    <TableRowColumn style={{ width: 73 }}>
                        <Link to={`/${this.props.organisation.id}/patients/${patient.id}`}>
                            View Patient
                        </Link>
                    </TableRowColumn>
                </TableRow>
            );
        }

        return rows;
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PatientsTable);

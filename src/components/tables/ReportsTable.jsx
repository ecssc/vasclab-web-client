import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';

import BaseTable from './BaseTable';
import { date } from '../../functions/dates';
import { reportsFetch } from '../../state/actions';

const mapStateToProps = (state) => ({
    data: state.reports.data,
    pagination: state.reports.pagination,
    queryParams: state.reports.queryParams,
    organisation: state.user.organisation,
});

const mapDispatchToProps = (dispatch) => ({
    patientReportsFetch: (patientId, pagination) => dispatch(reportsFetch(patientId, null, pagination)),
    organisationReportsFetch: (organisationId, pagination) => dispatch(reportsFetch(null, organisationId, pagination)),
});

class ReportsTable extends BaseTable {
    /**
     * Patients table constructor.
     */
    constructor() {
        super();

        this.patientNameStyle = true;
        this.searchHint = 'Search Reports';
    }

    /**
     * Component will receive props event handler.
     *
     * @param props
     */
    componentWillReceiveProps(props) {
        if (props.organisationId) {
            this.props.organisationReportsFetch(props.organisationId);
        }

        if (props.patientId) {
            this.props.patientReportsFetch(props.patientId);
        }

        this.queryParams = props.queryParams;
        this.patientNameStyle = props.showPatientName ? {} : { display: 'none' };
    }

    /**
     * Renders the table header.
     *
     * @return {XML}
     */
    header() {
        return (
            <TableRow>
                <TableHeaderColumn style={this.patientNameStyle}>
                    Patient
                </TableHeaderColumn>
                <TableHeaderColumn>
                    Test
                </TableHeaderColumn>
                <TableHeaderColumn>
                    Reason
                </TableHeaderColumn>
                <TableHeaderColumn>
                    Technologist
                </TableHeaderColumn>
                <TableHeaderColumn>
                    Report Date
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
            rows.push(
                <TableRow key={report.id} selectable={false}>
                    <TableRowColumn style={this.patientNameStyle}>
                        <Link to={`/${this.props.organisation.id}/patients/${report.patient.data.id}`}>
                            {report.patient.data.name}
                        </Link>
                    </TableRowColumn>
                    <TableRowColumn>
                        {report.current_revision.data.data.test}
                    </TableRowColumn>
                    <TableRowColumn>
                        {report.current_revision.data.data.test_reason}
                    </TableRowColumn>
                    <TableRowColumn>
                        {report.user.data.name}
                    </TableRowColumn>
                    <TableRowColumn>
                        {date(report.created_at)}
                    </TableRowColumn>
                    <TableRowColumn style={{ width: 73 }}>
                        <Link to={`/${this.props.organisation.id}/reports/${report.id}`}>
                            View Report
                        </Link>
                    </TableRowColumn>
                </TableRow>
            );
        }

        return rows;
    }
}

ReportsTable.propTypes = {
    showPatientName: React.PropTypes.bool,
    organisationId: React.PropTypes.string,
    patientId: React.PropTypes.string,
};

export default connect(mapStateToProps, mapDispatchToProps)(ReportsTable);

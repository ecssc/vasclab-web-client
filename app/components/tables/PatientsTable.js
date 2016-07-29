import React from 'react';
import { connect } from 'react-redux';
import { patientsFetch } from '../../state/actions';

import Table from 'material-ui/lib/table/table';
import TableBody from 'material-ui/lib/table/table-body';
import TableHeader from 'material-ui/lib/table/table-header';
import TableHeaderColumn from 'material-ui/lib/table/table-header-column';
import TableRow from 'material-ui/lib/table/table-row';
import TableRowColumn from 'material-ui/lib/table/table-row-column';

import { FormattedDate } from 'react-intl';

const mapStateToProps = (state) => ({
    patients: state.patients
});

class PatientsTable extends React.Component {

    /**
     * Component will mount event handler.
     *
     * Loads the patiens into the application.
     */
    componentWillMount() {
        this.props.dispatch(patientsFetch());
    }

    /**
     * Renders the application.
     *
     * @return {XML}
     */
    render() {
        return (
            <Table>
                <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
                    <TableRow>
                        <TableHeaderColumn>Name</TableHeaderColumn>
                        <TableHeaderColumn>Date of Birth</TableHeaderColumn>
                        <TableHeaderColumn style={{width: 100}}></TableHeaderColumn>
                    </TableRow>
                </TableHeader>
                <TableBody displayRowCheckbox={false}>
                    {this.rows()}
                </TableBody>
            </Table>
        )
    }

    rows() {
        let rows = [];

        for (let patient of this.props.patients) {
            rows.push(
                <TableRow key={patient.id} selectable={false}>
                    <TableRowColumn>{patient.name}</TableRowColumn>
                    <TableRowColumn>{patient.dob}</TableRowColumn>
                    <TableRowColumn style={{width: 100}}>
                        <a href="#">Reports</a>
                    </TableRowColumn>
                </TableRow>
            )
        }

        return rows;
    }
}

export default connect(mapStateToProps)(PatientsTable);

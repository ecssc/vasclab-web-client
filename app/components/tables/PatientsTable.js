import React from 'react';
import { connect } from 'react-redux';
import { patientsFetch } from '../../state/actions';

import Table from 'material-ui/lib/table/table';
import TableBody from 'material-ui/lib/table/table-body';
import TableHeader from 'material-ui/lib/table/table-header';
import TableHeaderColumn from 'material-ui/lib/table/table-header-column';
import TableRow from 'material-ui/lib/table/table-row';
import TableRowColumn from 'material-ui/lib/table/table-row-column';
import SelectField from 'material-ui/lib/select-field';
import TextField from 'material-ui/lib/text-field';
import MenuItem from 'material-ui/lib/menus/menu-item';
import Slider from 'material-ui/lib/slider';

import moment from 'moment';

const mapStateToProps = (state) => ({
    patients: state.patients.data,
    pagination: state.patients.pagination,
    pageNumber: state.routing.locationBeforeTransitions.query.page || 1
});

class PatientsTable extends React.Component {

    /**
     * Component will mount event handler.
     *
     * Loads the patiens into the application.
     */
    componentWillMount() {
        this.props.dispatch(patientsFetch(this.props.pageNumber));
    }

    /**
     * Handler for page change events.
     *
     * @param {Number} pageNumber
     */
    paginationChange(pageNumber) {
        this.props.dispatch(patientsFetch(pageNumber));
    }

    sortChange(key) {
        this.props.dispatch(patientsFetch(1));
    }

    /**
     * Renders the application.
     *
     * @return {XML}
     */
    render() {
        if (this.props.patients.length === 0) {
            return (<div></div>);
        }

        return (
            <div>
                <div className="row">
                    <div className="col-xs-12">
                        {this.paginationSelect()}
                        {this.searchBar()}
                    </div>
                </div>

                <div className="row">
                    <div className="col-xs-12">
                        <Table>
                            <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
                                <TableRow>
                                    <TableHeaderColumn>
                                        <a href="#" onClick={() => this.sortChange('name')}>Name</a>
                                    </TableHeaderColumn>
                                    <TableHeaderColumn>
                                        <a href="#" onClick={() => this.sortChange('age')}>Age</a>
                                    </TableHeaderColumn>
                                    <TableHeaderColumn>
                                        <a href="#" onClick={() => this.sortChange('dob')}>Date of Birth</a>
                                    </TableHeaderColumn>
                                    <TableHeaderColumn style={{width: 50}}></TableHeaderColumn>
                                </TableRow>
                            </TableHeader>
                            <TableBody displayRowCheckbox={false}>
                                {this.rows()}
                            </TableBody>
                        </Table>
                    </div>
                </div>

                <div className="row">
                    <div className="col-xs-offset-3 col-xs-6">
                        {this.paginationSlider()}
                    </div>
                </div>
            </div>
        )
    }

    /**
     * Renders the rows for the table.
     *
     * @return {Array}
     */
    rows() {
        let rows = [];

        for (let patient of this.props.patients) {
            rows.push(
                <TableRow key={patient.id} selectable={false}>
                    <TableRowColumn>
                        {patient.name}
                    </TableRowColumn>
                    <TableRowColumn>
                        {patient.age}
                    </TableRowColumn>
                    <TableRowColumn>
                        {moment(patient.dob).format('Do MMMM, YYYY')}
                    </TableRowColumn>
                    <TableRowColumn style={{width: 50}}>
                        <a href="#">Reports</a>
                    </TableRowColumn>
                </TableRow>
            )
        }

        return rows;
    }

    /**
     * Renders the search bar.
     *
     * @return {XML}
     */
    searchBar() {
        if (this.props.patients.length === 0) {
            return (<div></div>);
        }

        return (
            <TextField style={{float: 'right', width: 335}}
                       hintText="Search Patients"
            />
        );
    }

    /**
     * Renders the pagination select box.
     *
     * @return {XML}
     */
    paginationSelect() {
        if (this.props.pagination === null) {
            return (<div></div>);
        }

        return (
            <SelectField style={{float: 'right', width: 100, marginLeft: 10}}
                         value={this.props.pagination.current_page}
                         onChange={(event, index, value) => this.paginationChange(value)}
            >
                <MenuItem key={1} value={1} primaryText="Page 1"/>
                <MenuItem key={2} value={2} primaryText="Page 2"/>
            </SelectField>
        );
    }

    /**
     * Renders the pagination component.
     *
     * @return {XML}
     */
    paginationSlider() {
        if (this.props.pagination === null) {
            return (<div></div>);
        }

        return (
            <Slider value={this.props.pagination.current_page}
                    step={1}
                    min={1}
                    max={this.props.pagination.total_pages}
                    onChange={(event, value) => this.paginationChange(value)}
            />
        )
    }
}

export default connect(mapStateToProps)(PatientsTable);

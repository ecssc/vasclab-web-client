import React from 'react';
import { connect } from 'react-redux';
import { stringify } from 'query-string';
import { browserHistory } from 'react-router';

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

const mapStateToProps = (state) => ({
    patients: state.patients.data,
    pagination: state.patients.pagination,
    queryParams: state.patients.queryParams
});

class PatientsTable extends React.Component {

    /**
     * Patients table constructor.
     */
    constructor() {
        super();
        this.queryParams = null;
    }

    /**
     * Component will receive props event handler.
     *
     * @param props
     */
    componentWillReceiveProps(props) {
        this.queryParams = props.queryParams;
    }

    /**
     * Refreshes the table with the specifed query parameters.
     *
     * @param queryParams
     */
    refreshTable(queryParams) {
        for (var property in this.queryParams) {
            this.queryParams[property] = queryParams[property];
        }

        if (Object.keys(this.queryParams).length === 0) {
            this.queryParams = queryParams;
        }

        let pathname = window.location.pathname;
        let queryString = stringify(this.queryParams);

        if (queryString !== '') {
            queryString = `?${queryString}`;
        }

        browserHistory.push('/');
        browserHistory.replace(pathname + queryString);
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
                                        <a href="#" onClick={() => this.refreshTable({sort: 'name'})}>Name</a>
                                    </TableHeaderColumn>
                                    <TableHeaderColumn>
                                        <a href="#" onClick={() => this.refreshTable({sort: 'age'})}>Age</a>
                                    </TableHeaderColumn>
                                    <TableHeaderColumn>
                                        <a href="#" onClick={() => this.refreshTable({sort: 'dob'})}>Date of Birth</a>
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
                        {patient.dob}
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
                         onChange={(event, index, value) => this.refreshTable({page: value})}
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
                    onChange={(event, value) => this.refreshTable({page: value})}
            />
        )
    }
}

export default connect(mapStateToProps)(PatientsTable);

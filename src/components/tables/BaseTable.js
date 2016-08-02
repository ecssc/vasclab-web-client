import React from 'react';
import { stringify } from 'query-string';
import { browserHistory } from 'react-router';
import { Table, TableBody, TableHeader } from 'material-ui/Table';
import SelectField from 'material-ui/SelectField';
import TextField from 'material-ui/TextField';
import MenuItem from 'material-ui/MenuItem';
import Slider from 'material-ui/Slider';

class BaseTable extends React.Component {
    /**
     * Base table constructor.
     */
    constructor() {
        super();
        this.queryParams = null;
        this.searchHint = 'Search';
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
     * Renders the table.
     *
     * @return {XML}
     */
    render() {
        if (this.props.data.length === 0) {
            return (<div />);
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
                                {this.header()}
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
     * Renders the table header.
     *
     * @return {XML}
     */
    header() {
        return (<div />);
    }

    /**
     * Renders the rows for the table.
     *
     * @return {Array}
     */
    rows() {
        return ([<div />]);
    }

    /**
     * Renders the search bar.
     *
     * @return {XML}
     */
    searchBar() {
        if (this.props.data.length === 0) {
            return (<div />);
        }

        return (
            <TextField style={{float: 'right', width: 335}} hintText={this.searchHint} />
        );
    }

    /**
     * Renders the pagination select box.
     *
     * @return {XML}
     */
    paginationSelect() {
        if (this.props.pagination === null) {
            return (<div />);
        }

        let options = [];

        for (let i = 1; i <= this.props.pagination.total_pages; i++) {
            options.push(<MenuItem key={i} value={i} primaryText={`Page ${i}`} />)
        }

        return (
            <SelectField style={{float: 'right', width: 100, marginLeft: 10}}
                         value={this.props.pagination.current_page}
                         onChange={(event, index, value) => this.refreshTable({page: value})}
            >
                {options}
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

export default BaseTable;

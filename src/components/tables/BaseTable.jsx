import React from 'react';
import merge from 'lodash.merge';
import { stringify } from 'query-string';
import { Table, TableBody, TableHeader } from 'material-ui/Table';
import { Row, Col } from 'react-flexbox-grid';
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
     * Component will mount event handler.
     *
     * @param props
     */
    componentWillMount() {
        this.queryParams = this.props.queryParams;
        this.fetchFreshTableData();
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
        const pathname = window.location.pathname;

        this.queryParams = merge(this.queryParams, queryParams);

        let queryString = stringify(this.queryParams);

        if (queryString !== '') {
            queryString = `?${queryString}`;
        }

        this.context.router.push(pathname + queryString);

        this.fetchFreshTableData();
    }

    /**
     * Called when a table refresh is required - should dispatch a request for new table data.
     */
    fetchFreshTableData() {
        //
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
            <TextField
                style={{ width: '100%' }}
                hintText={this.searchHint}
            />
        );
    }

    /**
     * Renders the pagination select box.
     *
     * @return {XML}
     */
    paginationSelect() {
        if (this.props.pagination === null || this.props.pagination.total_pages === 1) {
            return (<div />);
        }

        let options = [];

        for (let i = 1; i <= this.props.pagination.total_pages; i++) {
            options.push(<MenuItem key={i} value={i} primaryText={`Page ${i}`} />);
        }

        return (
            <SelectField
                style={{ width: '100%' }}
                value={this.props.pagination.current_page}
                onChange={(event, index, value) => this.refreshTable({ page: value })}
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
        if (this.props.pagination === null || this.props.pagination.total_pages === 1) {
            return (<div />);
        }

        return (
            <Slider
                value={this.props.pagination.current_page}
                step={1}
                min={1}
                max={this.props.pagination.total_pages}
                onChange={(event, value) => this.refreshTable({ page: value })}
            />
        );
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

        let searchWidth = 3;
        let paginationStyle = {};

        if (this.props.pagination.total_pages === 1) {
            searchWidth = 5;
            paginationStyle = { display: 'none' };
        }

        return (
            <div>
                <Row bottom="xs" end="sm">
                    <Col xs={12} sm={searchWidth}>{this.searchBar()}</Col>
                    <Col xs={12} sm={2} style={paginationStyle}>{this.paginationSelect()}</Col>
                </Row>

                <Row>
                    <Col xs={12}>
                        <Table>
                            <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
                                {this.header()}
                            </TableHeader>
                            <TableBody displayRowCheckbox={false}>
                                {this.rows()}
                            </TableBody>
                        </Table>
                    </Col>
                </Row>

                <Row around="xs">
                    <Col xs={6}>
                        {this.paginationSlider()}
                    </Col>
                </Row>
            </div>
        );
    }
}

BaseTable.propTypes = {
    data: React.PropTypes.array,
    pagination: React.PropTypes.object,
    queryParams: React.PropTypes.object,
};

BaseTable.contextTypes = {
    router: React.PropTypes.func.isRequired,
};

export default BaseTable;

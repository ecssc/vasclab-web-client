import React from 'react';
import { stringify } from 'query-string';
import { browserHistory } from 'react-router';
import { Table, TableBody, TableHeader } from 'material-ui/Table';
import { Grid, Row, Col } from 'react-flexbox-grid';
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
        const pathname = window.location.pathname;

        for (const property in this.queryParams) {
            this.queryParams[property] = queryParams[property];
        }

        if (Object.keys(this.queryParams).length === 0) {
            this.queryParams = queryParams;
        }

        let queryString = stringify(this.queryParams);

        if (queryString !== '') {
            queryString = `?${queryString}`;
        }

        browserHistory.push('/');
        browserHistory.replace(pathname + queryString);
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
        if (this.props.pagination === null) {
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
        if (this.props.pagination === null) {
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

        return (
            <Grid>
                <Row bottom="xs" end="sm">
                    <Col xs={12} sm={3}>{this.searchBar()}</Col>
                    <Col xs={12} sm={2}>{this.paginationSelect()}</Col>
                </Row>

                <Row>
                    <Col>
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
            </Grid>
        );
    }
}

BaseTable.propTypes = {
    data: React.PropTypes.array,
    pagination: React.PropTypes.object,
    queryParams: React.PropTypes.object,
};

export default BaseTable;
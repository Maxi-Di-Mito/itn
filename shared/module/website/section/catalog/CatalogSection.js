import React, { Component ,PropTypes } from 'react';
import { CircularProgress } from 'material-ui';
import CatalogActions from '../../../../redux/actions/CatalogActions';
import CatalogSectionView from './CatalogSectionView.js'
import { connect } from 'react-redux';

const mapStateToProps = ({ catalog }) => ({
    data: catalog.data,
    isFetching: catalog.isFetching
});

const mapDispatchToProps = (dispatch) => ({
    fetchCatalogs: () => dispatch(CatalogActions.fetch())
});

@connect(mapStateToProps, mapDispatchToProps)
class CatalogSection extends Component {
    componentWillMount() {
        let { isFetching, fetchCatalogs } = this.props;

        if (!isFetching) {
            fetchCatalogs();
        }
    }

    render() {
        let { data, isFetching } =  this.props;

        if (!isFetching) {
            return <CatalogSectionView catalog={data}/>;
        }

        return <CircularProgress mode="indeterminate"/>
    };

}

export default CatalogSection;
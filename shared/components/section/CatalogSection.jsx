import React, { Component ,PropTypes } from 'react';
import $ from 'jquery';
import CatalogSectionView from '../section/CatalogSectionView.jsx'

class CatalogSection extends Component
{
    constructor(props)
    {
        super(props);
        this.state = { data: [],isFetching:true};
        this.setData = this.setData.bind(this);
    };

    componentWillMount()
    {
        $.ajax({
            url: '/catalog',
            dataType: 'json',
            type: 'get',
            success: (data)=> {
                this.setData(data);
            }
        });
    }

    setData(value) {
        this.setState({ data: value,isFetching:false});
    }

    render()
    {
        const {data,isFetching} =  this.state;
        if(!isFetching){
            return (
                <CatalogSectionView catalog={data}/>
            );
        }else
            return false;

    };

}





export default CatalogSection;
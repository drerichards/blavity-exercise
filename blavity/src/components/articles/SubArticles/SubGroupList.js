import React from 'react';
import PropTypes from 'prop-types';
import './subStyles.scss'

const SubGroupList = props => {
    return (
        <div className='subMain card'>
            {props.renderArticles(props.subGroup)}
        </div>
    );
};

SubGroupList.propTypes = {
    subGroup: PropTypes.array.isRequired, 
    renderArticles: PropTypes.func.isRequired,
    saveArticle: PropTypes.func.isRequired
};

export default SubGroupList;
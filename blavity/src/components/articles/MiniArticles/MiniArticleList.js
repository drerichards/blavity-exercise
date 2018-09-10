import React from 'react';
import PropTypes from 'prop-types';
import './miniStyles.scss'

const MiniArticleList = props => {
    return (
        <div className='miniSection card'>
            {props.renderArticlesHoriz(props.miniArticles)}            
        </div>
    );
};

MiniArticleList.propTypes = {
    miniArticles: PropTypes.array.isRequired, 
    renderArticlesHoriz: PropTypes.func.isRequired,
    saveArticle: PropTypes.func.isRequired
};

export default MiniArticleList;
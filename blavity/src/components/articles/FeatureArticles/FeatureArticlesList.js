import React from 'react';
import PropTypes from 'prop-types';
import './featureStyles.scss'

const FeatureArticlesList = props => {
    return (
        <div className='featureSection card'>
            {props.renderArticles(props.articles)}
        </div>
    );
};

FeatureArticlesList.propTypes = {
    articles: PropTypes.array.isRequired, 
    renderArticles: PropTypes.func.isRequired,
    saveArticle: PropTypes.func.isRequired
};

export default FeatureArticlesList;
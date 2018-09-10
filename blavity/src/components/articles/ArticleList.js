import React from 'react';
import PropTypes from 'prop-types';
import FeatureArticlesList from './FeatureArticles/FeatureArticlesList'
import SubGroupList from './SubArticles/SubGroupList'
import MiniArticleList from './MiniArticles/MiniArticleList'
const ArticleList = props => {
    return (
        <div>
            <FeatureArticlesList articles={props.featureGroup} renderArticles={props.renderArticles} saveArticle={props.saveArticle}/>
            <div className='subSection'>
                <SubGroupList subGroup={props.subGroup} renderArticles={props.renderArticles} saveArticle={props.saveArticle}/>
                <MiniArticleList miniArticles={props.miniGroup} renderArticlesHoriz={props.renderArticlesHoriz} saveArticle={props.saveArticle}/>
            </div>
        </div>
    );
};

ArticleList.propTypes = {
    saveArticle: PropTypes.func.isRequired, 
    renderArticles: PropTypes.func.isRequired, 
    renderArticlesHoriz: PropTypes.func.isRequired, 
    featureGroup: PropTypes.array.isRequired, 
    subGroup: PropTypes.array.isRequired
};

export default ArticleList;
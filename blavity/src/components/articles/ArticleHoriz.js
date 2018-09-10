import React from 'react';
import PropTypes from 'prop-types';
import {Card, CardTitle, Button, Icon} from 'react-materialize'

const ArticleHoriz = props => {
    const {
        author,
        description,
        publishedAt,
        title,
        url,
        urlToImage
    } = props.articles
 
    const article = {
        author,
        description,
        title,
        url,
        urlToImage
    }

    return (
        <Card horizontal key={publishedAt} header={<CardTitle image={urlToImage? urlToImage : 'https://res.cloudinary.com/andrerichards/image/upload/v1517793260/noImage_erqriy.jpg'} waves='light'/>}
            title={title}
            actions={[<Button key={`4${publishedAt}`} flat waves='orange' node='a' href={url}>Link<Icon small right>launch</Icon></Button>,
                <Button key={`1${publishedAt}`} onClick={() => {props.saveArticle(article)}} flat waves='orange' node='a'>Save<Icon small right>bookmark</Icon></Button>
            ]}>
        </Card>
    );
};

ArticleHoriz.propTypes = {
    articles: PropTypes.object.isRequired,
    saveArticle: PropTypes.func.isRequired
};

export default ArticleHoriz;
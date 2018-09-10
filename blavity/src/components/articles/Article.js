import React from 'react';
import PropTypes from 'prop-types';
import {Card, CardTitle, Button, Icon} from 'react-materialize'

const Article = props => {
    const {
        author,
        description,
        publishedAt,
        source,
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
        <Card key={publishedAt} header={<CardTitle reveal image={urlToImage? urlToImage : 
            'https://res.cloudinary.com/andrerichards/image/upload/v1517793260/noImage_erqriy.jpg'} waves='light'/>}
            title={title}
            reveal={
                <div>
                    <p>{description}</p>
                    <div>
                        <em><h6>Author: {author}</h6></em>
                        <em><h6>Source: {source.name}</h6></em>
                    </div>
                </div>
            }
            actions={[<Button flat waves='orange' key={publishedAt} node='a' href={url}>Link<Icon small right>launch</Icon></Button>,
                <Button key={`1${publishedAt}`} onClick={() => {props.saveArticle(article)}} flat waves='orange' node='a'>Save<Icon small right>bookmark</Icon></Button>
            ]}>
        </Card>
    );
};

Article.propTypes = {
    articles: PropTypes.object.isRequired,
    saveArticle: PropTypes.func.isRequired
};

export default Article;
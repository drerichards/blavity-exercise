import React from 'react';
import PropTypes from 'prop-types';
import {Collapsible, CollapsibleItem, Card, CardTitle} from 'react-materialize'

const renderCollapse = articles => {
    return articles.map((article, i) => {
        return <CollapsibleItem key={i} header={article.title}>
            <Card key={`a${i}`} header={
                <CardTitle image={article.urlToImage? article.urlToImage : 
                    'https://res.cloudinary.com/andrerichards/image/upload/v1517793260/noImage_erqriy.jpg'}></CardTitle>} 
                actions={[<a key={`b${i}`} href={article.url}>Link</a>]}>
                {article.description ? <p>{article.description}</p> : ''}
            </Card>
        </CollapsibleItem>
    })
}

const Collapse = props => {
    return (
        <Collapsible accordion defaultActiveKey={1}>
            {renderCollapse(props.savedArticles)}
        </Collapsible>
    );
};

Collapse.propTypes = {
    savedArticles: PropTypes.array.isRequired
};

export default Collapse;
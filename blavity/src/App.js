import React, {Component} from 'react';
import axios from 'axios'
import {NEWS_API_KEY} from './config'
import ErrorBoundary from './components/ErrorBoundary'
import ArticleList from './components/articles/ArticleList'
import Article from './components/articles/Article';
import ArticleHoriz from './components/articles/ArticleHoriz';
import TopNav from './components/topNav/TopNav';
import './App.scss';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      featureArticles: [],
      subGridArticles: [],
      miniGroup: [],
      savedArticles: [],
      articleTotal: 0
    }
  }

  async componentDidMount() {
    try {
      //requires API key creation. did this req on front end because my server wasn't allowing it from the back
      //the backend routing for this is still present
      const apiArticles = axios(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${NEWS_API_KEY}`)
      //req from db collection docs
      const dbArticles = axios('http://localhost:5000/db/get_articles')
      const [api, db] = await Promise.all([apiArticles, dbArticles])

      //spliced the incoming array in order to display the data in different layout formats
      const featureGroup = api.data.articles.splice(0, 5)
      const subGroup = api.data.articles.splice(0, 4)
      this.setState({
        featureArticles: featureGroup,
        subGridArticles: subGroup,
        miniGroup: api.data.articles,
        savedArticles: db.data,
        articleTotal: db.data.length //keep track of number of saved articles
      })
    } catch (error) {
      console.log(error)
    }
  }



  async saveArticle(article) {
    try {
      const result = await axios.post('http://localhost:5000/db/store_article', article)
      this.setState({
        savedArticles: {...this.state.savedArticles, result},
        articleTotal: this.state.articleTotal++
      })
    } catch (error) {
      console.log(error)
    }
  }

  renderArticles(properties) {
    if (properties.length > 0) {
      return properties.map((article, i) => {
        return <Article key={i} articles={article} saveArticle={this.saveArticle}/>
      })
    } 
  }

  //this does the same thing as the one above but the layout of the component is very diff
  //previous comp not easily resuable
  renderArticlesHoriz(properties) {
    if (properties.length > 0) {
      return properties.map((article, i) => {
        return <ArticleHoriz key={i} articles={article} saveArticle={this.saveArticle}/>
      })
    } 
  }

 
//errorboundary used to catch certain errors that will not cause an entire application crash
//proptypes used to ensure correct data was being passed through components and sent error if not
  render() {
    const {featureArticles,
    subGridArticles,
    miniGroup} = this.state
    return ( 
      <div className="App">
        <ErrorBoundary hasError={this.state.hasError}>
          <TopNav savedArticles={this.state.savedArticles} articleTotal={this.state.articleTotal}/>
        </ErrorBoundary>
        <ErrorBoundary hasError={this.state.hasError}>
          <ArticleList saveArticle={this.saveArticle}
            renderArticles={this.renderArticles}
            renderArticlesHoriz={this.renderArticlesHoriz}
            featureGroup={featureArticles}
            subGroup={subGridArticles}
            miniGroup={miniGroup}/>
        </ErrorBoundary>
      </div>
    );
  }
}

export default App;
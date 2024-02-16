import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
export default class News extends Component {
 
  static defaultProps={
    country:"in",
    pageSize:8,
    category:"general"
  }

  constructor(){
    super();
    this.state={
      articles:[],
      loading:false,
      totalResults:0,
      page:1,
      isNextButtonDisabled:false,
      
    };
  }
  async fetchData(page){
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=cbf509c56d894cafa46fe77b6b3088ca&page=${page}&pageSize=${this.props.pageSize}`;
    this.setState({loading:true});
    let data =await fetch(url);
    let parsedData=await data.json();
    return parsedData;
  }
  async componentDidMount(){
    const {articles,totalResults}=await this.fetchData(this.state.page);
    this.setState({articles,totalResults,loading:false});
   
  }
  handleNextClick = async () => {
  const nextPage = this.state.page + 1;
  const { articles, totalResults } = await this.fetchData(nextPage);
  const pageSize = this.props.pageSize;
  const remainingArticles = totalResults - nextPage * pageSize;
  this.setState({
    articles,
    page: nextPage,
    isNextButtonDisabled:remainingArticles <= 0,
    loading:false
  });
};
handlePrevClick = async () => {
  const nextPage = this.state.page - 1;
  const { articles } = await this.fetchData(nextPage);
  this.setState({ 
    articles, 
    page: nextPage,
    loading:false
    
  });
};

  render() {
    return(
      <div className="container">
        <h2 className="brandtxt">News with tea.</h2>
        {this.state.loading && <Spinner />}
        <div className="cardctr">
          {!this.state.loading && this.state.articles.map((element) => (
              <div className="newsctr" key={element.url}>
                   <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageUrl={element.urlToImage ? element.urlToImage : "https://images.unsplash.com/photo-1516542076529-1ea3854896f2?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGNvbXB1dGVyfGVufDB8fDB8fHww"} newsUrl={element.url ? element.url : ""} />
              </div>
))}
        </div>
        <div className="gobtn">
          <button disabled={this.state.page<=1} type="button" class="btn" onClick={this.handlePrevClick}>&larr; Previous</button>
          <button type="button" className="btn" disabled={this.state.isNextButtonDisabled} onClick={this.handleNextClick}>
  Next &rarr;
           </button>

        </div>
      </div>
      )
  }
}
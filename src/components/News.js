import React, { Component } from 'react'
import NewsItems from './NewsItems'

export class News extends Component {

//     articles = [
//     {
//       "source": {
//         "id": "the-verge",
//         "name": "The Verge"
//       },
//       "author": "Emma Roth",
//       "title": "Trump’s media company says it’s buying $2.5 billion in Bitcoin",
//       "description": "President Donald Trump’s media company could soon own $2.5 billion in Bitcoin. On Tuesday, Trump Media announced that it’s working with “approximately 50 institutional investors” to sell and issue $1.5 billion in stock and $1 billion in convertible notes. The…",
//       "url": "https://www.theverge.com/news/674684/trump-media-bitcoin-treasury-deal",
//       "urlToImage": "https://platform.theverge.com/wp-content/uploads/sites/2/2025/03/STK466_ELECTION_2024_CVirginia_F.webp?quality=90&strip=all&crop=0%2C10.732984293194%2C100%2C78.534031413613&w=1200",
//       "publishedAt": "2025-05-27T14:31:48Z",
//       "content": "The Truth Social operator will get the money from a deal with investors.\r\nThe Truth Social operator will get the money from a deal with investors.\r\nPresident Donald Trumps media company could soon ow… [+1795 chars]"
//     },
//     {
//       "source": {
//         "id": "the-verge",
//         "name": "The Verge"
//       },
//       "author": "Justine Calma",
//       "title": "AI could consume more power than Bitcoin by the end of 2025",
//       "description": "AI could soon surpass Bitcoin mining in energy consumption, according to a new analysis that concludes artificial intelligence could use close to half of all the electricity consumed by data centers globally by the end of 2025. The estimates come from Alex de…",
//       "url": "https://www.theverge.com/climate-change/676528/ai-data-center-energy-forecast-bitcoin-mining",
//       "urlToImage": "https://platform.theverge.com/wp-content/uploads/sites/2/2025/05/STK428_CRYPTO_D.jpg?quality=90&strip=all&crop=0%2C10.732984293194%2C100%2C78.534031413613&w=1200",
//       "publishedAt": "2025-05-29T18:58:37Z",
//       "content": "Researchers forecast rising electricity demand from AI despite efficiency gains. \r\nResearchers forecast rising electricity demand from AI despite efficiency gains. \r\nAI could soon surpass Bitcoin min… [+6373 chars]"
//     },
//     {
//       "source": {
//         "id": null,
//         "name": "Gizmodo.com"
//       },
//       "author": "Lucas Ropek",
//       "title": "Family of Bitcoin Influencers Hide Their Crypto Codes on Four Continents to Deter Kidnappers",
//       "description": "That's certainly one way to get the crypto thieves off your back, maybe...",
//       "url": "https://gizmodo.com/family-of-bitcoin-influencers-hide-their-crypto-codes-on-four-continents-to-deter-potential-kidnappers-2000613575",
//       "urlToImage": "https://gizmodo.com/app/uploads/2024/11/dean-skurka-crypto.jpg",
//       "publishedAt": "2025-06-10T15:00:26Z",
//       "content": "A family who struck it big in Bitcoin investing years ago has a quite unusual strategy to deter potential kidnappers: hiding their cold storage seed phrases in hidden bunkers located all over the wor… [+2254 chars]"
//     },
//     {
//       "source": {
//         "id": null,
//         "name": "Gizmodo.com"
//       },
//       "author": "Lucas Ropek",
//       "title": "19-Year-Old to Plead Guilty to Hacking Charges After Data Breach of Millions of Schoolchildren",
//       "description": "A company with the personal information of tens of millions of children was breached last year.",
//       "url": "https://gizmodo.com/19-year-old-to-plead-guilty-to-hacking-charges-after-data-breach-of-millions-of-schoolchildren-2000605540",
//       "urlToImage": "https://gizmodo.com/app/uploads/2022/03/17144a5c640c20e7a04ffa123ce0fd2a.jpg",
//       "publishedAt": "2025-05-21T18:53:36Z",
//       "content": "A Massachusetts teenager has pled guilty to a number of hacking crimes, including his role in the penetration of a cloud company with data on tens of millions of children, the government says.\r\nOn We… [+2678 chars]"
//     }
//   ]

  constructor(props){
    super(props);
    // console.log("constructor");
    this.state= {
        // articles:this.articles, fetch from code
        articles:[], // fetch from api
        loading:false
    }
  }

  async componentDidMount(){
    let url = `https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=${this.props.apiKey}`;
    let data = await fetch(url);
    let parsedata = await data.json();
    console.log(parsedata); 
    this.setState({articles:parsedata.articles})
    

    
  }

  render() {
  
    return (
        <div className='container my-3'>
            <h2 className='text-center my-4'>News App - TopHeadlines</h2>
            
         <div className='row'>
            {this.state.articles.map((element)=>{
            return <div className='col-md-4'  key={element.url}>
               <NewsItems  title={element.title.length >=60?element.title.slice(0,30)+"...":element.title} desc={element.description.slice(0,60)} imageUrl={element.urlToImage} newsUrl={element.url}/>
            </div>
            })}
            
            
         </div>
        
        </div>
     
    )
  }
}

export default News

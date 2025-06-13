import React, { Component } from 'react'
import NewsItems from './NewsItems'

export class News extends Component {
    articles = [
    {
      "source": {
        "id": "the-verge",
        "name": "The Verge"
      },
      "author": "Emma Roth",
      "title": "Trump’s media company says it’s buying $2.5 billion in Bitcoin",
      "description": "President Donald Trump’s media company could soon own $2.5 billion in Bitcoin. On Tuesday, Trump Media announced that it’s working with “approximately 50 institutional investors” to sell and issue $1.5 billion in stock and $1 billion in convertible notes. The…",
      "url": "https://www.theverge.com/news/674684/trump-media-bitcoin-treasury-deal",
      "urlToImage": "https://platform.theverge.com/wp-content/uploads/sites/2/2025/03/STK466_ELECTION_2024_CVirginia_F.webp?quality=90&strip=all&crop=0%2C10.732984293194%2C100%2C78.534031413613&w=1200",
      "publishedAt": "2025-05-27T14:31:48Z",
      "content": "The Truth Social operator will get the money from a deal with investors.\r\nThe Truth Social operator will get the money from a deal with investors.\r\nPresident Donald Trumps media company could soon ow… [+1795 chars]"
    },
    {
      "source": {
        "id": "the-verge",
        "name": "The Verge"
      },
      "author": "Justine Calma",
      "title": "AI could consume more power than Bitcoin by the end of 2025",
      "description": "AI could soon surpass Bitcoin mining in energy consumption, according to a new analysis that concludes artificial intelligence could use close to half of all the electricity consumed by data centers globally by the end of 2025. The estimates come from Alex de…",
      "url": "https://www.theverge.com/climate-change/676528/ai-data-center-energy-forecast-bitcoin-mining",
      "urlToImage": "https://platform.theverge.com/wp-content/uploads/sites/2/2025/05/STK428_CRYPTO_D.jpg?quality=90&strip=all&crop=0%2C10.732984293194%2C100%2C78.534031413613&w=1200",
      "publishedAt": "2025-05-29T18:58:37Z",
      "content": "Researchers forecast rising electricity demand from AI despite efficiency gains. \r\nResearchers forecast rising electricity demand from AI despite efficiency gains. \r\nAI could soon surpass Bitcoin min… [+6373 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Gizmodo.com"
      },
      "author": "Lucas Ropek",
      "title": "Family of Bitcoin Influencers Hide Their Crypto Codes on Four Continents to Deter Kidnappers",
      "description": "That's certainly one way to get the crypto thieves off your back, maybe...",
      "url": "https://gizmodo.com/family-of-bitcoin-influencers-hide-their-crypto-codes-on-four-continents-to-deter-potential-kidnappers-2000613575",
      "urlToImage": "https://gizmodo.com/app/uploads/2024/11/dean-skurka-crypto.jpg",
      "publishedAt": "2025-06-10T15:00:26Z",
      "content": "A family who struck it big in Bitcoin investing years ago has a quite unusual strategy to deter potential kidnappers: hiding their cold storage seed phrases in hidden bunkers located all over the wor… [+2254 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Gizmodo.com"
      },
      "author": "Lucas Ropek",
      "title": "19-Year-Old to Plead Guilty to Hacking Charges After Data Breach of Millions of Schoolchildren",
      "description": "A company with the personal information of tens of millions of children was breached last year.",
      "url": "https://gizmodo.com/19-year-old-to-plead-guilty-to-hacking-charges-after-data-breach-of-millions-of-schoolchildren-2000605540",
      "urlToImage": "https://gizmodo.com/app/uploads/2022/03/17144a5c640c20e7a04ffa123ce0fd2a.jpg",
      "publishedAt": "2025-05-21T18:53:36Z",
      "content": "A Massachusetts teenager has pled guilty to a number of hacking crimes, including his role in the penetration of a cloud company with data on tens of millions of children, the government says.\r\nOn We… [+2678 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Yahoo Entertainment"
      },
      "author": "Brad Smith",
      "title": "Bitcoin conference: DJT, GameStop, & more race to buy bitcoin",
      "description": "The 2025 annual bitcoin (BTC-USD) conference is underway, with US Vice President JD Vance and Donald Trump Jr. in attendance. BitcoinIRA COO and co-founder...",
      "url": "https://finance.yahoo.com/video/bitcoin-conference-djt-gamestop-more-161225855.html",
      "urlToImage": "https://s.yimg.com/ny/api/res/1.2/PeDip4LnQzWJto1I_n9n.w--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD02NzY-/https://s.yimg.com/os/creatr-uploaded-images/2025-05/e5d9acd0-3bdb-11f0-abef-a3a3393b0258",
      "publishedAt": "2025-05-28T16:12:25Z",
      "content": "Bitcoin pulling back after touching fresh all-time highs last week, the cryptocurrency trading just above 107,000 right now. This is top government officials and crypto heavyweights attend the 2025 B… [+5947 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Slashdot.org"
      },
      "author": "msmash",
      "title": "Pakistan Allocates 2,000 Megawatts of Electricity To Bitcoin Mining, AI Data Centres",
      "description": "Pakistan will allocate 2,000 megawatts (MW) of electricity in the first phase of a national initiative to power bitcoin mining and AI data centres, its finance ministry said on Sunday. The allocation is part of Islamabad's plans to use its surplus electricity…",
      "url": "https://slashdot.org/story/25/05/26/1549251/pakistan-allocates-2000-megawatts-of-electricity-to-bitcoin-mining-ai-data-centres",
      "urlToImage": "https://a.fsdn.com/sd/topics/bitcoin_64.png",
      "publishedAt": "2025-05-26T17:00:00Z",
      "content": "The bomb will never go off. I speak as an expert in explosives.\r\n-- Admiral William Leahy, U.S. Atomic Bomb Project"
    },
    {
      "source": {
        "id": "business-insider",
        "name": "Business Insider"
      },
      "author": "fdemott@businessinsider.com (Filip De Mott)",
      "title": "GameStop just bought $500 million of bitcoin in its first-ever crypto investment",
      "description": "GameStop announced the purchase of 4,710 bitcoins on Wednesday. The video game retailer said in March that it would start amassing crypto.",
      "url": "https://www.businessinsider.com/gamestop-bitcoin-price-investment-strategy-trump-media-djt-gme-metaplanet-2025-5",
      "urlToImage": "https://i.insider.com/683700ad6ffb6822ec619ae0?width=1024&format=jpeg",
      "publishedAt": "2025-05-28T14:20:35Z",
      "content": "GameStop has made good on a promise to buy bitcoin, announcing on Wednesday that it purchased 4,710 tokens. \r\nAt current prices, that's worth about $513 million. The purchase comes in a bullish stret… [+1243 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Yahoo Entertainment"
      },
      "author": "Brian McGleenon",
      "title": "Bitcoin price holds above $102,000 as BlackRock leads fund inflows",
      "description": "Bitcoin traded relatively flat on Thursday as institutional investors resumed allocations into US-based spot bitcoin exchange-traded funds on Wednesday.",
      "url": "https://uk.finance.yahoo.com/news/bitcoin-price-blackrock-fund-inflows-083952678.html",
      "urlToImage": "https://s.yimg.com/ny/api/res/1.2/VccZ29AP5EbMUUA1Bt5b8A--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD03Njk-/https://s.yimg.com/os/creatr-uploaded-images/2024-03/1a844b70-e77d-11ee-afed-082fc5f5ad1b",
      "publishedAt": "2025-05-15T08:39:52Z",
      "content": "Bitcoin (BTC-USD) traded relatively flat on Thursday, priced just above $102,200 (£76,989) down around 1% on the day as institutional investors resumed allocations into US-based spot bitcoin exchange… [+2465 chars]"
    }
  ]

  constructor(){
    super();
    console.log("constructor");
    this.state= {
        articles:this.articles,
        loading:false
    }
    
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

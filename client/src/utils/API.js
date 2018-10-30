import axios from "axios";

export default {
  searchArticle: () => {
    //setting variables
    const apiKey = "b9f91d369ff59547cd47b931d8cbc56b:0:74623931";
    let searchTerm = "redskins";
    let startYear = "2016";
    let endYear = "2018"
    const queryUrl = `https://api.nytimes.com/svc/search/v2/articlesearch.json?${apiKey}&q${searchTerm}&begin_date=${startYear}0101${endYear}1231`

    //get request:
    return axios.get("/api/articles", queryUrl);

  }
}


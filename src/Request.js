const key=`7860b98d86c0753990b6dda94414fff3`
// const Requests={
//  requestPopulars:`https://api.themoviedb.org/3/movie/popular?api_key=${key}language=en-US&page=1`,
// //  requestToprated:`https://api.themoviedb.org/3/discover/movie?api_key=${key}include_adult=false&include_video=false&language=en-US&page=1&sort_by=vote_average.desc&without_genres=99,10755&vote_count.gte=200`,
// //  requestUpcoming:`https://api.themoviedb.org/3/discover/movie?api_key=${key}include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_release_type=2|3&release_date.gte={min_date}&release_date.lte={max_date}`,
// };
// export default Requests
 const Requests={
    requestPopular:`https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
    requestTopRated:` https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`,
    requestTrending:` https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=2`,
    requestHorror: `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=horror&page=1&include_adult=false`,
    requestUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`,
 }
 export default Requests

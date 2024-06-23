import axios from 'axios';

export const URL_BACK = `http://localhost:3004`;

export const URL_TMDB = `https://api.themoviedb.org`;
export const TMDB_KEY = `e68628f5ff1c3314cd74c0ddba7a5819`;
export const TMDB_SEARCH = `https://api.themoviedb.org/3/search/movie/`;
export const TMDB_IMG = `https://image.tmdb.org/t/p/w500/`;

export const TMDB_LANGS = `https://api.themoviedb.org/3/discover/movie?api_key=e68628f5ff1c3314cd74c0ddba7a5819&language=pt-BR&with_original_language=es|fr|it|de`;
export const TMDB_ES = `https://api.themoviedb.org/3/discover/movie?api_key=e68628f5ff1c3314cd74c0ddba7a5819&language=pt-BR&with_original_language=es`;
export const TMDB_IT = `https://api.themoviedb.org/3/discover/movie?api_key=e68628f5ff1c3314cd74c0ddba7a5819&language=pt-BR&with_original_language=it`;
export const TMDB_FR = `https://api.themoviedb.org/3/discover/movie?api_key=e68628f5ff1c3314cd74c0ddba7a5819&language=pt-BR&with_original_language=fr`;
export const TMDB_DE = `https://api.themoviedb.org/3/discover/movie?api_key=e68628f5ff1c3314cd74c0ddba7a5819&language=pt-BR&with_original_language=de`;



// app.get('/movie_by_title', async (req: Request, res: Response) => {
//   console.log(req.query.title)
//   const title_string = String(req.query.title)
//   const title = title_string.split(" ").join("+")
//   console.log(title)
//   const url = `https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=${title}`
//   console.log(url)
//   const list = await axios.get(url)
//   res.send(list.data)
// })

// app.get('/get_favorite_movies/:id', async (req: Request, res: Response) => {
//   const id = req.params.id
//   const movies = await prisma.movie.findMany({
//     where: {
//       user_id: parseInt(id),
//     },
//   })
//   res.send(movies)
// })

// app.post('/user', async (req: Request, res: Response) => {
  
//   console.log(req.body)
//   const {username, email, password, age} = req.body

//   const user = await prisma.user.create({
//     data: {
//       username: username,
//       email: email,
//       password: password,
//       age: parseInt(age),
//       favorite_movies: {
//         create:[]
//       }
//     },
//   }) 
//   console.log(user)
//   res.send(user)
// })

// app.post('/login', async (req: Request, res: Response) => {
  
//   console.log(req.body)
//   const {email, password} = req.body

//   const user = await prisma.user.findFirst({
//     where: {
//       email: email,
//       password: password,
//     },
//   }) 
//   console.log(user)
//   let message = ""
//   if(user == null) {
//     console.log("credenciais de login incorretas")
//     message = "credenciais de login incorretas"
//   } else {
//     message = "login realizado com sucesso"
//   }
//   res.send(message)
// })

// app.post('/add_favorite', async (req: Request, res: Response) => {

//   console.log(req.body)
//   const {user_id, movie_id, title, vote_average, original_language, poster_path } = req.body

//   const movie = await prisma.movie.create({
//     data: {
//       user_id: parseInt(user_id),
//       movie_id: parseInt(movie_id),
//       title: title,
//       vote_average: vote_average,
//       original_language: original_language,
//       poster_path: poster_path,
//     },
//   }) 

//   res.send({
//     message: "movie added to favorites succesfully",
//     movie: movie
//   })
// })

// app.post('/remove_favorite', async (req: Request, res: Response) => {

//   console.log(req.body)
//   const {user_id, movie_id} = req.body
//   const findMovie = await prisma.movie.findFirst({
//     where: {
//       user_id: parseInt(user_id),
//       movie_id: parseInt(movie_id)
//     }
//   })

//   const id = findMovie?.id 

//   const removeMovie = await prisma.movie.delete({
//     where: {
//       id:id
//     },
//   })

//   res.send({
//     message: "movie removed from favorites succesfully",
//     movie: removeMovie
//   })
// })

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })

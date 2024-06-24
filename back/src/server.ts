import { PrismaClient } from "@prisma/client"
import { Request, Response } from "express"
import cors from "cors"
import axios from 'axios'

const API_URL = `https://api.themoviedb.org/3`
const API_KEY = `04c35731a5ee918f014970082a0088b1`
const prisma = new PrismaClient()

const express = require('express')
const app = express()
const port = 3004

app.use(express.json());
app.use(cors())

app.get('/test', (req: Request, res: Response) => {
  res.send('Hello World!')
})

app.get('/movie_list', async (req: Request, res: Response) => {

  const list = await axios.get(`${API_URL}/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}&page=1`)
  console.log(list)
  res.send(list.data)
})

app.get('/movie_by_genre', async (req: Request, res: Response) => {
  const genre = req.query.genre
  const language = req.query.language
  console.log(genre)
  console.log(language)
  const url = `${API_URL}/discover/movie?api_key=${API_KEY}&with_original_language=${language}&with_genres=${genre}`
  const list = await axios.get(url)
  res.send(list.data)
})

app.get('/movie_by_title', async (req: Request, res: Response) => {
  console.log(req.query.title)
  const title_string = String(req.query.title)
  const title = title_string.split(" ").join("+")
  console.log(title)
  const url = `${API_URL}/search/movie?&api_key=${API_KEY}&query=${title}&with_original_languages=es|fr|it|de`
  console.log(url)
  const list = await axios.get(url)
  res.send(list.data)
})

app.get('/favorite_movies/:email', async (req: Request, res: Response) => {
  const { email } = req.params;
  const findUser = await prisma.user.findUnique({
    where: {
      email: email
    }
  })
  
  if (findUser) {
    const movies = await prisma.movie.findMany({
      where: {
        user_id: findUser.id
      },
    })
    res.send(movies)
  }
})

app.post('/user', async (req: Request, res: Response) => {
  
  console.log(req.body)
  const {username, email, password, age} = req.body

  const user = await prisma.user.create({
    data: {
      username: username,
      age: parseInt(age),
      email: email,
      password: password,
      favorite_movies: {
        create:[]
      }
    },
  }) 
  console.log(user)
  res.send(user)
})

app.post('/login', async (req: Request, res: Response) => {
  
  console.log(req.body)
  const {email, password} = req.body

  const user = await prisma.user.findFirst({
    where: {
      email: email,
      password: password,
    },
  }) 
  console.log(user)
  let message = ""
  let status_code
  if(user == null) {
    console.log("credenciais de login incorretas")
    message = "credenciais de login incorretas"
    status_code = 400
  } else {
    message = "login realizado com sucesso"
    status_code = 200
  }
  res.send(
    {
      message: message,
      status_code: status_code
    }
  )
})

app.post('/add_favorite', async (req: Request, res: Response) => {

  console.log(req.body)
  const { email, movie_id, title, vote_average, original_language, poster_path } = req.body

  const findUser = await prisma.user.findUnique({
    where: {
      email: email
    }
  })

  if (findUser) {
    const user_id = findUser.id;
    await prisma.movie.create({
      data: {
        user_id: user_id,
        movie_id: parseInt(movie_id),
        title: title,
        vote_average: vote_average,
        original_language: original_language,
        poster_path: poster_path,
      },
    });
    return res.send({
      message: "movie added to favorites succesfully"
    })
  }
  
  // const user = await prisma.user.update({
  //   data: {
  //     favorite_movies: {
  //       push: movie 
  //     }
  //   },
  // }) 
})

app.post('/remove_favorite', async (req: Request, res: Response) => {

  console.log(req.body)
  const {email, movie_id} = req.body


  const findUser = await prisma.user.findUnique({
    where: {
      email: email
    }
  })
  const user_id = findUser?.id == undefined ? 0 : findUser.id  

  const findMovie = await prisma.movie.findFirst({
    where: {
      user_id: user_id,
      movie_id: parseInt(movie_id)
    }
  })

  const id = findMovie?.id 

  const removeMovie = await prisma.movie.delete({
    where: {
      id:id
    },
  })

  res.send({
    message: "movie removed from favorites succesfully",
    movie: removeMovie
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

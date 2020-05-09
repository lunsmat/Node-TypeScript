import Express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'

import routes from './routes'

class App {
  public express:Express.Application

  public constructor () {
    this.express = Express()
    this.middlewares()
    this.database()
    this.routes()
  }

  private middlewares ():void {
    this.express.use(Express.json())
    this.express.use(cors())
  }

  private database ():void{
    mongoose.connect('mongodb+srv://root:admin@test-ygtxh.mongodb.net/test?retryWrites=true&w=majority', {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
  }

  private routes ():void{
    this.express.use(routes)
  }
}

export default new App().express

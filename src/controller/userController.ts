import { Request, Response } from 'express'
import User from '../schemas/User'
// eslint-disable-next-line @typescript-eslint/class-name-casing
class userController {
  public async index (req: Request, res:Response):Promise<Response> {
    const users = await User.find()
    return res.json(users)
  }

  public async create (req: Request, res: Response):Promise<Response> {
    const user = await User.create(req.body)
    return res.json(user)
  }
}

// eslint-disable-next-line new-cap
export default new userController()

import { Request, Response, Router } from 'express';
import userService from '../services/user-service';

const userRoutes = Router();

userRoutes.post("/register", async (req: Request, res: Response) => {
  const { password, email, firstName, lastName } = req.body;

  if (!password || !email || !firstName || !lastName) {
    return res.status(400).json({ message: "Invalid body" });
  }

  const maybeUser = await userService.findUserByEmail(email);
  if (maybeUser) {
    return res.status(409).json({ message: "Email or username already exists" });
  }

 try {
    await userService.registerUser({email, password, lastName, firstName});
    return res.status(201);
 } catch (ex) {
    return res.status(500).json({ message: ex})
 }
});

userRoutes.post("/login", async (req: Request, res: Response) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Invalid body" });
  }

  const currentUser = (await userService.findUserByEmail(email))[0];

  if (!currentUser) {
    return res.status(400).json({ message: "Not valid email or password" });
  }

  const isPasswordCorrect = userService.isValidPassword(currentUser, password) 
  
  if (!isPasswordCorrect) {
    return res.status(400).json({ message: "Not valid email or password" });
  }

  const jwt = userService.generateJWT(currentUser);

  return res.status(200).json({ jwt: jwt });
});

export default userRoutes;
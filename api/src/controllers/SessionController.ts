import fs from "fs";
import { resolve } from "path";
import { Request, Response } from "express";

interface UsersInterface {
  username: string;
  password: string;
}

class SessionController {
  async verify(request: Request, response: Response) {
    const filePath = resolve(process.cwd(), "src", "config", "Users.json");
    const data = fs.readFileSync(filePath).toString();
    const users = JSON.parse(data) as Array<UsersInterface>;

    const { username, password } = request.body;
    
    const user = users.find((u) => u.username == username && u.password == password );
    if (!user) {
      return response.status(401).json({ msg: 'Invalid user!' })
    }

    return response.send();
  }
}

export default SessionController;
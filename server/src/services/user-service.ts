import { UserEntity } from "../entity/UserEntity";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

interface UserRegisterSchema {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
};

class UserService {
    async registerUser(input: UserRegisterSchema) {
      const { email, firstName, lastName, password} = input;

      const hashedPassword = bcrypt.hashSync(password, Number(process.env.SALT_ROUNDS) ?? 10);

      const newUser = {email, firstName, lastName, password: hashedPassword, createdAt: new Date(), updatedAt: new Date()};

      const user = UserEntity.create(newUser as UserEntity);
      UserEntity.save(user);
    }

    generateJWT(currentUser: UserEntity) {
      const tokenBody = {
        user_id: currentUser.id,
        email: currentUser.email,
        firstName: currentUser.firstName,
        lastName: currentUser.lastName
      }
    
      return jwt.sign(tokenBody,
        "TINKO",
        {
          expiresIn: "8h",
        }
      );
    }

    async findUserByEmail(email: string) {
      return UserEntity.findBy({ email });
    }

    isValidPassword(user: UserEntity, rawPassword: string) {
      return bcrypt.compareSync(rawPassword, user.password)
    }
};

export default new UserService();
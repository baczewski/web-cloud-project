import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import userService from '../services/user-service';

interface UserModel {
    user_id: string;
    email: string;
    firstName: string;
    lastName: string;
};

const verify = (token: string, key: string) => {
    return new Promise((resolve, reject) => {
        jwt.verify(token, key, (error, decoded) => {
            if (error) {
                reject(error);
                return;
            }

            resolve(decoded);
        });
    });
}

export default async function auth(request: Request, response: Response, next: () => void) {
    const token = request.headers.authorization;
    const jwtKey = "TINKO";

    if (!token) {
        return response.status(401).json({ error: 'Unauthorized.' });
    }

    const [tokenType, jwtToken] = token.split(' ');

    if (tokenType !== 'Bearer') {
        return response.status(400).json({ error: 'Invalid token type.' });
    }

    try {
        const decodedUser = await verify(jwtToken, jwtKey) as UserModel;
        const user = await userService.findUserById(decodedUser.user_id);

        if (!user) {
            return response.status(401).json({ error: 'Unauthorized.' });
        }

        response.locals.user = user;

        next();
    } catch (error) {
        response.status(400).json({ error: 'Invalid token.' });
    }
}

export function currentUser(response: Response): UserModel {
    return response.locals.user;
}
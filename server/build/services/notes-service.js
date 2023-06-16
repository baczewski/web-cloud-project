"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UserEntity_1 = require("../entity/UserEntity");
;
class NotesService {
    async createNote(input, email) {
        const { title, description } = input;
        const user = await UserEntity_1.UserEntity.findOneBy({ email });
        console.log(user);
        // const userRepository = AppDataSource.getRepository(UserEntity);
        // const user = await userRepository.findOneBy({ email });
        if (!user) {
        }
    }
}
exports.default = new NotesService();

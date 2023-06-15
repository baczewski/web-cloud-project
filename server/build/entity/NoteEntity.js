"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NoteEntity = void 0;
const typeorm_1 = require("typeorm");
const AbstractBaseEntity_1 = require("./AbstractBaseEntity");
const UserEntity_1 = require("./UserEntity");
let NoteEntity = exports.NoteEntity = class NoteEntity extends AbstractBaseEntity_1.AbstractBaseEntity {
};
__decorate([
    (0, typeorm_1.ManyToOne)(() => UserEntity_1.UserEntity),
    __metadata("design:type", UserEntity_1.UserEntity)
], NoteEntity.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false }),
    __metadata("design:type", String)
], NoteEntity.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false, type: "varchar", length: 4096 }),
    __metadata("design:type", String)
], NoteEntity.prototype, "description", void 0);
exports.NoteEntity = NoteEntity = __decorate([
    (0, typeorm_1.Entity)({ name: "NOTE" })
], NoteEntity);

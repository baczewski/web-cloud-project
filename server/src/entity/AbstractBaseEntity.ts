import { PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, BaseEntity } from "typeorm";

export abstract class AbstractBaseEntity extends BaseEntity {
    @PrimaryGeneratedColumn("uuid")
    id!: string

    @CreateDateColumn()
    createdAt!: Date

    @UpdateDateColumn()
    updatedAt!: Date
}
import { Entity, Column, Unique, OneToMany } from "typeorm"
import { AbstractBaseEntity } from "./AbstractBaseEntity";
import { NoteEntity } from "./NoteEntity";

@Entity({ name: "USER" })
@Unique(["email"])
export class UserEntity extends AbstractBaseEntity {
    @Column({ nullable: false })
    email!: string

    @Column({ nullable: false })
    firstName!: string

    @Column({ nullable: false })
    lastName!: string

    @Column({ nullable: false })
    password!: string

    @OneToMany(() => NoteEntity, (note) => note.user)
    notes!: NoteEntity[]
}

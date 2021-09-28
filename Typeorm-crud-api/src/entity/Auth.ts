import { Entity, Column, PrimaryGeneratedColumn, BeforeInsert, ManyToOne, JoinColumn } from "typeorm";
import UserTypes from "./UserRol";

import bcrypt from "bcryptjs";
@Entity()
export class Auth {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true, length: 100 })
  mail: string;
  @Column({ length: 50 })
  name: string;
  @Column()
  pass: string;
  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  created_at: string;
  @ManyToOne((type) => UserTypes, (usertype) => usertype.id, { eager: true })
  @JoinColumn({ name: "id_tipouser" })
  id_tipouser: UserTypes;

  @BeforeInsert()
  cryptPassword() {
    const salt = bcrypt.genSaltSync(10);
    this.pass = bcrypt.hashSync(this.pass, salt);
  }

  @BeforeInsert()
  clearStringSpaces() {
    this.name = this.name.replace(/ /g, "_");
    this.name = this.name.toLowerCase();
    this.mail = this.mail.replace(/ /g, "");
  }
}

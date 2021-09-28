import { Entity, Column, PrimaryGeneratedColumn, BeforeInsert } from "typeorm";

@Entity("tipo_usuario")
class UserTypes {
  @PrimaryGeneratedColumn()
  id: Number;

  @Column({ unique: true, length: 50 })
  name: string;

  @BeforeInsert()
  clearStringSpaces() {
    this.name = this.name.replace(/ /g, "_");
    this.name = this.name.toLowerCase();
  }
}

export default UserTypes;
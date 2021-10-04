import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import { Auth } from "./Auth";
@Entity()
export class Task {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  task: string;
  @Column()
  status: string;
  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  created_at: string;
  @ManyToOne(() => Auth, (auth) => auth.id, { eager: true })
  @JoinColumn({ name: "id_user" })
  id_user: Auth;
}

import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateCoiumn,
  UpDateColumn,
} from "typeorm"

@Entity()
export class Item {
  @PrimaryGeneratedColumn()
  readonly id: number;

  @Column()
  todo: string;

  @Column("datetime")
  limit: Date;

  @Column("boolean", {default: false})
  idDone: boolean;

  @Column()
  deletePassword: string;

  @CreateDateColumn()
  readonly createdAt?: Date;

  @UpDateColumn()
  readonly updated?: Date;
}
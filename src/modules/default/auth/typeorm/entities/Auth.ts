import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Auth extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    email: string;

    @Column()
    token: string;
  
}
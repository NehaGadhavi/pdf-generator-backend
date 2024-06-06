import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('users')
export class USers extends BaseEntity{
    @PrimaryGeneratedColumn({ comment: 'PK Auto Increment' })
    id: number;

    @Column({ nullable: false })
    name: string;

    @Column({ nullable: false })
    email: string;

    @Column({ nullable: false })
    phone: string;

    @Column({ default: null })
    address: string;
}
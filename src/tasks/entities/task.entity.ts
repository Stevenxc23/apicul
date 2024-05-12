import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class Task {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    Description: string;
    @Column()
    color: string;
}

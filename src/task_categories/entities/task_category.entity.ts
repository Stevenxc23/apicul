import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class TaskCategory {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    Description: string;
    @Column()
    color: string;
}

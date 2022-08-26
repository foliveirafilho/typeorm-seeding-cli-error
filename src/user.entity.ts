import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('User')
export class UserEntity {
    @PrimaryGeneratedColumn({ type: 'tinyint', unsigned: true })
    id: number;

    @Column({ type: 'varchar', length: 100 })
    fullName: string;
    
    @Column({ type: 'varchar', length: 100 })
    email: string;
}
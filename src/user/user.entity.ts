// src/user/user.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, OneToMany,CreateDateColumn, UpdateDateColumn } from 'typeorm';
import {Crp} from '../cr-p/cr-p.entity'

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstname: string;

  @Column()
  lastname: string;

  @Column()
  username: string;

  @Column()
  password: string;

  @Column()
  userType: string; 

  @Column()
  status: string;

  // @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  // created_at: Date;

  // @UpdateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
  // updated_at: Date;

  @OneToMany(() => Crp, crp => crp.user)
  crp: Crp[];
}

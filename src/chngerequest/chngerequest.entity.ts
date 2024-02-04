

import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class CR {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  age: number;

  @Column({ type: 'mediumblob', nullable: true }) 
  image: Buffer;
}

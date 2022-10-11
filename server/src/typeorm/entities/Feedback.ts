import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'feedbacks' })
export class Feedback {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  message: string;

  @Column()
  createdAt: Date;
}

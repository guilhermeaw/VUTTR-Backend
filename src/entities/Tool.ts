import {
  Entity,
  Column,
  UpdateDateColumn,
  CreateDateColumn,
  PrimaryGeneratedColumn,
  OneToMany,
} from 'typeorm';

import ToolsTags from './ToolsTags';
import Tag from './Tag';

@Entity('tools')
class Tool {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  title: string;

  @Column()
  link: string;

  @Column()
  description: string;

  @OneToMany(() => ToolsTags, toolsTags => toolsTags.tag)
  tags: Tag[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  upated_at: Date;
}

export default Tool;

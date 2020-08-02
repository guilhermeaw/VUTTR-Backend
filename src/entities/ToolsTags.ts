import {
  Entity,
  CreateDateColumn,
  UpdateDateColumn,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
} from 'typeorm';

import Tool from './Tool';
import Tag from './Tag';

@Entity('tools_tags_mapping')
class ToolsTags {
  @PrimaryColumn()
  tool_id: number;

  @PrimaryColumn()
  tag_id: number;

  @ManyToOne(() => Tool)
  @JoinColumn({ name: 'tool_id' })
  tool: Tool;

  @ManyToOne(() => Tag)
  @JoinColumn({ name: 'tag_id' })
  tag: Tag;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default ToolsTags;

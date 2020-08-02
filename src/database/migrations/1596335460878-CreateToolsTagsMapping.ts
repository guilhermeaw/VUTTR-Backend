import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreateToolsTagsMapping1596335460878
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'tools_tags_mapping',
        columns: [
          {
            name: 'tool_id',
            isPrimary: true,
            type: 'int',
          },
          {
            name: 'tag_id',
            isPrimary: true,
            type: 'int',
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
        foreignKeys: [
          {
            name: 'ToolsTagsMappingToolFK',
            referencedTableName: 'tools',
            referencedColumnNames: ['id'],
            columnNames: ['tool_id'],
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
          },
          {
            name: 'ToolsTagsMappingTagFK',
            referencedTableName: 'tags',
            referencedColumnNames: ['id'],
            columnNames: ['tag_id'],
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('tools_tags_mapping');
  }
}

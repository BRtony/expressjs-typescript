import { MigrationInterface, QueryRunner, Table } from "typeorm";


export class CreateUsersTable1632509456823 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'users',
            columns: [ // gerando colunas da tabela
                {
                    name: 'id', // coluna com nome 'id'
                    type: 'int', // tipo 'uuid'
                    isPrimary: true,
                    generationStrategy: 'increment',
                },
                {
                    name: 'email',
                    type: 'varchar',
                    isUnique: true,
                },
                {
                    name: 'password',
                    type: 'varchar',
                },
            ],
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('users');
    }
}

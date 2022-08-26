import { MigrationInterface, QueryRunner } from "typeorm";

export class createUser1661477818029 implements MigrationInterface {
    name = 'createUser1661477818029'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE \`User\` (
                \`id\` tinyint UNSIGNED NOT NULL AUTO_INCREMENT,
                \`fullName\` varchar(100) NOT NULL,
                \`email\` varchar(100) NOT NULL,
                PRIMARY KEY (\`id\`)
            ) ENGINE = InnoDB
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            DROP TABLE \`User\`
        `);
    }

}

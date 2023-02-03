import { MigrationInterface, QueryRunner } from "typeorm";

export class default1675363974184 implements MigrationInterface {
    name = 'default1675363974184'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`ingredients\` (\`id\` varchar(36) NOT NULL, \`name\` varchar(255) NOT NULL, \`description\` varchar(255) NOT NULL, \`approximatedPrice\` float NOT NULL, \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), UNIQUE INDEX \`IDX_a955029b22ff66ae9fef2e161f\` (\`name\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX \`IDX_a955029b22ff66ae9fef2e161f\` ON \`ingredients\``);
        await queryRunner.query(`DROP TABLE \`ingredients\``);
    }

}

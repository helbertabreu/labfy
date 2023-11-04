import { MigrationInterface, QueryRunner } from "typeorm";

export class UserEntity1698868092967 implements MigrationInterface {
    name = 'UserEntity1698868092967'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "users" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "first_name" character varying(128) NOT NULL, "last_name" character varying(128) NOT NULL, "email" character varying(128) NOT NULL, "phone" character varying(12) NOT NULL, "position" character varying(128) NOT NULL, "institution" character varying(128) NOT NULL, "password" character varying(128) NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "users"`);
    }

}

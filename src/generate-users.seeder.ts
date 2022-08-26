import { Seeder } from '@jorgebodega/typeorm-seeding';
import { DataSource } from 'typeorm';

import { UserFactory } from './user.factory';

export default class GenerateUsersSeeder extends Seeder {
  async run(_dataSource: DataSource): Promise<void> {
    await new UserFactory().createMany(10);
  }
}
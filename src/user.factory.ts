import { faker } from '@faker-js/faker';
import { Constructable, FactorizedAttrs, Factory } from '@jorgebodega/typeorm-factory';
import { DataSource } from 'typeorm';
import { UserEntity } from './user.entity';

export class UserFactory extends Factory<UserEntity> {
  protected entity: Constructable<UserEntity>;

  protected dataSource: DataSource;

  protected attrs(): FactorizedAttrs<UserEntity> {
    return {
      fullName: faker.name.fullName(),
      email: faker.internet.email(),
    };
  }
}
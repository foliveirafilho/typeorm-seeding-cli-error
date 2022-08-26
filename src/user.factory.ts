import { faker } from '@faker-js/faker';
import { FactorizedAttrs, Factory } from '@jorgebodega/typeorm-factory';
import { DbDataSource } from './data-source';
import { UserEntity } from './user.entity';

export class UserFactory extends Factory<UserEntity> {
  protected entity = UserEntity;

  protected dataSource = DbDataSource;

  protected attrs(): FactorizedAttrs<UserEntity> {
    return {
      fullName: faker.name.fullName(),
      email: faker.internet.email(),
    };
  }
}
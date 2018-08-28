import { UsersmoduleModule } from './usersmodule.module';

describe('UsersmoduleModule', () => {
  let usersmoduleModule: UsersmoduleModule;

  beforeEach(() => {
    usersmoduleModule = new UsersmoduleModule();
  });

  it('should create an instance', () => {
    expect(usersmoduleModule).toBeTruthy();
  });
});

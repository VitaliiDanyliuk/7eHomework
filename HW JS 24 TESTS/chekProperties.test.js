
const { User } = require('./index');

describe(
    'Checking properties',
    () => {
        const user1 = new User(1001, 'Ivan', 'ivan@i.ua', 'Password123');
            it(
                'Checking id',
                () => {
                    expect(user1.id).toBe(1001);
                }
        );
            it(
                'Checking name',
                () => {
                    expect(user1.name).toBe('Ivan');
                }
        );
            it(
                'Checking email',
                () => {
                    expect(user1.email).toBe('ivan@i.ua');
                }
        );
            it(
                'Checking password',
                () => {
                    expect(user1.password).toBe('Password123');
                }
            );
    }
);
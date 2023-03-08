
const { User } = require('./index');

describe(
    'Checking Get methods',
    () => {
        const user1 = new User(1001, 'Ivan', 'ivan@i.ua', 'Password123');
            it(
                'Checking getId',
                () => {
                    expect(user1.getId()).toBe(1001);
                }
        );
            it(
                'Checking getName',
                () => {
                    expect(user1.getName()).toBe('Ivan');
                }
        );
            it(
                'Checking getEmail',
                () => {
                    expect(user1.getEmail()).toBe('ivan@i.ua');
                }
        );
    }
);
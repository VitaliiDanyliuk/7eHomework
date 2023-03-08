
const { User, UserSet } = require('./index');

describe(
    'Checking Set methods',
    () => {
        const user2 = new UserSet(new User(1002, 'Petro', 'Petro2000@i.ua', 'Password+123'));
            it(
                'Checking setEmail',
                () => {
                        user2.setEmail('Petro2000@i.ua');
                        expect(user2.getEmail()).toBe('Petro2000@i.ua');
        
                }
        );
            it(
                'Checking setPassword',
                () => {
                    user2.setPassword('Password+123');
                    expect(user2.password).toBe('Password+123');
                }
        );
    }
);

class User { 
    constructor(id, name, email, password) { 
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
    }

    getId() { 
        return this.id;
    }
    getName() { 
        return this.name;
    }
    getEmail() { 
        return this.email;
    }
}


class UserSet extends User { 
        constructor() { 
            super();
    }
        
    setEmail(email) { 
        if (/[A-z,0-9,!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g.test(email)) {
            this.email = email;
        } else { 
            throw new Error('Not correct email');
        }
        
    }
    setPassword(password) { 
        if (/[A-z,0-9,!@#$%^&*+-]{6,}/.test(password)) {
            this.password = password;
        } else { 
            throw new Error('Not correct password');    
        }

    }
}


module.exports = {User, UserSet}
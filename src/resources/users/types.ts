// Used for login requests
export interface UserLogin {
    email: string;
    password: string;
}

// Used for registration requests
export interface UserRegister extends UserLogin {
    username: string;
}

// Returned by authentication requests
export interface UserAuth extends UserBase {
    email: string;
    token: string;
}

// View of another user when logged in
export interface UserProfile extends UserBase {
    id: number;
    following: boolean;
}

export interface User extends UserBase {
    id: number;
    email: string;
    password_hash: string;
    password_salt: string;
}

interface UserBase {
    username: string;
    bio: string;
    image: string | null;
}

export interface UserData {
    username: string | null;
    password: string | null;
    id: number | null;
}

export interface UserState {
    isAuthorized: boolean;
    username: string;
    password: string;
    isLoading: boolean;
    requestedUser: UserData;
    isGotData: boolean;
    isError: boolean;
}


export interface Login {
    username: string;
    password: string;
}
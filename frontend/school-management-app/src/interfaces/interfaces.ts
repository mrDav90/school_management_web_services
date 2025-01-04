
export interface Etudiant {
    id?: number;
    firstName?: string;
    lastName?: string;
    email?: string;
    phone?: string;
    dateOfBirth?: string;
    gender?: Gender;
}

export interface Professeur {
    id?: number;
    firstName?: string;
    lastName?: string;
    email?: string;
    phone?: string;
}

export interface Classe {
    id?: number;
    name?: string;
}

export interface Matiere {
    id?: number;
    name?: string;
}

export enum Gender {
    MALE = "MALE",
    FEMALE = "FEMALE"
}
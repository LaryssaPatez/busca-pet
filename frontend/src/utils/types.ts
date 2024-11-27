export interface LostFoundCardProps {
    name: string;
    creator: string;
    location: string;
    status: string;
    imageUrl: string;
    idPost: number;
}

export interface HighlightedCardProps {
    name: string;
    keeper: string;
    history: string;
}

export interface LoginModalProps {
    closeModal: () => void
}

export interface IFormData {
    species: Species;
    status: Status;
    petName: string;
    imageName: File | null;
    description: string;
    city: string;
    neighborhood: string;
    state: string;
}

export type PetImageProps = {
    imgX?: number;
    imgY?: number;
    type: Species;
}

export type PetFilter = {
    searchTerm?: string;
    status?: string;
    city?: string;
    state?: string;
    species?: Species;
}

export type Species = 'Dog' | 'Cat';
export type Status = 'Lost' | 'Found';

export interface AuthData {
    token: string | null;
    user: string | null;
}

export interface AuthContextProps {
    authData: AuthData;
    setAuthData: React.Dispatch<React.SetStateAction<AuthData>>;
    logout: () => void;
}
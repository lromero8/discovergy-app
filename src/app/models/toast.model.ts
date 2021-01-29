export interface Toast {
    id?: string;
    heading: string;
    subheading: string;
    message: string;
    timeout: number;
    position: string;
}
export interface Toast {
    id?: string;
    header: string;
    class: string;
    autohide: boolean;
    delay?: number;
    message: string;
}
export interface Habit {
    id: string;
    name: string;
    description: string;
    color: string;
    completedDates: string[];
    icon: string;
    size: 'small' | 'medium' | 'large'
}
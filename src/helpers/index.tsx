export class Helpers{
    static generateId(): string {
        const first = Date.now().toString(36)
        const second = Math.random().toString(36).substring(2)

        return first + second 
    }
} 
import {
    ahorro,
    casa,
    comida,
    gastos,
    ocio,
    salud,
    suscripciones
} from "../assets"

export class Helpers {
    static generateId(): string {
        const first = Date.now().toString(36)
        const second = Math.random().toString(36).substring(2)

        return first + second
    }

    static getIcon(str: string): string {
        switch (str) {
            case "Ahorro": return ahorro
            case "Comida": return comida
            case "Hogar": return casa
            case "Otros Gastos": return gastos
            case "Entretenimiento": return ocio
            case "Salud": return salud
            case "Suscripiones": return suscripciones

            default: return ahorro
        }
    }

    static formatToUSD(value: number): string {
        return value.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD'
        })
    }
} 
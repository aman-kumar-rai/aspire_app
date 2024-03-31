import { generateCard } from "@/utils"

const addCard = (name: string) => {
    return new Promise((resolve): void => {
        setTimeout(() => {
            resolve(generateCard(name))
        }, 100 + Math.floor(Math.random() * 500))
    })
}

export {
    addCard
}
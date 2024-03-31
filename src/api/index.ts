import { generateCard } from "@/utils";
import { Card } from "@/types";

const addCard = (name: string, transactionsCount = 3) => {
    return new Promise<Card>((resolve): void => {
        setTimeout(() => {
            resolve(generateCard(name, transactionsCount));
        }, 100 + Math.floor(Math.random() * 500))
    })
}

export {
    addCard
}
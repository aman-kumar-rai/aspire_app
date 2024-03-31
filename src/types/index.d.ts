import { Currency } from "@faker-js/faker"

type Transaction = {
    amount: number,
    type: "credit" | "debit",
    date: Date,
    merchant: string
}

type Card = {
    name: string,
    currency: Currency,
    cardNumber: string,
    expiry: Date,
    cvv: string,
    balance: number,
    isFrozen: boolean;
    transactions: Transaction[]
}

export {
    Transaction,
    Card
}
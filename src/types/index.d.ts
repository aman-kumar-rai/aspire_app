import { Currency } from "@faker-js/faker"

type TransactionType = {
    amount: number,
    type: "credit" | "debit",
    date: Date,
    merchant: string
}

type CardType = {
    name: string,
    currency: Currency,
    cardNumber: string,
    expiry: Date,
    cvv: string,
    balance: number,
    isFrozen: boolean;
    transactions: Transaction[]
}

type IconProps = {
    label: string,
    className?: string
}

export {
    TransactionType,
    CardType,
    IconProps
}
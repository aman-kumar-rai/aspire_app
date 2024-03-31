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
    transactions: TransactionType[]
}

type IconProps = {
    label: string,
    className?: string
}

type CardHeaderProps = {
    currency: string,
    balance: number,
    loading: boolean,
    isModalOpen: boolean,
    handleToggleModal: () => void
    handleAddNewCard: (string) => void,
}

type CardContentProps = {
    cards: CardType[],
    currentCardIndex: number,
    handleSetCurrentCard: (number) => void,
    handleToggleFreezeCard: () => void
}

type CardControlsProps = {
    handleToggleFreezeCard: () => void
}

export {
    TransactionType,
    CardType,
    IconProps,
    CardHeaderProps,
    CardContentProps,
    CardControlsProps
}
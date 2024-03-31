import { Currency } from "@faker-js/faker"

interface TransactionType {
    amount: number,
    type: "credit" | "debit",
    date: Date,
    merchant: string
}

interface CardType {
    name: string,
    currency: Currency,
    cardNumber: string,
    expiry: Date,
    cvv: string,
    balance: number,
    isFrozen: boolean;
    transactions: TransactionType[]
}

interface IconProps {
    label: string,
    className?: string
}

interface CardHeaderProps {
    currency: string,
    balance: number,
    loading: boolean,
    isModalOpen: boolean,
    handleToggleModal: () => void
    handleAddNewCard: (string) => void,
}

interface CardContentProps {
    cards: CardType[],
    currentCardIndex: number,
    handleSetCurrentCard: (number) => void,
    handleToggleFreezeCard: () => void
}

interface CardControlsProps {
    handleToggleFreezeCard: () => void
}

interface TransactionProps extends TransactionType {
    currency: string
}

interface CarouselItemProps extends CardType {
    showCardNumber: boolean
}

export {
    TransactionType,
    TransactionProps,
    CardType,
    IconProps,
    CardHeaderProps,
    CardContentProps,
    CardControlsProps,
    CarouselItemProps
}
import { Currency, faker } from "@faker-js/faker";
import { TransactionType, CardType } from "@/types";

const formatExpiryDate = (date: Date): string => {
    const month = date.getMonth();
    const year = String(date.getFullYear());

    return `${month} / ${year.slice(2)}`;
}

const formatDate = (date: Date): string => {
    const day = date.getDate();
    const month = date.toLocaleString('default', { month: 'short' });
    const year = date.getFullYear();

    return `${day} ${month} ${year}`
}

const generateName = (): string => {
    return faker.person.fullName();
}

const generateCurrency = (): Currency => {
    return faker.finance.currency();
}

const generateCardNumber = () => {
    let cardNumber = "";
    for (let i = 0; i < 16; i++) {
        cardNumber += Math.ceil((Math.random() * 10)) % 10
    }
    return cardNumber;
}

const generateDate = (from: Date, to: Date): Date => {
    return faker.date.between({
        from,
        to
    })
}

const generateCVV = (): string => {
    return faker.finance.creditCardCVV();
}

const generateAmount = (min = 1000, max = 5000): number => {
    const amount = faker.finance.amount({
        min,
        max
    })
    return Number(Number(amount).toFixed(2));
}

const generateCard = (name?: string, transactionsCount = 3): CardType => {
    return {
        name: name ? name : generateName(),
        currency: generateCurrency(),
        cardNumber: generateCardNumber(),
        expiry: generateDate(
            new Date(),
            new Date(2030, 11)
        ),
        cvv: generateCVV(),
        balance: generateAmount(),
        isFrozen: false,
        transactions: generateTransactions(transactionsCount)
    }
}

const generatePastDate = (refDate: Date = new Date()): Date => {
    return faker.date.past({
        refDate
    })
}

const generateTransaction = (min = 10, max = 500, dec = 2): TransactionType => {
    return {
        amount: generateAmount(min, max, dec),
        type: Math.random() > 0.5 ? "credit" : "debit",
        date: generatePastDate(),
        merchant: faker.company.name()
    }
}

const generateTransactions = (size = 3): TransactionType[] => {
    const transactions = [];
    for (let i = 0; i < size; i++) {
        transactions.push(generateTransaction())
    }
    return transactions;
}

const generateInitialCards = (size = 2): CardType[] => {
    const cards = [];
    for (let i = 0; i < size; i++) {
        cards.push(generateCard());
    }
    return cards;
}

export {
    generateCardNumber,
    generateAmount,
    generateCVV,
    generateTransaction,
    generateTransactions,
    generateCard,
    generateInitialCards,
    formatExpiryDate,
    formatDate
}
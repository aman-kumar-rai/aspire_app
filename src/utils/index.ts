import { Currency, faker } from "@faker-js/faker";
import { Transaction, Card } from "@/types";

const formatExpiryDate = (date: Date): string => {
    const month = date.getMonth();
    const year = String(date.getFullYear());

    return `${month} / ${year.slice(2)}`;
}

const formatDate = (date: Date): string => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate();

    return `${day} ${month} ${year}`
}

const generateName = (): string => {
    return faker.person.fullName();
}

const getCurrency = (): Currency => {
    return faker.finance.currency();
}

const generateCardNumber = (issuer = "visa"): string => {
    return faker.finance.creditCardNumber({
        issuer
    })
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

const generateAmount = (min = 1000, max = 5000, dec = 2): number => {
    const amount = faker.finance.amount({
        min,
        max,
        dec
    })
    return Number(amount);
}

const generateCard = (name?: string, transactionsCount = 3): Card => {
    return {
        name: name ? name : generateName(),
        currency: getCurrency(),
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

const generateTransaction = (min = 10, max = 500, dec = 2): Transaction => {
    return {
        amount: generateAmount(min, max, dec),
        type: Math.random() > 0.5 ? "credit" : "debit",
        date: generatePastDate(),
        merchant: faker.company.name()
    }
}

const generateTransactions = (size = 3): Transaction[] => {
    const transactions = [];
    for (let i = 0; i < size; i++) {
        transactions.push(generateTransaction())
    }
    return transactions;
}

export {
    generateCard,
    formatExpiryDate,
    formatDate
}
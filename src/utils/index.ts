import { Currency, faker } from "@faker-js/faker";

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

const generateDate = (from?: Date, to?: Date): Date => {
    return faker.date.between({
        from,
        to
    })
}

const generateCVV = (): string => {
    return faker.finance.creditCardCVV();
}

const generateBalance = (min = 1000, max = 5000, dec = 2): string => {
    return faker.finance.amount({
        min,
        max,
        dec
    })
}

const formatExpiryDate = (date: Date): string => {
    const month = date.getMonth();
    const year = String(date.getFullYear());

    return `${month} / ${year.slice(2)}`;
}

// todo: add return type declaration
const generateCard = (name?: string) => {
    return {
        name: name ? name : generateName(),
        currency: getCurrency(),
        cardNumber: generateCardNumber(),
        expiry: formatExpiryDate(generateDate()),
        cvv: generateCVV(),
        balance: generateBalance(),
        isFrozen: false,
        transactions: []
    }
}

export {
    generateCard
}
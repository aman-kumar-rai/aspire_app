import {
    formatDate,
    formatExpiryDate,
    generateAmount,
    generateCVV,
    generateCard,
    generateCardNumber,
    generateTransaction,
    generateTransactions
} from "@/utils";


describe("formatExpiryDate() works", () => {

    it("formats expiry date correctly", () => {
        const date = new Date(2025, 6);
        const expiryDate = formatExpiryDate(date);
        expect(expiryDate).toEqual("6 / 25");
    })

})

describe("formatDate() works", () => {

    it("formats date correctly", () => {
        const date = new Date(2025, 6, 12);
        const formattedDate = formatDate(date);

        expect(formattedDate).toEqual("12 Jul 2025");
    })

})

describe("generateCardNumber() works", () => {
    it("generates a card number of correct length", () => {
        const cardNumber = generateCardNumber();
        expect(cardNumber).toHaveLength(16);
    })
})

describe("generateCVV() works", () => {
    it("should have length 3", () => {
        expect(generateCVV()).toHaveLength(3);
    })
})

describe("generateAmount() works", () => {

    it("generates amount in provided range", () => {
        const MIN = 500, MAX = 2000;
        const amount = generateAmount(MIN, MAX);
        expect(amount).toBeGreaterThanOrEqual(MIN);
        expect(amount).toBeLessThanOrEqual(MAX);
    })

    it("generates amount with specified precision", () => {
        const MIN = 100, MAX = 1000;
        const amount = generateAmount(MIN, MAX);
        const amountAfterDecimal = String(amount).split(".")[1];
        expect(amountAfterDecimal).toHaveLength(2);
    })


})

describe("generateTransaction() works", () => {
    it("generates a proper transaction object", () => {
        const transaction = generateTransaction();
        expect(transaction).toHaveProperty("amount");
        expect(transaction).toHaveProperty("type");
        expect(transaction).toHaveProperty("date");
        expect(transaction).toHaveProperty("merchant");
    })
})

describe("generateTransactions() works", () => {
    it("generates a transaction array of correct length", () => {
        expect(generateTransactions()).toHaveLength(3);
        expect(generateTransactions(5)).toHaveLength(5);
    })
})

describe("generateCard() works", () => {

    it("generates a proper card object", () => {
        const card = generateCard();
        expect(card).toHaveProperty("name");
        expect(card).toHaveProperty("currency");
        expect(card).toHaveProperty("cardNumber");
        expect(card).toHaveProperty("expiry");
        expect(card).toHaveProperty("cvv");
        expect(card).toHaveProperty("balance");
        expect(card).toHaveProperty("isFrozen");
        expect(card).toHaveProperty("transactions");
    })
})
import { formatDate, formatExpiryDate, generateCardNumber } from "@/utils";


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

// describe("generateCardNumber() works", () => {
//     // 16 for card length, 3 for separator
//     it("generates a card number of length 19", () => {
//         const cardNumber = generateCardNumber();
//         console.log(cardNumber);
//         expect(cardNumber).toHaveLength(16);
//     })
// })
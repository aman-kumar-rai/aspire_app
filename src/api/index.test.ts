import { addCard } from "@/api";

describe("addCard fake API call works", () => {

    test("name passed is added to card created", async () => {
        const name = "Aman Kumar";
        const card = await addCard(name);
        expect(card.name).toEqual(name);
    })

    test("card created is not frozen initially", async () => {
        const name = "Aman Kumar";
        const card = await addCard(name);
        expect(card.isFrozen).toBeFalsy();
    })

    test("card created has 3 transaction added by default", async () => {
        const name = "Aman Kumar";
        const card = await addCard(name);
        expect(card.transactions).toHaveLength(3);
    })

    test("card created has transactions count set according to transactionsCount argument value", async () => {
        const name = "Aman Kumar";
        const card = await addCard(name, 1);
        expect(card.transactions).toHaveLength(1);
    })

})
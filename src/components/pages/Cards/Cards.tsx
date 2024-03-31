import { useState } from "react";
import CardHeader from "@/components/pages/Cards/components/CardHeader/CardHeader";
import CardContent from "@/components/pages/Cards/components/CardContent/CardContent";
import { addCard } from "@/api";
import { generateInitialCards } from "@/utils";
import styles from "./style.module.css";
import { CardType } from "@/types";


const Cards = () => {
    const [cards, setCards] = useState<CardType[]>(generateInitialCards);
    const [currentCardIndex, setCurrentCardIndex] = useState(0);
    const [loading, setLoading] = useState(false);
    const [isAddCardModalOpen, setIsAddCardModalOpen] = useState(true);

    const handleToggleAddCardModal = () => {
        setIsAddCardModalOpen(prevIsAddCardModalOpen => !prevIsAddCardModalOpen);
    }

    const handleAddNewCard = (name: string) => {
        setLoading(true);
        /* not adding catch and fake API doesn't fail for now */
        addCard(name).then((card) => {
            setCards(prevCards => {
                return [
                    ...prevCards,
                    card
                ]
            });
            setCurrentCardIndex(cards.length);
        }).finally(() => {
            setLoading(false);
            setIsAddCardModalOpen(false);
        })
    }

    const handleToggleFreezeCard = () => {
        setCards(prevCards => prevCards.map((prevCard, index) => index === currentCardIndex ? {
            ...prevCard,
            isFrozen: !prevCard.isFrozen
        } : prevCard));
    }

    const handleSetCurrentCard = (index: number) => {
        setCurrentCardIndex(index);
    }

    const currentCard = cards[currentCardIndex];

    return (
        <div className={styles.container}>
            <CardHeader
                balance={currentCard.balance}
                currency={currentCard.currency.symbol}
                isModalOpen={isAddCardModalOpen}
                handleToggleModal={handleToggleAddCardModal}
                handleAddNewCard={handleAddNewCard}
                loading={loading}
            />
            <CardContent
                cards={cards}
                currentCardIndex={currentCardIndex}
                handleToggleFreezeCard={handleToggleFreezeCard}
                handleSetCurrentCard={handleSetCurrentCard}
            />
        </div>
    )
}

export default Cards;
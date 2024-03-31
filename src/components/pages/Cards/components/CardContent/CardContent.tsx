import { useState } from "react";
import * as Tabs from "@radix-ui/react-tabs";
import Eye from "@assets/eye.png"

import CardControls from "@/components/pages/Cards/components/CardControls/CardControls";
// import Transaction from "@components/Transaction/Transaction";
import CarouselItem from "@/components/pages/Cards/components/CarouselItem/CarouselItem";
import { CardContentProps } from "@/types";
import styles from "./style.module.css";


const CardContent = ({
    cards,
    currentCardIndex,
    handleSetCurrentCard,
    handleToggleFreezeCard
}: CardContentProps) => {

    const [showCardNumber, setShowCardNumber] = useState(false);

    const handleCardNumberVisibility = () => {
        setShowCardNumber(prev => !prev);
    }

    return (
        <Tabs.Root defaultValue="myDebitCards">
            <Tabs.List className={styles.tabsList} aria-label="Manage your cards">
                <Tabs.Trigger data-state={"active"} className={styles.tabsTrigger} value="myDebitCards">
                    My debit cards
                </Tabs.Trigger>
                <Tabs.Trigger data-disabled disabled className={styles.tabsTrigger} value="allCompanyCards">
                    All company cards
                </Tabs.Trigger>
            </Tabs.List>
            <Tabs.Content className={styles.tabsContent} data-state={"active"} value="myDebitCards">
                <div className={styles.leftPanel}>
                    <div className={styles.btnDiv}>
                        <button onClick={handleCardNumberVisibility} className={styles.btn}>
                            <img src={Eye} className={styles.eye} alt="show card number" />
                            {`${showCardNumber ? "hide" : "show"}`} card number
                        </button>
                    </div>

                    <CarouselItem
                        {...cards[currentCardIndex]}
                    />

                    <CardControls
                        handleToggleFreezeCard={handleToggleFreezeCard}
                    />
                </div>
                <div className={styles.rightPanel}>
                    {/* <Transaction/> */}
                </div>
            </Tabs.Content>
        </Tabs.Root>
    )
}

export default CardContent;
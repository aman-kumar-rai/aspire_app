import * as Tabs from "@radix-ui/react-tabs";
import * as Accordion from "@radix-ui/react-accordion";
import spendLimit from "@assets/spendLimit.png";
import freezeCard from "@assets/freezeCard.png";
import gPay from "@assets/gPay.png";
import replaceCard from "@assets/replaceCard.png";
import cancelCard from "@assets/cancelCard.png";
import Eye from "@assets/eye.png";
import DownArrow from "@assets/downArrow.png";
import UpArrow from "@assets/upArrow.png";
import CardDetails from "@assets/cardDetails.png";
import RecentTransaction from "@assets/recentTransaction.png";

import CardControls from "@/components/CardControls/CardControls";
import { AccordionContent, AccordionTrigger } from "@components/Accordion/Accordion";
import Transaction from "@components/Transaction/Transaction";
import Card from "@/components/Card/Card";

import styles from "./style.module.css";
import { useState } from "react";


const cardControllers = [
    {
        id: "freezeCard",
        label: "Freeze Card",
        icon: freezeCard
    },
    {
        id: "spendLimit",
        label: "Set Spend Limit",
        icon: spendLimit
    },
    {
        id: "gPay",
        label: "Add to GPay",
        icon: gPay
    },
    {
        id: "replaceCard",
        label: "Replace Card",
        icon: replaceCard
    },
    {
        id: "cancelCard",
        label: "Cancel Card",
        icon: cancelCard
    },
]
const CardContent = ({
    handleCard,
    cards,
    activeCard,
}) => {
    const [showCardNumber, setShowCardNumber] = useState(false)
    const handleCardNumberVisibility = () => {
        setShowCardNumber(prev => !prev)
    }
    return (
        <Tabs.Root defaultValue="myDebitCards">
            <Tabs.List className={styles.tabsList} aria-label="Manage your cards">
                <Tabs.Trigger data-state={"active"} className={`${styles.tabsTrigger} ${styles.activeTab}`} value="myDebitCards">
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
                    <Card />
                    <CardControls
                        controllers={cardControllers}
                        handleCard={handleCard}
                    />
                </div>
                <div className={styles.rightPanel}>
                    <Accordion.Root type="single" defaultValue="recentTransaction" collapsible>
                        <Accordion.Item className="AccordionItem" value="cardDetails">
                            <AccordionTrigger disabled>
                                <span className={styles.triggerHeading}>
                                    <img src={gPay} alt="card details" className={styles.triggerLogo} />
                                    <p>Card details</p>
                                </span>
                                <img src={DownArrow} className={styles.arrowLogo} />
                            </AccordionTrigger>
                        </Accordion.Item>
                        <Accordion.Item className={styles.accordionItem} value="recentTransaction">
                            <AccordionTrigger>
                            <span className={styles.triggerHeading}>
                                <img src={RecentTransaction} alt="recentTransaction" className={styles.triggerLogo} />
                                <p>Recent Transaction</p>
                            </span>
                            <img src={DownArrow} className={styles.arrowLogo} />
                        </AccordionTrigger>
                        <AccordionContent>
                            <Transaction/>
                            <Transaction/>
                            <Transaction/>
                            <Transaction/>
                            <Transaction/>
                            <Transaction/>
                        </AccordionContent>
                    </Accordion.Item>
                </Accordion.Root>
            </div>
        </Tabs.Content>
        </Tabs.Root >
    )
}

export default CardContent;
import { useState } from "react";
import Slider from "react-slick";
import * as Tabs from "@radix-ui/react-tabs";
import * as Accordion from "@radix-ui/react-accordion";
import Eye from "@assets/eye.png";
import DownArrow from "@assets/downArrow.png";
import UpArrow from "@assets/upArrow.png";
import CardDetails from "@assets/cardDetails.png";
import RecentTransaction from "@assets/recentTransaction.png";
import CardControls from "@/components/pages/Cards/components/CardControls/CardControls";
import { AccordionContent, AccordionTrigger } from "@components/pages/Cards/components/Accordion/Accordion";
import Transaction from "@components/pages/Cards/components/Transaction/Transaction";
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
    const [value, setValue] = useState("recentTransaction")

    const handleCardNumberVisibility = () => {
        setShowCardNumber(prev => !prev);
    }

    const handleCardClick = (prevIndex: number, currentIndex: number) => {
        console.log(prevIndex);
        handleSetCurrentCard(currentIndex);
    }

    const settings = {
        autoplay: false,
        arrows: false,
        dots: true,
        beforeChange: handleCardClick
    }
    
    const handlevalueChange = (_value:string) =>{
        setValue(_value)
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


                    <div className={styles.carousel}>
                        <Slider {...settings}>
                            {cards.map(card => (
                                <CarouselItem
                                    key={card.cardNumber}
                                    {...card}
                                />
                            ))}
                        </Slider>
                    </div>

                    <CardControls
                        handleToggleFreezeCard={handleToggleFreezeCard}
                    />
                </div>
                <div className={styles.rightPanel}>
                    <Accordion.Root
                    onValueChange={handlevalueChange}
                     className={styles.accordionRoot} 
                     type="single" 
                     defaultValue={value} 
                     collapsible
                     >
                        <Accordion.Item
                        className={styles.accordionItem}
                        value="cardDetails"
                        >
                            <AccordionTrigger
                            disabled
                            >
                                <span 
                                className={styles.triggerHeading}
                                >
                                    <img 
                                    src={CardDetails}
                                    alt="card details"
                                    className={styles.triggerLogo}
                                    />
                                    <p>
                                        Card details
                                        </p>
                                </span>
                                <img
                                src={DownArrow}
                                className={styles.arrowLogo}
                                />
                            </AccordionTrigger>
                        </Accordion.Item>
                        <Accordion.Item 
                        className={styles.accordionItem} 
                        value="recentTransaction"
                        >
                            <AccordionTrigger>
                                <span 
                                className={styles.triggerHeading}
                                >
                                    <img 
                                    src={RecentTransaction}
                                    alt="recentTransaction"
                                    className={styles.triggerLogo}
                                    />
                                    <p>
                                        Recent Transaction
                                        </p>
                                </span>
                                <img src={value === "recentTransaction" ? UpArrow : DownArrow} className={styles.arrowLogo} />
                            </AccordionTrigger>
                            <AccordionContent>
                                <Transaction />
                            </AccordionContent>
                            {value === "recentTransaction" && <button className={styles.showAllBtn}>View all card transactions</button>}
                        </Accordion.Item>
                    </Accordion.Root>
                </div>
            </Tabs.Content>
        </Tabs.Root>
    )
}

export default CardContent;
import Card from "@/components/Card/Card";
import CardControls from "@/components/CardControls/CardControls";

import spendLimit from "@assets/spendLimit.png";
import freezeCard from "@assets/freezeCard.png";
import gPay from "@assets/gPay.png";
import replaceCard from "@assets/replaceCard.png";
import cancelCard from "@assets/cancelCard.png";

import styles from "./style.module.css";

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

const Cards = () => {
    const handleCard = () => {
        console.log("handle Card")
    }
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <p>
                    Available balance
                </p>
                <button> Add new Button</button>
            </div>
            <div className={styles.tabSection}>
                <p>My Card</p>
                <p>All Company Card</p>
            </div>
            <div className={styles.main}>
                <div className={styles.leftPanel}>
                    <Card />
                    <CardControls controllers={cardControllers} handleCard={handleCard} />
                </div>
                <div className={styles.rightPanel}>
                    Hello
                </div>
            </div>

        </div>
    )
}

export default Cards;
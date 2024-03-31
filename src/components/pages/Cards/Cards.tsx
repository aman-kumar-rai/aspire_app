import spendLimit from "@assets/spendLimit.png";
import freezeCard from "@assets/freezeCard.png";
import gPay from "@assets/gPay.png";
import replaceCard from "@assets/replaceCard.png";
import cancelCard from "@assets/cancelCard.png";

import Card from "@/components/Card/Card";
import CardHeader from "@components/CardHeader/CardHeader";
import CardContent from "@components/CardContent/CardContent";
import CardControls from "@/components/CardControls/CardControls";


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

    //* to control/handle currently visible card
    const handleCard = () => {
        console.log("handle Card")
    }

    //* to open modal for new card
    const onAddNewCard = () =>{
        console.log("onAddNewCard")
    }


    return (
        <div className={styles.container}>
            <CardHeader
                balance={3000}
                currency={"S$"}
                onAddNewCard={onAddNewCard}
            />
            <CardContent
            />
            {/* <div className={styles.header}>
                <p>
                    Available balance
                </p>
                <button> Add new Button</button>
            </div>
            <div className={styles.tabSection}>
                <p>My Card</p>
                <p>All Company Card</p>
            </div> */}
            <div className={styles.main}>
                <div className={styles.leftPanel}>
                    {/* <Card /> */}
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
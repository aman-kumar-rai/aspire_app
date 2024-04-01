import spendLimit from "@assets/spendLimit.png";
import freezeCard from "@assets/freezeCard.png";
import gPay from "@assets/gPay.png";
import replaceCard from "@assets/replaceCard.png";
import cancelCard from "@assets/cancelCard.png";
import styles from "./style.module.css";
import { CardControlsProps } from "@/types";

const controls = [
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
];

const CardControls = ({
    handleToggleFreezeCard,
    isFrozen
}: CardControlsProps) => {


    const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
        const id = event.currentTarget.getAttribute("data-id");
        if (id === "freezeCard") {
            handleToggleFreezeCard();
        }
    }

    return (
        <div className={styles.container}>
            {controls.map(({ id, icon, label }) => {
                return (
                    <div key={id} className={styles.buttonContainer} onClick={handleClick} data-id={id}>
                        <img src={icon} width={"32px"} height={"32px"} alt={label} />
                        <p className={styles.buttonDetails}>{
                            id === "freezeCard" ? (isFrozen ? "Unfreeze card" : label) : label
                        }</p>
                    </div>
                )
            })}
        </div>

    )
}

export default CardControls
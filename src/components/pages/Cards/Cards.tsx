import CardHeader from "@components/CardHeader/CardHeader";
import CardContent from "@components/CardContent/CardContent";


import styles from "./style.module.css";


const Cards = () => {

    //* to control/handle currently visible card
    const handleCard = () => {
        console.log("handle Card")
    }

    //* to open modal for new card
    const onAddNewCard = () => {
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
                handleCard={handleCard}
            />
                    
        </div>
    )
}

export default Cards;
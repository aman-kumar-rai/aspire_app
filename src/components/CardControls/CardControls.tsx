import styles from "./style.module.css"
const CardControls = ({
    controllers,
    handleCard
}) => {
    return (
        <div className={styles.container}>
            {controllers.map(({ id, icon, label }) => {
                return (
                    <div key={id} className={styles.buttonContainer} onClick={handleCard}>
                        <img src={icon} width={"32px"} height={"32px"} alt={label} />
                        <p className={styles.buttonDetails}>{label}</p>
                    </div>
                )
            })}
        </div>

    )
}

export default CardControls
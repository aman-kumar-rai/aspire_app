import { NavLink } from "react-router-dom";
import styles from "./style.module.css";
import Logo from "@components/icons/Logo/Logo";
import Home from "@components/icons/Home/Home";
import Cards from "@components/icons/Cards/Cards";
import Payments from "@components/icons/Payments/Payments";
import Credit from "@components/icons/Credit/Credit";
import Settings from "@components/icons/Settings/Settings";

const navItems = [
    {
        id: "",
        label: "Home",
    },
    {
        id: "cards",
        label: "Cards"
    },
    {
        id: "payments",
        label: "Payments"
    },
    {
        id: "credit",
        label: "Credit"
    },
    {
        id: "settings",
        label: "Settings"
    },
]

function getIcon(id: string, label: string, active: boolean) {
    switch (id) {
        case "cards":
            return (
                <Cards label={label} className={active ? "active" : ""} />
            );
        case "payments":
            return (
                <Payments label={label} className={active ? "active" : ""} />
            );
        case "credit":
            return (
                <Credit label={label} className={active ? "active" : ""} />
            );
        case "settings":
            return (
                <Settings label={label} className={active ? "active" : ""} />
            );
        default:
            return (
                <Home label={label} className={active ? "active" : ""} />
            );
    }
}

const Sidebar = () => {
    return (
        <aside className={styles.container}>
            <div className={styles.header}>
                <Logo label="logo" className={"active"} />
                <p className={styles.description}>Trusted way of banking for 3,000+ SMEs and startups in Singapore</p>
            </div>
            <nav id="sidebar" className={styles.navbar}>
                {navItems.map(({ id, label }) => {
                    return (
                        <NavLink
                            key={id}
                            to={`/${id}`}
                            className={({ isActive }) => {
                                return (isActive ? `${styles.activeNav} ${styles.nav}` : styles.nav)
                            }
                            }
                        >
                            {({ isActive }) => (
                                <>
                                    {getIcon(id, label, isActive)}
                                    <span>{label}</span>
                                </>
                            )}
                        </NavLink>
                    )
                })}
            </nav>
        </aside>
    )
}


export default Sidebar;
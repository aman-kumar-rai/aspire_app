import { Routes, Route, Navigate } from "react-router-dom";
import styles from "./style.module.css";
import Home from "@/components/pages/Home/Home.tsx"
import Cards from "@/components/pages/Cards/Cards";
import Payments from "@/components/pages/Payments/Payments";
import Credit from "@/components/pages/Credit/Credit";
import Settings from "@/components/pages/Settings/Settings";

const Main = () => {
    return (
        <main className={styles.container}>
            <Routes>
                <Route
                    path="/"
                    element={<Home />}
                />
                <Route
                    path="/cards"
                    element={<Cards />}
                />
                <Route
                    path="/payments"
                    element={<Payments />}
                />
                <Route
                    path="/credit"
                    element={<Credit />}
                />
                <Route
                    path="/settings"
                    element={<Settings />}
                />
                <Route
                    path="*"
                    element={<Navigate to="/" replace />}
                />
            </Routes>

        </main>
    )
}

export default Main;
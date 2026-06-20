import { Button } from "@mui/material"
import { useNavigate } from "react-router-dom"
import { PricesSection } from "./PricesSection"
import { NewsSection } from "./NewsSection"
import * as styles from './styles'
import { MemeSection } from "./MemeSection"
import { InsightSection } from "./InsightSection"
import { useAuth } from "../../context/AuthContext"

export const Dashboard = () => {
    const navigate = useNavigate();
    const { user } = useAuth();

    const contentTypes = user?.preferences?.contentTypes ?? [];
    const showCharts = contentTypes.includes("Coin Prices");
    const showNews = contentTypes.includes("Market News");
    const showFun = contentTypes.includes("Crypto Meme");

    return (
        <div style={styles.containerStyle()}>
            <div style={styles.headerStyle()}>
                <h1 style={styles.titleStyle()}>Dashboard</h1>
                <Button variant="outlined" onClick={() => navigate("/onboarding")}>
                    Edit Preferences
                </Button>
            </div>

            <div style={styles.pageStyle()}>
                {showCharts && (
                    <div style={styles.sectionStyle()}>
                        <PricesSection/>
                    </div>
                )}

                {showNews && (
                    <div style={styles.sectionStyle()}>
                        <NewsSection/>
                    </div>
                )}

                {showFun && (
                    <div style={styles.sectionStyle()}>
                        <MemeSection/>
                    </div>
                )}

                <div style={styles.sectionStyle()}>
                    <InsightSection/>
                </div>
            </div>
        </div>
    )
}
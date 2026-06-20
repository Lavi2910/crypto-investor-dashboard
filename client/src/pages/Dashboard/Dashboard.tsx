import { SectionCard } from "../../components/SectionCard/SectionCard"
import { PricesSection } from "./PricesSection"
import { NewsSection } from "./NewsSection"
import * as styles from './styles'
import { MemeSection } from "./MemeSection"

export const Dashboard = () => {
    return (
        <div style={styles.pageStyle()}>
            <div style={styles.sectionStyle()}>
                <PricesSection/>
            </div>

            <div style={styles.sectionStyle()}>
                <NewsSection/>
            </div>

            <div style={styles.sectionStyle()}>
                <MemeSection/>
            </div>

            <div style={styles.sectionStyle()}>
                <SectionCard title="Social" subtitle="Coming soon">
                    <p>Social feed will appear here.</p>
                </SectionCard>
            </div>
        </div>
    )
}
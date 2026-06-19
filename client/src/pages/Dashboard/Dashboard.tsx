import { SectionCard } from "../../components/SectionCard/SectionCard"
import { PricesSection } from "./PricesSection"
import * as styles from './styles'

export const Dashboard = () => {
    return (
        <div style={styles.pageStyle()}>
            <div style={styles.sectionStyle()}>
                <PricesSection/>
            </div>

            <div style={styles.sectionStyle()}>
                <SectionCard title="Market News" subtitle="Coming soon">
                    <p>Market news will appear here.</p>
                </SectionCard>
            </div>

            <div style={styles.sectionStyle()}>
                <SectionCard title="Charts" subtitle="Coming soon">
                    <p>Charts will appear here.</p>
                </SectionCard>
            </div>

            <div style={styles.sectionStyle()}>
                <SectionCard title="Social" subtitle="Coming soon">
                    <p>Social feed will appear here.</p>
                </SectionCard>
            </div>
        </div>
    )
}
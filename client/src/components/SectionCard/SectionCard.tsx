import type { ReactNode } from "react";
import * as styles from "./styles";

interface SectionCardProps {
  title: string;
  subtitle?: string;
  icon?: ReactNode;
  children: ReactNode;
  footer?: ReactNode;
}

export const SectionCard = ({ title, subtitle, icon, children, footer }: SectionCardProps) => {
  return (
    <div style={styles.card()}>
      <div style={styles.header()}>
        {icon && <div style={styles.iconWrap()}>{icon}</div>}
        <div>
          <h3 style={styles.title()}>{title}</h3>
          {subtitle && <p style={styles.subtitle()}>{subtitle}</p>}
        </div>
      </div>

      <div style={styles.body()}>{children}</div>

      {footer && <div style={styles.footer()}>{footer}</div>}
    </div>
  );
};
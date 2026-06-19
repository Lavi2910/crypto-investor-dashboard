import { useState, useEffect } from "react";
import api from "../../api/axios";
import { SectionCard } from "../../components/SectionCard/SectionCard";
import { theme } from "../../theme";
import * as styles from "./pricesStyles";
import { VoteButtons } from "../../components/VoteButtons/VoteButtons";

interface Price {
  id: string;
  symbol: string;
  name: string;
  price: number;
  change24h: number;
  image: string;
}

export const PricesSection = () => {
  const [prices, setPrices] = useState<Price[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    api
      .get("/dashboard/prices")
      .then((res) => setPrices(res.data.prices))
      .catch(() => setError("Could not load prices"))
      .finally(() => setLoading(false));
  }, []);

  return (
    <SectionCard title="Coin Prices" subtitle="Your watchlist · 1D" footer={<VoteButtons section="prices" />}>
      {loading && <p style={styles.muted()}>Loading…</p>}
      {error && <p style={styles.error()}>{error}</p>}

      {!loading && !error && (
        <div style={styles.grid()}>
          {prices.map((p) => (
            <div key={p.id} style={styles.row()}>
              <div style={styles.left()}>
                <img src={p.image} alt={p.symbol} style={styles.avatar()} />
                <div>
                  <div style={styles.name()}>{p.name}</div>
                  <div style={styles.symbol()}>{p.symbol}</div>
                </div>
              </div>

              <div style={styles.right()}>
                <div style={styles.price()}>
                  ${p.price}
                </div>
                <div style={{ ...styles.change(), color: p.change24h >= 0 ? theme.palette.success.main : theme.palette.error.main }}>
                  {p.change24h >= 0 ? "+" : ""}
                  {p.change24h.toFixed(2)}%
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </SectionCard>
  );
};
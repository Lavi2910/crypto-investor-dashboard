import { useState, useEffect } from "react";
import api from "../../api/axios";
import { SectionCard } from "../../components/SectionCard/SectionCard";
import { VoteButtons } from "../../components/VoteButtons/VoteButtons";
import * as styles from "./insightStyles";

export const InsightSection = () => {
  const [insight, setInsight] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    api
      .get("/dashboard/insight")
      .then((res) => setInsight(res.data.insight))
      .catch(() => setError("Could not load insight"))
      .finally(() => setLoading(false));
  }, []);

  return (
    <SectionCard
      title="AI Insight of the Day"
      subtitle="Personalized for you"
      footer={<VoteButtons section="insight" />}
    >
      <div style={styles.wrapper()}>
        {loading && <p style={styles.muted()}>Generating…</p>}
        {error && <p style={styles.error()}>{error}</p>}
        {!loading && !error && <p style={styles.text()}>{insight}</p>}
      </div>
    </SectionCard>
  );
};
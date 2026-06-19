import { useState, useEffect } from "react";
import api from "../../api/axios";
import { SectionCard } from "../../components/SectionCard/SectionCard";
import { VoteButtons } from "../../components/VoteButtons/VoteButtons";
import * as styles from "./memeStyles";

interface Meme {
  id: string;
  title: string;
  url: string;
}

export const MemeSection = () => {
  const [meme, setMeme] = useState<Meme | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    api
      .get("/dashboard/meme")
      .then((res) => setMeme(res.data.meme))
      .catch(() => setError("Could not load meme"))
      .finally(() => setLoading(false));
  }, []);

  return (
    <SectionCard
      title="Crypto Meme"
      subtitle="Your daily dose"
      footer={<VoteButtons section="meme" />}
    >
      {loading && <p style={styles.muted()}>Loading…</p>}
      {error && <p style={styles.error()}>{error}</p>}

      {!loading && !error && meme && (
        <div style={styles.wrapper()}>
          <img
            src={meme.url}
            alt={meme.title}
            style={styles.image()}
          />
          <p style={styles.caption()}>{meme.title}</p>
        </div>
      )}
    </SectionCard>
  );
};
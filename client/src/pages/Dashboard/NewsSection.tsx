import { useState, useEffect } from "react";
import api from "../../api/axios";
import { SectionCard } from "../../components/SectionCard/SectionCard";
import { VoteButtons } from "../../components/VoteButtons/VoteButtons";
import * as styles from "./newsStyles";

interface NewsItem {
  id: string;
  title: string;
  source: string;
  url: string;
  publishedAt: string;
}

export const NewsSection = () => {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  useEffect(() => {
    api
      .get("/dashboard/news")
      
      .then((res) => setNews(res.data.news ?? []))
      .catch(() => setError("Could not load news"))
      .finally(() => setLoading(false));
  }, []);

  return (
    <SectionCard
      title="Market News"
      subtitle="Latest crypto headlines"
      footer={<VoteButtons section="news" />}
    >
      {loading && <p style={styles.muted()}>Loading…</p>}
      {error && <p style={styles.error()}>{error}</p>}

      {!loading && !error && news.map((item, index) => (
        <a
          key={item.id}
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setHoveredId(item.id)}
          onMouseLeave={() => setHoveredId(null)}
          style={styles.item(index === news.length - 1, hoveredId === item.id)}
        >
          <div style={styles.title()}>{item.title}</div>
          <div style={styles.meta()}>
            {item.source} · {new Date(item.publishedAt).toLocaleDateString()}
          </div>
        </a>
      ))}
    </SectionCard>
  );
};
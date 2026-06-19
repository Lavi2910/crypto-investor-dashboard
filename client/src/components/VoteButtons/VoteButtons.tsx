import { useState, useEffect } from "react";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import api from "../../api/axios";
import { theme } from "../../theme";
import * as styles from "./styles";

interface VoteButtonsProps {
  section: "news" | "prices" | "insight" | "meme";
}

export const VoteButtons = ({ section }: VoteButtonsProps) => {
  const [value, setValue] = useState<number | null>(null);

  useEffect(() => {
    api.get("/dashboard/votes")
      .then((res) => setValue(res.data.votes[section] ?? null))
      .catch(() => {});
  }, [section]);

  const vote = async (newValue: number) => {
    const prev = value;
    setValue(newValue);
    try {
      await api.post("/dashboard/vote", { section, value: newValue });
    } catch {
      setValue(prev);
    }
  };

  return (
    <div style={styles.container()}>
      <span style={styles.label()}>
        Is this section useful?
      </span>
      <button
        onClick={() => vote(1)}
        aria-pressed={value === 1}
        aria-label="Useful"
        style={styles.voteBtn(value === 1, theme.palette.success.main)}
      >
        <ThumbUpIcon fontSize="small" />
      </button>
      <button
        onClick={() => vote(-1)}
        aria-pressed={value === -1}
        aria-label="Not useful"
        style={styles.voteBtn(value === -1, theme.palette.error.main)}
      >
        <ThumbDownIcon fontSize="small" />
      </button>
    </div>
  );
};
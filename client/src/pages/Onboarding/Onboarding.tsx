import { useState } from "react";
import { Button, Alert } from "@mui/material";
import * as styles from './styles'
import { COINS } from "../../constants/coins";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import api from "../../api/axios";

const INVESTOR_OPTIONS = ["HODLer", "Day Trader", "NFT Collector"];
const CONTENT_OPTIONS = ["Market News", "Charts", "Social", "Fun"];



export const Onboarding = () => {
    const navigate = useNavigate();

    const [assets, setAssets] = useState<string[]>([]);
    const [investorType, setInvestorType] = useState("");
    const [contentTypes, setContentTypes] = useState<string[]>([]);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const { updateUser } = useAuth();

    const handleSubmit = async () => {
        setError("");
        setLoading(true);
        try {
            const res = await api.patch("/me/preferences", { assets, investorType, contentTypes });
            updateUser(res.data.user);
            navigate("/");
        } catch (err: any) {
            setError(err.response?.data?.message || "Could not save preferences");
        } finally {
            setLoading(false);
        }
    };

    const toggleAsset = (symbol: string) => {
        setAssets((prev) =>
            prev.includes(symbol) ? prev.filter((s) => s !== symbol) : [...prev, symbol]
        );
    };

    const toggleInvestorType = (option: string) => {
        setInvestorType((prev) => (prev === option ? "" : option));
    };

    const toggleContentType = (option: string) => {
        setContentTypes((prev) =>
            prev.includes(option) ? prev.filter((c) => c !== option) : [...prev, option]
        );
    };

    return (

        <div style={styles.containerStyle()}>
            <div style={styles.sectionContainer()}>
                <h2>What are you watching?</h2>
                <p>Pick the assets you want in your daily briefing. You can change these anytime.</p>

                <div style={styles.optionGrid()}>
                    {COINS.map(({ symbol, name, color }) => {
                        const selected = assets.includes(symbol);
                        return (
                            <button
                                key={symbol}
                                onClick={() => toggleAsset(symbol)}
                                aria-pressed={selected}
                                style={styles.optionCard(selected)}
                            >
                                <div style={styles.coinAvatar(color)}>{symbol}</div>
                                <div>
                                    <div style={styles.optionLabel()}>{symbol}</div>
                                    <div style={styles.optionDescription()}>{name}</div>
                                </div>
                            </button>
                        );
                    })}
                </div>
            </div>

            <div style={styles.sectionContainer()}>
                <h2>What kind of investor are you?</h2>
                <p>This helps us tailor the tone and depth of your briefing.</p>

                <div style={styles.optionGrid()}>
                    {INVESTOR_OPTIONS.map((option) => {
                        const selected = investorType === option;
                        return (
                            <button
                                key={option}
                                onClick={() => toggleInvestorType(option)}
                                aria-pressed={selected}
                                style={styles.optionCard(selected)}
                            >
                                <div style={styles.optionLabel()}>{option}</div>
                            </button>
                        );
                    })}
                </div>
            </div>

            <div style={styles.sectionContainer()}>
                <h2>What do you want to see?</h2>
                <p>Pick the content types you'd like in your daily briefing.</p>

                <div style={styles.optionGrid()}>
                    {CONTENT_OPTIONS.map((option) => {
                        const selected = contentTypes.includes(option);
                        return (
                            <button 
                            key={option} 
                            onClick={() => toggleContentType(option)} 
                            style={styles.optionCard(selected)} 
                            aria-pressed={selected}>
                                <div style={styles.optionLabel()}>{option}</div>
                            </button>
                        );
                    })}
                </div>
            </div>

            {error && <Alert severity="error">{error}</Alert>}

            <div style={styles.continueButtonContainer()}>
                <Button
                    variant="contained"
                    disabled={loading}
                    onClick={handleSubmit}
                    style={styles.buttonStyle()}
                >
                    Continue
                </Button>
            </div>
        </div>

    )
}
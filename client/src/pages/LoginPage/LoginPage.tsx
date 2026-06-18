import { TextField, Button, Tabs, Tab, Alert } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as styles from "./styles";
import { useAuth } from "../../context/AuthContext";
import api from "../../api/axios";

export const LoginPage = () => {
    const [mode, setMode] = useState<"login" | "signup">("login");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const { login } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");
        setLoading(true);
        try {
            const endpoint = mode === "login" ? "/auth/login" : "/auth/register";
            const payload =
                mode === "login" ? { email, password } : { name, email, password };
            const res = await api.post(endpoint, payload);
            login(res.data.token, res.data.user);
            navigate(res.data.user.onboarded ? "/" : "/onboarding");
        } catch (err: any) {
            setError(err.response?.data?.message || "Something went wrong");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div style={styles.containerStyle()}>
            <div style={styles.innerContainer()}>
                {mode === "login" ? (
                    <>
                        <h2>Welcome back</h2>
                        <p>Log in to your personalized crypto briefing.</p>
                    </>
                ) : (
                    <>
                        <h2>Create your account</h2>
                        <p>Start your personalized crypto briefing.</p>
                    </>
                )}
            </div>

            <Tabs value={mode} onChange={(e, val) => setMode(val)}>
                <Tab label="Log in" value="login" />
                <Tab label="Sign up" value="signup" />
            </Tabs>

            <form onSubmit={handleSubmit} style={styles.formStyle()}>
                {mode === "signup" && (
                    <TextField
                        variant="outlined"
                        label="Full name"
                        value={name}
                        required
                        onChange={(e) => setName(e.target.value)}
                        style={styles.textFieldStyle()}
                    />
                )}

                <TextField
                    variant="outlined"
                    label="Email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={styles.textFieldStyle()}
                />

                <TextField
                    variant="outlined"
                    label="Password"
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    style={styles.textFieldStyle()}
                />

                {error && (
                    <Alert severity="error" style={styles.alertStyle()}>
                        {error}
                    </Alert>
                )}

                <Button
                    type="submit"
                    variant="contained"
                    disabled={loading}
                    style={styles.buttonStyle()}
                >
                    {mode === "login" ? "Log in" : "Create account"}
                </Button>
            </form>
        </div>
    );
};
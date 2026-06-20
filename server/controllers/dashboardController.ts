import { Request, Response } from "express";
import axios from "axios"
import { COINS } from "../constants/coins";
import Vote from "../models/Vote";
import { AuthRequest } from "../middleware/auth";
import { STATIC_NEWS } from "../constants/staticNews";
import { STATIC_MEMES } from "../constants/staticMemes";


const COINGECKO_URL = "https://api.coingecko.com/api/v3/coins/markets";
export async function getPrices(req: Request, res: Response) {
  const ids = COINS.map((coin => coin.geckoId)).join(",")
  try {
    const apiKey = process.env.COINGECKO_API_KEY;
    const response = await axios.get(COINGECKO_URL,
      {
        params: {
          vs_currency: 'usd',
          ids: ids
        },
        headers: apiKey ? { "x-cg-demo-api-key": apiKey } : {},
      })

    if (!Array.isArray(response.data)) {
      throw new Error("Unexpected CoinGecko response");
    }

    const prices = response.data.map((coin: any) => ({
      id: coin.id,
      symbol: coin.symbol.toUpperCase(),
      name: coin.name,
      price: coin.current_price,
      change24h: coin.price_change_percentage_24h ?? 0,
      image: coin.image
    }))
    res.json({ prices })
  } catch (error) {
    console.error("getPrices error:", error)
    res.status(200).json({ prices: [], fallback: true })
  }
}

export async function castVote(req: AuthRequest, res: Response) {
  try {
    const { section, value } = req.body;
    if (![1, -1].includes(value)) {
      return res.status(400).json({ message: "Invalid vote value" });
    }
    const vote = await Vote.findOneAndUpdate(
      { userId: req.userId, section },
      { value },
      { new: true, upsert: true, runValidators: true }
    );
    res.json({ vote });
  } catch (err) {
    console.error("castVote error:", err);
    res.status(500).json({ message: "Could not save vote" });
  }
}

export async function getVotes(req: AuthRequest, res: Response) {
  try {
    const votes = await Vote.find({ userId: req.userId });
    const map: Record<string, number> = {};
    votes.forEach((v) => { map[v.section] = v.value; });
    res.json({ votes: map });
  } catch (err) {
    console.error("getVotes error:", err);
    res.status(500).json({ message: "Could not load votes" });
  }
}

export async function getNews(req: Request, res: Response) {
  res.json({ news: STATIC_NEWS })
}

export async function getMeme(req: Request, res: Response) {
  try {
    const response = await axios.get("https://meme-api.com/gimme/cryptomemes/50");
    const memes = response.data.memes;

    console.log("memes count:", memes?.length, "| status:", response.status);

    const pick = memes[Math.floor(Math.random() * memes.length)];

    const meme = {
      id: pick.postLink ?? "live",
      title: pick.title ?? "Crypto meme",
      url: pick.url,
    };

    if (!meme.url) throw new Error("No meme url");
    res.json({ meme, source: "live" });
  } catch (err) {
    console.error("getMeme error:", err);
    const fallback = STATIC_MEMES[Math.floor(Math.random() * STATIC_MEMES.length)];
    res.json({ meme: fallback, source: "static" });
  }
}
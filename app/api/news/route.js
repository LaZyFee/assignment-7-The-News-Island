import { NextResponse } from "next/server";
import newsData from "../../../data/data.json";

export async function GET() {
    try {
        return NextResponse.json(newsData, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: "Failed to fetch news" }, { status: 500 });
    }
}
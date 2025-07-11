import { NextResponse } from "next/server";
import newsData from "../../../../data/data.json";

export async function GET(request, { params }) {
    const { id } = params;
    const news = newsData.find((item) => item.article_id === id);
    if (!news) {
        return NextResponse.json({ error: `News with id ${id} not found` }, { status: 404 });
    }

    return NextResponse.json(news, { status: 200 });
}

export async function PATCH(request, { params }) {
    const { id } = params;
    const body = await request.json();

    // Validate that only title and description are updated
    const allowedFields = ["title", "description"];
    const invalidFields = Object.keys(body).filter((key) => !allowedFields.includes(key));

    if (invalidFields.length > 0) {
        return NextResponse.json(
            { error: `Cannot update fields: ${invalidFields.join(", ")}` },
            { status: 400 }
        );
    }

    const news = newsData.find((item) => item.article_id === id);
    if (!news) {
        return NextResponse.json({ error: `News with id ${id} not found` }, { status: 404 });
    }

    // Update the news item (in-memory, since we're not using a database)
    const updatedNews = { ...news, ...body };
    return NextResponse.json(updatedNews, { status: 200 });
}

export async function DELETE(request, { params }) {
    const { id } = params;
    const news = newsData.find((item) => item.article_id === id);
    if (!news) {
        return NextResponse.json({ error: `News with id ${id} not found` }, { status: 404 });
    }

    // Simulate deletion (in a real app, this would remove from a database)
    return NextResponse.json({ message: `News with id ${id} deleted` }, { status: 200 });
}
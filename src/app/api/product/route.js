import { NextResponse } from "next/server";

export async function GET() {
    // kết nối db
    const response = [
        { id: 1, name: "Nam" },
        { id: 2, name: "Thịnh" },
    ];

    return NextResponse.json(response, { status: 200 });
}

export async function POST() {}
export async function PUT() {}
export async function DELETE() {}

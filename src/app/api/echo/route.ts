import { NextResponse } from 'next/server';

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);

    // *** this will only return if there are any params named 'name' and 'instrument' ***
    // const name = searchParams.get('name');
    // const instrument = searchParams.get('instrument');
    // return NextResponse.json({ name, instrument });

    // *** This will return any params that it receives
    const obj = Object.fromEntries(searchParams.entries());
    return NextResponse.json(obj);
}

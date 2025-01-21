import { NextResponse } from "next/server"

export async function GET(req: Request, res: Response) {

    const products = await fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(json => console.log(json))

    return await NextResponse.json(products)
}
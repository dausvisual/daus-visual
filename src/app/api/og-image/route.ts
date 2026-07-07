import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const targetUrl = searchParams.get("url");

  // Fallback image if something goes wrong
  const fallbackImage = "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=2069&auto=format&fit=crop";

  if (!targetUrl) {
    return NextResponse.redirect(fallbackImage);
  }

  try {
    const response = await fetch(targetUrl, {
      headers: {
        "User-Agent": "Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)",
      },
      next: { revalidate: 3600 }, // Cache the fetch for 1 hour
    });

    if (!response.ok) {
      return NextResponse.redirect(fallbackImage);
    }

    const html = await response.text();
    
    // Simple regex to find og:image
    const ogImageMatch = html.match(/<meta property="og:image" content="([^"]+)"/i) || html.match(/<meta name="og:image" content="([^"]+)"/i);
    
    if (ogImageMatch && ogImageMatch[1]) {
      return NextResponse.redirect(ogImageMatch[1]);
    }

    return NextResponse.redirect(fallbackImage);
  } catch (error) {
    console.error("Error fetching og:image:", error);
    return NextResponse.redirect(fallbackImage);
  }
}

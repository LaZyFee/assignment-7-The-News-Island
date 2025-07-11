import { NextResponse } from "next/server";
import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";

const locales = ["en", "bn"];
const defaultLocale = "en";

function getLocale(request) {
    const acceptedLanguages = request.headers.get("accept-language") ?? "";
    const headers = { "accept-language": acceptedLanguages };
    const languages = new Negotiator({ headers }).languages();
    return match(languages, locales, defaultLocale);
}

export function middleware(request) {
    const { pathname } = request.nextUrl;

    // Skip middleware for news routes to preserve client-side navigation
    if (pathname.match(/^\/(en|bn)\/news\/.*/)) {
        return NextResponse.next();
    }

    const pathNameIsMissingLocale = locales.every(
        (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
    );

    if (pathNameIsMissingLocale) {
        const locale = getLocale(request);
        return NextResponse.redirect(new URL(`/${locale}${pathname === "/" ? "" : pathname}`, request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/((?!api|assets|.*\\..*|_next).*)"],
};
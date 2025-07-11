# News Application with Next.js

## Overview

This project is a news application built with Next.js 14.2.30, fulfilling the requirements of the provided assignment. It dynamically imports news data from `data.json`, supports multi-language functionality (English and Bengali), and implements API endpoints for news retrieval, updating, and deletion. The application displays news cards on the home page, supports navigation to news details, and includes a custom 404 page for invalid routes. However, the implementation of intercepting routes to display a modal for in-app navigation was not successful.

## Features Implemented

- **API Endpoints**:
  - `GET /api/news`: Returns all news items from `data.json`.
  - `GET /api/news/{id}`: Returns a single news item by ID.
  - `PATCH /api/news/{id}`: Updates the `title` and `description` of a news item, with error handling for invalid fields.
  - `DELETE /api/news/{id}`: Deletes a news item by ID.
- **Dynamic Data Import**:
  - News data is dynamically imported from `data.json` without using `fetch` or `axios`, as per requirements.
  - News cards are rendered dynamically on the home page (`app/[locale]/page.js`) and featured cards are displayed for selected news.
- **Multi-Language Support**:
  - Supports English (`en`) and Bengali (`bn`) using JSON dictionaries (`dictionaries/en.json`, `dictionaries/bn.json`).
  - Automatically selects the browser's default language preference using middleware.
  - Hard-coded text (e.g., Navbar, Footer) is translated, while `data.json` content remains untranslated.
- **Not Found Pages**:
  - Custom 404 page for non-existent routes (`app/[locale]/_not-found/page.js`).
  - Specific "This News with {newsId} id was not found!" message for invalid news IDs in `app/[locale]/news/[newsId]/page.js` and `app/[locale]/news/@modal/(..)[newsId]/page.js`.
- **News Details Page**:
  - Accessible via `/[locale]/news/[newsId]`, displaying full details of a news item.
  - Handles invalid IDs with a custom error message.

### Intercepting Routes and Modal

The assignment required implementing parallel and intercepting routes to display a modal for in-app navigation (e.g., clicking a news card) at `/[locale]/news/[newsId]`, while direct access to the same URL should render a detail page. Unfortunately, this feature could not be fully implemented due to the following issues:

- **Problem**: Clicking a news card (`NewsCard.jsx` or `FeaturedCard.jsx`) redirects to the detail page (`app/[locale]/news/[newsId]/page.js`) instead of opening the modal (`app/[locale]/news/@modal/(..)[newsId]/page.js`). The intercepting route is not triggered during client-side navigation.
- **Steps Taken**:

  - Set up the intercepting route at `app/[locale]/news/@modal/(..)[newsId]/page.js` to render `NewsModal.jsx`.
  - Used `router.push` in `NewsCard.jsx` and `FeaturedCard.jsx` to trigger client-side navigation.

  - Tested with a static modal route (`app/[locale]/news/@modal/test/page.js`) to confirm the `@modal` slot functionality.

**Request**: I apologize for not fully meeting the intercepting routes requirement. Could you please provide feedback on why the intercepting route might not be triggering and suggest workarounds or configurations to achieve the modal behavior? Additionally, any advice on handling dynamic intercepting routes in Next.js would be greatly appreciated.

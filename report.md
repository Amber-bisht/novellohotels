## What these files do

- `src/lib/axiosInstance.js`  
  Creates a preconfigured Axios client using `NEXT_PUBLIC_API_BASE_URL`, JSON headers, 10s timeout, and interceptors. The request interceptor injects a bearer token from `localStorage` when present. The response interceptor passes successful responses through and, on 401, redirects the browser to `/login`.

- `src/lib/apis.js`  
  Wraps API calls with the shared Axios instance. Exposes:
  - `fetchRooms()` → `GET Rooms.AllRooms_API`, returns all room data.  
  - `fetchSingleRoom(slug)` → `GET Rooms.AllRooms_API?slug=...`, returns a single room by slug.  
  - `fetchGallery()` → `GET Gallery.AllGallery_API`, returns gallery data.  
  - `createBooking(data)` → `POST Booking.BookRoom_API` with booking payload.  
  Each call logs the raw response and surfaces the `.data` payload, letting errors propagate after console logging.

- `src/components/Gallery.jsx`  
  Client-side React carousel used elsewhere on the site. Displays a curated list of hard-coded Cloudinary image URLs with portrait/landscape handling. Auto-advances every 5s, supports prev/next buttons and indicators, and links to `/gallery` for the full gallery page.

- `src/app/gallery/page.jsx`  
  The full gallery page (Next.js client component). On mount, calls `fetchGallery()` to load `allPics` from the API into state. Renders category filter buttons derived from the images’ `category` field, shows a masonry-style grid, and opens a full-screen modal when an image is clicked. Filters images by the selected category, defaulting to “All”.

## Notable behaviors
- API base URL must be provided via `NEXT_PUBLIC_API_BASE_URL`; missing or wrong values will break all requests.
- Gallery page assumes the API response shape `{ allPics: [...] }` with fields `id`/`_id`, `photoLink`, and `category`.
- Axios response interceptor triggers a hard redirect to `/login` on 401 responses.
- `Gallery.jsx` carousel uses a fixed, static image list; the page component uses dynamic data from the API.

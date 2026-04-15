export type FakeStoreProduct = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
};

const API_URL = "https://fakestoreapi.com/products";
const REQUEST_TIMEOUT_MS = 8000;

const fallbackProducts: FakeStoreProduct[] = [
  {
    id: 1001,
    title: "Classic Black T-Shirt",
    price: 120,
    description: "Soft cotton tee for everyday casual outfits.",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
    rating: { rate: 4.5, count: 320 },
  },
  {
    id: 1002,
    title: "Slim Fit Blue Jeans",
    price: 240,
    description: "Comfort stretch denim with modern slim fit.",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg",
    rating: { rate: 3.5, count: 210 },
  },
  {
    id: 1003,
    title: "Checkered Casual Shirt",
    price: 180,
    description: "Lightweight shirt with classic check pattern.",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
    rating: { rate: 4.5, count: 156 },
  },
  {
    id: 1004,
    title: "Sleeve Striped T-Shirt",
    price: 130,
    description: "Sporty striped tee with breathable fabric.",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg",
    rating: { rate: 4.0, count: 190 },
  },
  {
    id: 1005,
    title: "Vertical Striped Shirt",
    price: 212,
    description: "Premium shirt for refined everyday styling.",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
    rating: { rate: 5.0, count: 98 },
  },
  {
    id: 1006,
    title: "Courage Graphic T-Shirt",
    price: 145,
    description: "Graphic tee with vivid print and relaxed fit.",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
    rating: { rate: 4.0, count: 205 },
  },
  {
    id: 1007,
    title: "Loose Fit Bermuda Shorts",
    price: 80,
    description: "Comfortable shorts for summer casual looks.",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg",
    rating: { rate: 3.0, count: 84 },
  },
  {
    id: 1008,
    title: "Faded Skinny Jeans",
    price: 210,
    description: "Dark-wash skinny jeans with faded finish.",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg",
    rating: { rate: 4.5, count: 270 },
  },
];

export async function getAllProducts(): Promise<FakeStoreProduct[]> {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);

  try {
    const response = await fetch(API_URL, {
      cache: "no-store",
      headers: {
        Accept: "application/json",
        "User-Agent": "shopco-nextjs-app/1.0",
      },
      signal: controller.signal,
    });

    if (!response.ok) {
      console.error("FakeStore API failed with status:", response.status);
      return fallbackProducts;
    }

    const data = (await response.json()) as FakeStoreProduct[];

    if (!Array.isArray(data) || data.length === 0) {
      console.error("FakeStore API returned empty data");
      return fallbackProducts;
    }

    return data;
  } catch (error) {
    console.error("FakeStore fetch error:", error);
    return fallbackProducts;
  } finally {
    clearTimeout(timeoutId);
  }
}
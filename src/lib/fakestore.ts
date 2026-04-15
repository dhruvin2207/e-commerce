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

// export async function getAllProducts(): Promise<FakeStoreProduct[]> {
//   const response = await fetch(API_URL, {
//     next: { revalidate: 300 },
//   });

//   if (!response.ok) {
//     throw new Error("Failed to fetch products from Fake Store API");
//   }

//   return (await response.json()) as FakeStoreProduct[];
// }
// export async function getAllProducts(): Promise<FakeStoreProduct[]> {
//   try {
//     const response = await fetch(API_URL, {
//       next: { revalidate: 300 },
//     });

//     if (!response.ok) {
//       console.error("API failed");
//       return []; // ✅ prevent crash
//     }

//     return await response.json();
//   } catch (error) {
//     console.error("Fetch error:", error);
//     return []; // ✅ fallback
//   }
// }
export async function getAllProducts(): Promise<FakeStoreProduct[]> {
  try {
    const response = await fetch(API_URL, {
      cache: "no-store", // ✅ IMPORTANT
    });

    if (!response.ok) {
      console.error("API failed");
      return [];
    }

    return await response.json();
  } catch (error) {
    console.error("Fetch error:", error);
    return [];
  }
}
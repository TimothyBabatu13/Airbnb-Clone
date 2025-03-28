export const fetchData = async (link: string, init?: RequestInit) => {
    try {
        const api = await fetch(link, init);
        const res = await api.json();
        return res
    } catch (error) {
        console.log(error)
    }
}

// lib/fetchData.ts
export async function fetchDatas(endpoint: string, options?: RequestInit) {
    const isServer = typeof window === "undefined";
  
    // Dynamically set the base URL based on the environment
    const baseUrl = isServer
      ? process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000"
      : "";
  
    const url = `${baseUrl}${endpoint}`;
  
    try {
      const response = await fetch(url, {
        ...options,
        headers: {
          "Content-Type": "application/json",
          ...(options?.headers || {}),
        },
      });
  
      if (!response.ok) {
        throw new Error(`Fetch error: ${response.status} ${response.statusText}`);
      }
  
      return response.json();
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error;
    }
  }
  
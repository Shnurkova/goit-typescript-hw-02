import axios from "axios";

export const getImages = async <T>(
  setSearchQuery: string,
  setPage: number
): Promise<T> => {
  try {
    const response = await axios.get<T>(
      `https://api.unsplash.com/search/photos`,
      {
        params: {
          query: setSearchQuery,
          client_id: "A2QUhjFnbjZaCGJPJiyu25igaRP2meWD1nJXBlNcE78",
          page: setPage,
          per_page: 15,
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error("Error fetching articles:", error);
    throw error;
  }
};
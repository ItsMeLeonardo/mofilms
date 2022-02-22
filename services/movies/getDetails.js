import { movieApi } from "../movieApi";

export const details = async (id, append = "") => {
  if (!id) {
    throw new Error("No id provided");
  }

  if (typeof append !== "string" && !Array.isArray(append)) {
    throw new Error(
      "Invalid append, append should be a string or an array of strings"
    );
  }

  const append_to_response = Array.isArray(append) ? append.join(",") : append;

  const params = { language: "en-US", append_to_response };

  const response = await movieApi.get(`/movie/${id}`, { params });
  return response.data;
};

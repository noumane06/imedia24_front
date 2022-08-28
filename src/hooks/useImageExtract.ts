import { useEffect, useState } from "react";
import { IMAGE_BASE_URL } from "../constants/constants";

export const useImageExtract = (url: string): string => {
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    // extract the id from the url
    const id = url.split("/").length >= 2 ? url.split("/").at(-2) : "";
    setImageUrl(`${IMAGE_BASE_URL}${id}.svg`);
  }, []);

  return imageUrl;
  
};
import { useEffect, useState } from "react";
import { Linking } from "react-native";

const useDeeplinkRedirect = () => {
  const [deepURL, setDeepURL] = useState<string | null>("");

  useEffect(() => {
    const getUrlAsync = async () => {
      const url: string | null = await Linking.getInitialURL();

      setDeepURL(url);
    };
    getUrlAsync();

    Linking.addEventListener("url", ({ url }) => {
      setDeepURL(url);
    });

    return Linking.removeEventListener("url", ({ url }) => {
      setDeepURL(url);
    });
  }, []);

  return [deepURL];
};

export default useDeeplinkRedirect;

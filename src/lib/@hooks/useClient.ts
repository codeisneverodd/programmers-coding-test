import { useEffect, useState } from "react";

export default function useClient() {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    if (!isClient) setIsClient(true);
  }, [isClient]);

  return isClient;
}

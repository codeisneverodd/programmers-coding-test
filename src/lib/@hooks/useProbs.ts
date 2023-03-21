import { Prob } from "@/pages/api/prob";
import { QueryClient, useQuery } from "@tanstack/react-query";
import axios from "axios";

const queryClient = new QueryClient();

export default function useProbs() {
  const probQuery = useQuery({
    queryKey: ["probs"],
    queryFn: async () => {
      const res = await axios.get<Prob[]>("/api/prob", {
        headers: {
          "Content-Type": "application/json"
        }
      });
      return res.data;
    }
  });

  const refreshProbs = async () => {
    axios
      .post<Prob[]>("/api/prob", {
        headers: {
          "Content-Type": "application/json"
        }
      })
      .then(() => {
        queryClient.invalidateQueries({
          queryKey: ["probs"]
        });
      });
  };

  return { probQuery, refreshProbs };
}

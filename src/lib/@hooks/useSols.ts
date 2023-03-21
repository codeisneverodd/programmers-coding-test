import { Sol } from "@/pages/api/sol";
import { useToast } from "@chakra-ui/react";
import { QueryClient, useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import useProbs from "./useProbs";

const queryClient = new QueryClient();

export default function useSols() {
  const { probQuery } = useProbs();
  const toast = useToast();

  const solsQuery = useQuery({
    queryKey: ["sols"],
    queryFn: async () => {
      const res = await axios.get<Sol[]>("/api/sol", {
        headers: {
          "Content-Type": "application/json"
        }
      });
      return res.data;
    },
    enabled: probQuery.isSuccess
  });

  const addSolMutaiton = useMutation({
    mutationFn: async (sol: Pick<Sol, "author" | "code" | "probId">) => {
      await axios.post<Sol[]>("/api/sol", sol, {
        headers: {
          "Content-Type": "application/json"
        }
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["sols"]
      });
      toast({
        title: "풀이 등록에 성공했어요.",
        status: "success",
        duration: 3000
      });
    },
    onError: () => {
      toast({
        title: "풀이 등록에 실패했어요.",
        status: "error",
        duration: 3000
      });
    }
  });
  const deleteSolMutation = useMutation({
    mutationFn: async ({ solId }: { solId: string }) => {
      await axios.delete<Sol[]>("/api/sol", {
        params: {
          solId
        }
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["sols"]
      });
      toast({
        title: "풀이 삭제에 성공했어요.",
        status: "success",
        duration: 3000
      });
    },
    onError: () => {
      toast({
        title: "풀이 삭제에 실패했어요.",
        status: "error",
        duration: 3000
      });
    }
  });

  return { solsQuery, addSolMutaiton, deleteSolMutation };
}

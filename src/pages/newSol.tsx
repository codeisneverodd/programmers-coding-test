import MainLayout from "@/lib/@components/MainLayout";
import useSols from "@/lib/@hooks/useSols";
import { Button, Flex, Text, Textarea } from "@chakra-ui/react";
import { useState } from "react";

export default function NewSol() {
  const [solutionInfo, setSolutionInfo] = useState("");
  const [solCode, setSolCode] = useState("");
  const [isValid, setIsValid] = useState(false);
  const { addSolMutaiton } = useSols();

  const checkValid = () => {
    try {
      const info = JSON.parse(solutionInfo);
      const valid = info.probId && info.author && solCode !== "";
      setIsValid(valid);
      return valid;
    } catch (e) {
      setIsValid(false);
      return false;
    }
  };

  const handleSumbit = () => {
    if (checkValid()) {
      const info = JSON.parse(solutionInfo);
      addSolMutaiton.mutate(
        {
          author: info.author,
          probId: info.probId,
          code: solCode
        },
        {
          onSuccess: () => {
            setSolCode("");
            setSolutionInfo("");
          }
        }
      );
    }
  };

  return (
    <MainLayout title="풀이 추가">
      <Flex direction="column" gap="40px" px="40px" pt="40px">
        <Flex w="full" justify="space-between">
          <Text fontSize="3xl">풀이 추가</Text>
          <Button
            colorScheme="facebook"
            isDisabled={!isValid}
            onClick={() => handleSumbit()}
            isLoading={addSolMutaiton.isLoading}
          >
            문제 추가
          </Button>
        </Flex>
        <Text fontSize="xl">풀이 데이터</Text>
        <Textarea
          h="120px"
          placeholder="probId, author in json format"
          value={solutionInfo}
          onChange={e => {
            setSolutionInfo(e.target.value);
          }}
          onBlur={checkValid}
        />

        <Text fontSize="xl">제출한 정답</Text>
        <Textarea
          placeholder="function()"
          value={solCode}
          onChange={e => {
            setSolCode(e.target.value);
          }}
          onBlur={checkValid}
          h="400px"
        />
      </Flex>
    </MainLayout>
  );
}

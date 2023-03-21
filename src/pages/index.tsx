import MainLayout from "@/lib/@components/MainLayout";
import useProbs from "@/lib/@hooks/useProbs";
import { Button, Flex, Text } from "@chakra-ui/react";

export default function Home() {
  const { probQuery, refreshProbs } = useProbs();

  return (
    <MainLayout title="Home">
      <Text>New Template</Text>
      <Button
        isLoading={probQuery.isLoading}
        onClick={() => {
          refreshProbs();
        }}
      >
        문제 목록 갱신
      </Button>

      {probQuery.data && (
        <>
          <Text fontWeight="bold">문제 수 : {probQuery.data.length}</Text>
          {probQuery.data.map(({ title, id, solvedCount }) => (
            <Flex key={id}>
              {title} | {id} | {solvedCount}
            </Flex>
          ))}
        </>
      )}
    </MainLayout>
  );
}

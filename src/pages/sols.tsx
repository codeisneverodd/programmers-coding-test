import MainLayout from "@/lib/@components/MainLayout";
import useProbs from "@/lib/@hooks/useProbs";
import useSols from "@/lib/@hooks/useSols";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Box,
  Button,
  Code,
  Flex,
  Icon,
  IconButton,
  Text,
  useDisclosure
} from "@chakra-ui/react";
import { faXmarkCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef, useState } from "react";
import { Sol } from "./api/sol";

export default function Home() {
  const { probQuery } = useProbs();
  const { solsQuery, deleteSolMutation } = useSols();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [targetSol, setTargetSol] = useState<Sol | null>(null);
  const cancelRef = useRef(null);

  if (!probQuery.data || !solsQuery.data)
    return (
      <MainLayout title="Home">
        <Text>Loading...</Text>
      </MainLayout>
    );

  return (
    <MainLayout title="Home">
      <Text>New Template</Text>
      <Button>해설 목록 갱신</Button>

      <Text fontWeight="bold">해설 수 : {solsQuery.data.length}</Text>
      {solsQuery.data
        .slice()
        .sort((a, b) =>
          a.probId === b.probId
            ? a.createdAt - b.createdAt
            : +a.probId - +b.probId
        )
        .map(s => (
          <Flex key={s.id} alignItems="center" gap="20px" w="full">
            <Text>
              {probQuery.data.find(p => p.id === s.probId)?.title ?? ""} |{" "}
              {s.author} | {s.id} | {new Date(s.createdAt).toLocaleString()}
            </Text>
            <IconButton
              size="sm"
              icon={<Icon as={FontAwesomeIcon} icon={faXmarkCircle} />}
              aria-label="문제 삭제"
              onClick={() => {
                setTargetSol(s);
                onOpen();
              }}
            />
          </Flex>
        ))}
      {targetSol && (
        <AlertDialog
          isOpen={isOpen}
          leastDestructiveRef={cancelRef}
          onClose={onClose}
          size="2xl"
        >
          <AlertDialogOverlay>
            <AlertDialogContent>
              <AlertDialogHeader fontSize="lg" fontWeight="bold">
                아래 해설을 삭제할까요?
              </AlertDialogHeader>

              <AlertDialogBody>
                <Text>생성일: {targetSol.createdAt}</Text>
                <Text>아이디: {targetSol.id}</Text>
                코드
                <Box as="pre" overflow="scroll" p="12px">
                  <Code>{targetSol.code}</Code>
                </Box>
              </AlertDialogBody>

              <AlertDialogFooter>
                <Button ref={cancelRef} onClick={onClose}>
                  취소
                </Button>
                <Button
                  colorScheme="red"
                  onClick={() => {
                    deleteSolMutation.mutate({ solId: targetSol.id });
                    onClose();
                  }}
                  ml={3}
                >
                  삭제
                </Button>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialogOverlay>
        </AlertDialog>
      )}
    </MainLayout>
  );
}

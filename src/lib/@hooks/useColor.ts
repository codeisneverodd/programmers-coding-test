import { useColorModeValue } from "@chakra-ui/react";

export default function useColor() {
  const bodyBg = useColorModeValue("white", "gray.800");
  const subtleBg = useColorModeValue("gray.100", "gray.700");
  const alphaBg = useColorModeValue("gray.100", "whiteAlpha.200");
  const accentBg = useColorModeValue("gray.200", "gray.900");

  const getCountColor = (solCount: number) => {
    if (solCount === 0) return "#ff6b18";
    if (solCount === 1) return "#47c84c";
    if (solCount <= 10) return "#1bbaff";
    return "#2189ff";
  };

  return { bodyBg, subtleBg, alphaBg, accentBg, getCountColor };
}

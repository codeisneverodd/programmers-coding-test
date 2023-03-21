import Image from "next/image";
import { ComponentProps } from "react";
import LogoImg from "public/profile-512x512.png";
import { Box } from "@chakra-ui/react";

type LogoProps = {
  size?: string;
} & Partial<ComponentProps<typeof Image>>;

export default function Logo({ size = "120px", ...restProps }: LogoProps) {
  return (
    <Box boxSize={size} position="relative" flexShrink="0">
      <Image fill src={LogoImg} alt="로고" sizes={size} {...restProps} />
    </Box>
  );
}

import Image, { ImageProps } from "next/image";
import React from "react";

const isExternalUrl = (src: ImageProps["src"]): src is string => {
  return typeof src === "string" && /^https?:\/\//.test(src);
};

const ImageWrapper: React.FC<ImageProps> = (props) => {
  const { src, alt = "", ...rest } = props;
  return (
    <Image src={src} alt={alt} {...rest} unoptimized={isExternalUrl(src)} />
  );
};

export default ImageWrapper;

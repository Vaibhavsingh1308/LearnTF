import React, { ReactNode } from "react";
import Image from "next/image";
import { cva, type VariantProps } from "class-variance-authority";

// Avatar wrapper styles
const avatarStyles = cva(
  "relative overflow-hidden bg-grey200", // <- `relative` is key for using `fill`
  {
    variants: {
      shape: {
        circle: "rounded-full",
        square: "rounded-none",
      },
      size: {
        small: "w-12 h-12",
        medium: "w-16 h-16",
        large: "w-24 h-24",
        xlarge: "w-[480px] h-[480px]", // Add this
      },
    },
    defaultVariants: {
      size: "medium",
    },
  }
);

const Avatar: React.FC<VariantProps<typeof avatarStyles> & { children: ReactNode }> = ({
  children,
  shape,
  size,
}) => {
  return <div className={avatarStyles({ shape, size })}>{children}</div>;
};

// Avatar image styles
const avatarImageStyles = cva("object-cover", {
  variants: {
    shape: {
      circle: "rounded-full",
      square: "rounded-none",
    },
  },
  defaultVariants: {
    shape: "circle",
  },
});

interface AvatarImageProps {
  src: string;
  alt?: string;
  shape?: "circle" | "square";
}

const AvatarImage: React.FC<AvatarImageProps> = ({ src, alt = "Avatar", shape }) => {
  return (
    <Image
      src={src}
      alt={alt}
      fill // <- Required for responsive layout
      className={avatarImageStyles({ shape })}
    />
  );
};

// Avatar fallback styles
const avatarFallbackStyles = cva(
  "flex items-center justify-center w-full h-full text-white bg-blue-500",
  {
    variants: {
      shape: {
        circle: "rounded-full",
        square: "rounded-none",
      },
    },
    defaultVariants: {
      shape: "circle",
    },
  }
);

interface AvatarFallbackProps {
  children: ReactNode;
  shape?: "circle" | "square";
}

const AvatarFallback: React.FC<AvatarFallbackProps> = ({ children, shape }) => {
  return <div className={avatarFallbackStyles({ shape })}>{children}</div>;
};

export { Avatar, AvatarImage, AvatarFallback };

import Nextlink from "next/link";
import { Link, useColorModeValue, LinkProps } from "@chakra-ui/react";
import { useRouter } from 'next/router';

export const CustomLink = ({ ChakraComponent, href, children, ...props }) => {
  return (
    <Nextlink href={href}>
      <Link>
       {children}
      </Link>
    </Nextlink>
  );
};

export function CustomNavLink({ href, activeProps, children, _hover, ...props }) {
  const router = useRouter();
  const isActive = router.pathname === href;
  const color = useColorModeValue('brand.text', 'selected');

  if (isActive) {
    return (
      <Nextlink href={href}>
        <Link
          fontWeight='bold'
          {...props}
          {...activeProps}
          _hover={{ color: 'selected' }}
          color={color}
          textUnderlineOffset
         >
          {children}
        </Link>
      </Nextlink>
    );
  };

  return (
    <Nextlink href={href}>
      <Link {...props} _hover={{ color: 'selected' }}>
        {children}
      </Link>
    </Nextlink>
  )
};



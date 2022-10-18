import { createStyles } from '@mantine/core';

export interface ImageBoxStyleProps {
  width: number;
  height: number;
  src: string;
}

const useStyles = createStyles((theme, { width, height, src }: ImageBoxStyleProps) => ({
  container: {
    width,
    height,
    backgroundImage: `url(${src})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    boxShadow: `0 0 8px 8px ${theme.colors.gray[4]} inset`,
  },
}));

export default useStyles;

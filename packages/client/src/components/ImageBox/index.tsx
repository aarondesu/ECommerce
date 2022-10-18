import {} from '@mantine/core';

import useStyles, { ImageBoxStyleProps } from './ImageBox.styles';

const ImageBox = (props: ImageBoxStyleProps) => {
  const { classes } = useStyles(props);

  return <div className={classes.container} />;
};

export default ImageBox;

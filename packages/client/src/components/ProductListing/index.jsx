import { Badge, Card, Group, Image, Stack, Text } from '@mantine/core';
import { IconTag } from '@tabler/icons';

import Rating from '../Rating';
import useStyles from './ProductListing.styles';

const ProductListing = ({
  className,
  classNames,
  withBorder,
  styles,
  id,
  name,
  imgUrl,
  price,
  score,
  reviews,
}) => {
  const { classes, cx } = useStyles({}, { name: 'ProductListingComponent', classNames, styles });

  if (reviews >= 10000 && reviews < 100000) {
    reviews = String(reviews).slice(0, 2);
    reviews = reviews + 'k';
  } else if (reviews >= 100000) {
    reviews = String(reviews).slice(0, 3);
    reviews = reviews + 'k';
  }

  return (
    <Card
      className={cx(classes.container, className)}
      withBorder={withBorder}
      p="md"
      component="a"
      href={`/product/${id}`}
    >
      <Card.Section>
        <Image src={imgUrl} width={200} height={170} fit="contain" />
      </Card.Section>

      <Stack spacing="xs">
        <Text className={classes.productName} weight={500} size="xs">
          {name}
        </Text>

        <Group position="apart">
          <Text size="md" weight={700} color="blue">
            ${price}
          </Text>
          <IconTag size={18} color="blue" fill="blue" />
        </Group>

        <Group spacing="xs" position="apart">
          <Rating score={score} size={14} />
          <Badge size="xs" variant="outline">
            {reviews} Reviews
          </Badge>
        </Group>
      </Stack>
    </Card>
  );
};

export default ProductListing;

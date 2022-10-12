import {
  Badge, Card, Group, Image, Stack, Text,
} from '@mantine/core';
import { IconTag } from '@tabler/icons';

import Rating from '../Rating';
import useStyles from './ProductListing.styles';

interface ProductListingProps {
  withBorder: boolean;
  id: number;
  name: string;
  imgUrl: string;
  price: number;
  score: number;
  reviews: number;
}

function ProductListing({
  withBorder = false,
  id,
  name,
  imgUrl,
  price,
  score,
  reviews,
}: ProductListingProps) {
  const { classes } = useStyles();
  let revs = reviews.toString();
  if (reviews >= 10000 && reviews < 100000) {
    revs = String(reviews).slice(0, 2);
    revs += 'k';
  } else if (reviews >= 100000) {
    revs = String(reviews).slice(0, 3);
    revs += 'k';
  }

  return (
    <Card
      className={classes.container}
      withBorder={withBorder}
      p="md"
      component="a"
      href={`/products/product/${id}`}
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
            $
            {price}
          </Text>
          <IconTag size={18} color="blue" fill="blue" />
        </Group>

        <Group spacing="xs" position="apart">
          <Rating score={score} size={14} />
          <Badge size="xs" variant="outline">
            {revs}
            {' '}
            Reviews
          </Badge>
        </Group>
      </Stack>
    </Card>
  );
}

export default ProductListing;

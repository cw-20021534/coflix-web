import React from 'react';
import Card from '~/components/atom/Card';
import styles from '~/components/molecules/CardList/CardList.module.scss';

type Video = {
  id: number;
  title: string;
  imageUrl: string;
};

interface Props {
  title: string;
  videos: Video[];
  size: 'small' | 'medium' | 'large';
}

function CardList(props: Props) {
  const { title, videos, size } = props;
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.cardWrapper}>
        {videos.map(({ id, title, imageUrl }) => (
          // eslint-disable-next-line react/no-array-index-key
          <Card key={`card-${id}`} title={title} imageUrl={imageUrl} size={size} />
        ))}
      </div>
    </section>
  );
}

export default CardList;

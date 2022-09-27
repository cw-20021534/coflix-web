import React from 'react';
import { motion } from 'framer-motion';
import cls from 'classnames';
import styles from '~/components/atom/Card/Card.module.scss';
import Image from 'next/image';

interface Props {
  title: string;
  size?: 'small' | 'medium' | 'large';
  imageUrl: string;
}

function Card(props: Props) {
  const { title, size = 'medium', imageUrl } = props;

  const classMap = {
    large: styles.lgItem,
    medium: styles.mdItem,
    small: styles.smItem,
  };

  return (
    <div className={styles.container}>
      <div className={classMap[size]}>
        <motion.div className={cls(styles.imgMotionWrapper, classMap[size])} whileHover={{ scale: 1.1 }}>
          <Image src={imageUrl} alt={title} layout="fill" className={styles.cardImg} />
        </motion.div>
      </div>
    </div>
  );
}

export default Card;

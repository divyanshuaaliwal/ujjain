import { Star } from 'lucide-react';
import styles from './TravelPackageCard.module.css';

export default function Rating({ pkg }) {
  const maxStars = 5;
  const rating = pkg.rating || 0;
  const filledStars = Math.round(rating);
  const reviewCount = pkg.reviewCount || 0;

  return (
    <div>
      {rating > 0 && (
        <div className={styles.ratingContainer}>
          <div className={styles.stars}>
            {[...Array(maxStars)].map((_, i) => (
              <Star
                key={i}
                size={18}
                color={i < filledStars ? '#FFC107' : '#E0E0E0'}
                className={styles.starIcon}
              />
            ))}
          </div>

          <div className={styles.ratingDetails}>
            <span className={styles.ratingValue}>{rating.toFixed(1)}</span>
            <span className={styles.reviewCount}>({reviewCount} reviews)</span>
          </div>
        </div>
      )}
    </div>
  );
}

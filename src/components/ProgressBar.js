import { PropTypes } from 'prop-types';
import styles from 'styles/ProgressBar.module.css';
import { CircularProgressbar } from 'react-circular-progressbar';

const ProgressBar = ({ percentage }) => (
  <div className={styles.progress}>
    <div className={styles.chart}>
      <CircularProgressbar value={percentage} />
    </div>
    <div className={styles.progressValue}>
      <h3>
        {percentage}
        %
      </h3>
      <p>Completed</p>
    </div>
  </div>
);
ProgressBar.propTypes = {
  percentage: PropTypes.number.isRequired,
};
export default ProgressBar;

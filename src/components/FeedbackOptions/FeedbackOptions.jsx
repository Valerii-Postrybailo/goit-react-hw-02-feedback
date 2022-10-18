import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

const FeedbackOptions = ({options, onLeaveFeedback}) => {
  return(
    <div>
      
      <button type="button" 
        onClick = {onLeaveFeedback.addGoodFeedback}
        className={css.btn}>
        {options.good}
      </button>

      <button type="button"
        onClick = {onLeaveFeedback.addNeutralFeedback}
        className={css.btn}>
        {options.neutral}
      </button>

      <button type="button" 
        onClick = {onLeaveFeedback.addBadFeedback}
        className={css.btn}>
        {options.bad}
      </button>

    </div>
  )
}

FeedbackOptions.propTypes = {
  options: PropTypes.objectOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.objectOf(PropTypes.func.isRequired),
}

export default FeedbackOptions
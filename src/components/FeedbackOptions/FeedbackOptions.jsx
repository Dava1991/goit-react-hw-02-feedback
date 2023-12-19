import css from './FeedbackOptions.module.css'

export const FeedbackOptions = ({options, onLeaveFeedback}) => (
    <div className={css.buttonBox}>
        {
        options.map((option) => (
        <button className={css.Button} onClick={() =>
            onLeaveFeedback(option)} key={option}>{option}</button>
))
        }
        

    </div>
)
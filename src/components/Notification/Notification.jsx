import css from './Notification.module.css'

export const Notification = ({ message }) => (
    <div className={css.box}>
        <p className={css.p}>{message}</p>
     </div>
);
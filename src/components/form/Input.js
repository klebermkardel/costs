import styles from './Input.module.css'

function Input({ type, text, name, placeholder, handleOnChange, value}) {
    return (
        <div className={styles.form_control}>
            <label htmlFor=""></label>
            <input type="" />
        </div>
    )
}

export default Input
import styles from './Heading.module.css'

//Essa tipagem do props já engloba o uso de typeScript no componente
type HeadingProps = {
    children: React.ReactNode; //React.ReactNode é um tipo que representa qualquer coisa que pode ser renderizada pelo React, como elementos, strings, números, etc.
}

export function Heading({ children }: HeadingProps) {
    return <h1 className={styles.heading}>{children}</h1>
}
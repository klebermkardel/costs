import { useState } from 'react'

import Input from '../form/Input'
import Select from '../form/Select'
import SubmitButton from '../form/SubmitButton'

import styles from './ProjectForm.module.css'

function ProjectForm({btnText}) {

    const [categories, setCategories] = useState([])

    return (
        <form className={styles.form}>
            <Input
                type="text"
                text="Nome do Projeto"
                name="name"
                placeholder="Insira o nome do projeto"
            />
            <Input 
                type="text"
                text="Orçamento do Projeto"
                name="budget"
                placeholder="Insira o orçamento total"
            />
            <Select name="category_id" text="Selecione a categoria" />
            <SubmitButton text={btnText}/>
        </form>
    )
}

export default ProjectForm
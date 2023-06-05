import { useHistory } from 'react-router-dom'

import ProjectForm from '../project/ProjectForm'

import styles from './NewProject.module.css'

function NewProject() {

    const history = useHistory()

    return (
        <div className={styles.newproject_container}>
            <h1>Criar Projeto</h1>
            <p>Crie seu projeto para depois aidicionar os serviços</p>
            <ProjectForm  btnText="Criar Projeto"/>
        </div>
    )
}

export default NewProject
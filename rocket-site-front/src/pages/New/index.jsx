import {Header} from '../../components/Header'
import {Input} from '../../components/Input'
import {Textarea} from '../../components/Textarea'
import {NoteItem} from '../../components/NoteItem'
import {Section} from '../../components/Section'
import {Button} from '../../components/Button'
import {Link} from 'react-router-dom'

import { Container, Formulary } from './styles'

export function New(){
    return(
        <Container>
            <Header />

            <main>
                <Formulary>
                    <header>
                        <h1>Criar Nota</h1>
                        <Link to="/">Voltar!</Link>
                    </header>

                    <Input placeholder='Título'/>
                    <Textarea placeholder = 'Observações!'/>

                    <Section title= 'Links Úteis'>
                        <NoteItem value='https://rocketseat.com.br'/>
                        <NoteItem isNew placeholder='Novo link'/>
                    </Section>

                    <Section title='Marcadores'>
                        <div className='tags'>
                            <NoteItem value='React'/>
                            <NoteItem isNew placeholder='Nova Tag'/>
                        </div>
                    </Section>
                    <Button title='Salvar' />
                </Formulary>
            </main>
        </Container>

    )
}
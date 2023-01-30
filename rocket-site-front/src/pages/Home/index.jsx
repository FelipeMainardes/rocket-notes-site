import {FiPlus, FiSearch} from 'react-icons/fi'
import {Container, Brand, Menu, Search, Content, NewNote} from './styles';
import {api} from '../../service/api'
import { useState, useEffect } from 'react';
import {Header} from '../../components/Header';
import {Note} from '../../components/Note';
import {Input} from '../../components/Input';
import {Section} from '../../components/Section';
import {ButtonText} from '../../components/ButtonText';

export function Home(){
    let [tags, setTags] = useState([]);
    
    
    useEffect(() => {
        async function fetchTags(){
            let response = await api.get ("tags");
            setTags(response.data);
        }
        fetchTags();
    }, []);

    return(
        <Container>
            <Brand>
                <h1>RocketNotes</h1>
            </Brand>

            <Header>

            </Header>

            <Menu>
                 <li>
                    <ButtonText 
                    title="Todos" 
                    isActive
                    />
                </li>
                {
                tags && tags.map() (tag =>(

                    <li key ={String (tag.id)}>
                        <ButtonText title={tag.name}/>
                    </li>
                ))
               }

            </Menu>

            <Search>
                <Input placeholder = "Pesquiasr pelo título!" icon={FiSearch}/>

            </Search>

            <Content>
                <Section title='Minhas Notas!'>
                    <Note data={{
                    title: 'React',
                     tags:[
                        {id: '1', name:'react'},
                        {id: '2', name:'rocketseat'}
                    ]
                     }}
                     />

                </Section>
            </Content>

            <NewNote to ='/new'>
                <FiPlus />
                    Criar Nota
            </NewNote>


        </Container>
    );
}
import {Header} from '../../components/Header'
import {Input} from '../../components/Input'
import {Textarea} from '../../components/Textarea'
import {NoteItem} from '../../components/NoteItem'
import {Section} from '../../components/Section'
import {Button} from '../../components/Button'
import {Link} from 'react-router-dom'
import { useState } from 'react'
import { Container, Formulary } from './styles'
import {api} from '../../service/api'
import {useNavigate} from 'react-router-dom'

export function New(){

    let [title, setTitle] = useState("");
    let [description, setDescription] = useState("");
    let [links, setLinks] = useState([]);
    let [newLink, setNewLink] = useState("");

    let [tags, setTags] = useState([]);
    let [newTag, setNewTag] = useState("");

    let navigate = useNavigate();

    function handleAddLink(){
        setLinks(prevState => [...prevState, newLink]);
        setNewLink ("");
    }

    function handleRemoveLink(deleted){
        setLinks (prevState => prevState.filter(link => link !== deleted));
    }

    function handleAddTag (){
        setTags(prevState => [...prevState, newTag])
        setNewTag("");
    }

    function handleRemoveTag(deleted){
        setTags (prevState => prevState.filter(tag => tag !== deleted));
    }

    async function handleNewNote (){
        if(!title){
            return alert ("Digite o título da nota!!")
        }
        
        if (newLink){
            return alert ("Você deixou um link no campo para adicionar, mas não o fez!!")
    
        }
        
        if(newTag){
            return alert ("Você deixou uma tag no campo para adicionar, mas não o fez!!")
        
        }
        await api.post("/notes", {
            title,
            description,
            tags,
            links
        });

        alert("Nota criada!!");
        navigate("/");
    }

    return(
        <Container>
            <Header />

            <main>
                <Formulary>
                    <header>
                        <h1>Criar Nota</h1>
                        <Link to="/">Voltar!</Link>
                    </header>

                    <Input 
                    placeholder='Título'
                    onChange = {e => setTitle(e.target.value)}
                    />
                    <Textarea 
                    placeholder = 'Observações!'
                    onChange = {e => setDescription(e.target.value)}
                    />

                    <Section title= 'Links Úteis'>
                        {
                            links.map((link, index) => (
                        <NoteItem 
                        key={String(index)}
                        value ={link}
                        onClick= {() => handleRemoveLink(link)}
                        />
                            ))
                        }
                        <NoteItem 
                        isNew
                        placeholder ="Novo Link"
                        value ={newLink}
                        onChange = { e=> setNewLink (e.target.value)}
                        onClick= {handleAddLink}
                        />
            
                    </Section>

                    <Section title='Marcadores'>
                        <div className='tags'>
                            {
                                tags.map((tag, index) => 
                                <NoteItem
                                value= {tag}
                                key = {String(index)}
                                onClick ={ () => handleRemoveTag(tag)}
                                />
                                
                                )}
                            
                            <NoteItem isNew placeholder='Nova Tag'
                            onChange ={ e=> setNewTag(e.target.value)}
                            value ={newTag}
                            onClick = {handleAddTag}
                            />
                        </div>
                    </Section>
                    <Button 
                    title='Salvar'
                    onClick={handleNewNote}
                    />
                </Formulary>
            </main>
        </Container>

    )
}
import {useState, useEffect} from 'react'
import {Container, Links, Content} from "./styles.js";
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";
import { Section } from "../../components/Section";
import { Tag } from "../../components/Tag";
import {useParams, useNavigate} from 'react-router-dom'
import { api } from '../../service/api.js';

export function Details(){
  let [data, setData] = useState (null)
  let params = useParams();
  let navigate = useNavigate();
  
  
  function handleBack (){
    navigate (-1);
  }

 async function handleRemove (){
    let confirm = window.confirm("Deseja realmente remover a nota?");

    if(confirm){
      await api.delete(`/notes/${params.id}`);
      navigate (-1);
    }
  }
  useEffect(() =>{
    async function fetchNote(){
      let response = await api.get(`/notes/${params.id}`);
      setData(response.data);

    }
    fetchNote();
  }, []);
  return(
    <Container>
      <Header />

      {
        data &&
        <main>
        <Content>
          <ButtonText title= "Excluir nota!!"
          onClick={handleRemove}
          >
            </ButtonText>
            <h1>
              {data.title}
            </h1>

            <p>
              {data.description}
            </p>

         { data.links &&
          <Section title= "Links Úteis">
            <Links>
              {
                data.links.map(link => (

                
                <li key={String(link.id)}>
              <a href={link.url} target ="_blank"> 
                  {link.url}
                </a>
              </li>))
              }
              
            
            </Links>

         </Section>
         }

        {
          data.tags &&
          <Section title= "Marcadores">
          
          { 
            data.tags.map(tag => (
            <Tag 
            key ={String(tag.id)}
            title= {tag.name}
            />
           ))
          }
         </Section>
        }






          <Button title = "Voltar"
          onClick = {handleBack}
          />
        </Content>
      </main>
      }
    </Container>
  )
}
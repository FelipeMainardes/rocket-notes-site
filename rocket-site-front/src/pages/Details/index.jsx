import {Container, Links, Content} from "./styles.js";
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";
import { Section } from "../../components/Section";
import { Tag } from "../../components/Tag";

export function Details(){
  
  return(
    <Container>
      <Header />

      <main>
        <Content>
          <ButtonText title= "Excluir nota!!">
            </ButtonText>
            <h1>
              Introdução ao React!!
            </h1>

            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit eius laudantium reiciendis officiis ipsum inventore ea, similique corrupti magni placeat consequatur atque et reprehenderit suscipit vero error soluta, quisquam maiores. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt laudantium ipsam voluptatem, rerum veritatis voluptates laborum laboriosam deserunt sunt vel fugiat, sint quaerat tenetur, exercitationem repudiandae delectus animi! Dolores, dolor.
            </p>

         <Section title= "Links Úteis">
            <Links>
              <li>
              <a href="#"> https://www.rocketseat.com.br/</a></li>
              <li><a href="#"><a href="#"> https://www.rocketseat.com.br/</a></a></li>
            
            </Links>

         </Section>

        <Section title= "Marcadores">
           <Tag title= "Express"/>
            <Tag title= "Node"/>

         </Section>






          <Button title = "Voltar"/>
        </Content>
      </main>
    </Container>
  )
}
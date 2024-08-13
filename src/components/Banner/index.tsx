import {Imagem, Titulo, Preços} from './styles'

import bannerImg from '../../assets/images/banner-homem-aranha.png'
import Tag from '../Tag'
import { ButtonLink } from '../button/styles'
import Button from '../button'




const Banner = () => (
<Imagem style={{ backgroundImage:`url(${bannerImg})`}}>
<div className="Container">
  <Tag size="big">Destaque do dia</Tag>

 <div>
 <Titulo>Marvel&apos;s Spider-Man: Miles Morales PS4 & PS5
</Titulo>
<Preços>De <span>R$ 250,00</span> <br/>
por apenas R$99,90.</Preços>

</div>



<Button type="link" to="/produto" title="Clique aqui para aproveitar esta oferta">Aproveitar</Button>

</div>
  </Imagem>
)
export default Banner

import Tag from '../Tag'

import * as S from './styles'

type Props = {
  title: string
  category: string
  system: string
  description: string
  infos: string[]
  image: string
  id: number
}

const getDescription = (text: string) => {
  if (text.length > 95) {
    return text.substring(0, 92) + '...'
  }
  return text
}

const Product = ({
  title,
  category,
  system,
  description,
  infos,
  image,
  id
}: Props) => (
  <S.Card
    title={'CLique aqui para ver mais detalhes do jogo: ${title}'}
    to={`/product/${id}`}
  >
    <img src={image} alt={title} />

    <S.Infos>
      {infos.map((info) => (
        <Tag key={info}>{info}</Tag>
      ))}
    </S.Infos>

    <S.Title>{title}</S.Title>
    <Tag>{category}</Tag>
    <Tag>{system}</Tag>
    <S.Description>{getDescription(description)}</S.Description>
  </S.Card>
)

export default Product

import { useState } from 'react'

import Section from '../Section'
import { GalleryItem } from '../../pages/Home'

import zelda from '../../assets/images/Zelda.png'
import resident from '../../assets/images/Resident.png'
import play from '../../assets/images/play.png'
import zoom from '../../assets/images/zoom.png'
import closeIcon from '../../assets/images/fechar.png'

import * as S from './styles'

const mock: GalleryItem[] = [
  {
    type: 'image',
    url: zelda
  },
  {
    type: 'image',
    url: resident
  },
  {
    type: 'video',
    url: 'https://www.youtube.com/embed/MTd_Nf2AzTk?si=gfaS-pkYUh8zbo'
  }
]

type Props = {
  defaultCover: string
  name: string
  items: GalleryItem[] // Alterado para 'items' (com letra minúscula) para evitar conflito com o componente 'Items'
}

interface ModalState extends GalleryItem {
  isVisible: boolean
}

const Gallery = ({ defaultCover, name, items }: Props) => {
  const [modal, setModal] = useState<ModalState>({
    isVisible: false,
    type: 'image',
    url: ''
  })

  const getMediaCover = (item: GalleryItem) => {
    return item.type === 'image' ? item.url : defaultCover
  }

  const getMediaIcon = (item: GalleryItem) => {
    return item.type === 'image' ? zoom : play
  }

  const closeModal = () => {
    setModal({
      isVisible: false,
      type: 'image',
      url: ''
    })
  }

  return (
    <>
      <Section title="Galeria" background="black">
        <S.Items>
          {items.map((media, index) => (
            <S.Item
              key={media.url}
              onClick={() => {
                setModal({
                  isVisible: true,
                  type: media.type,
                  url: media.url
                })
              }}
            >
              <img
                src={getMediaCover(media)}
                alt={`Mídia ${index + 1} de ${name}`}
              />
              <S.Action>
                <img
                  src={getMediaIcon(media)}
                  alt="Clique para maximizar a mídia"
                />
              </S.Action>
            </S.Item>
          ))}
        </S.Items>
      </Section>

      <S.Modal className={modal.isVisible ? 'is-visible' : ''}>
        <S.ModalContent className="container">
          <header>
            <h4>{name}</h4>
            <img src={closeIcon} alt="Ícone de fechar" onClick={closeModal} />
          </header>
          {modal.type === 'image' ? (
            <img src={modal.url} alt={name} />
          ) : (
            <iframe
              src={modal.url}
              title={`Vídeo de ${name}`}
              frameBorder="0"
              allowFullScreen
            />
          )}
        </S.ModalContent>
        <div onClick={closeModal} className="overlay"></div>
      </S.Modal>
    </>
  )
}

export default Gallery

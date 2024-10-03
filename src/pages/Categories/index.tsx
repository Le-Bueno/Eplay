import ProductList from '../../components/ProductsList'

import resindet from '../../assets/images/Resident.png'
import Diablo from '../../assets/images/Diablo.png'
import JEDI from '../../assets/images/JEDI.png'
import Zelda from '../../assets/images/Zelda.png'
import StreetFighter from '../../assets/images/StreetFighter.png'

import { LanguageVariant } from 'typescript'
import { useEffect, useState } from 'react'
import {
  useGetActionGamesQuery,
  useGetFightGamesQuery,
  useGetRpgGamesQuery,
  useGetSimulationGamesQuery,
  useGetSportsGamesQuery
} from '../../services/api'

const Categories = () => {
  const { data: actionGames, isLoading: isLoadingAction } =
    useGetActionGamesQuery()
  const { data: fightGames, isLoading: isLoadingFight } =
    useGetFightGamesQuery()
  const { data: rpgGames, isLoading: isLoadingRpg } = useGetRpgGamesQuery()
  const { data: simulationGames, isLoading: isLoadingSimulation } =
    useGetSimulationGamesQuery()
  const { data: sportGames, isLoading: isLoadingSport } =
    useGetSportsGamesQuery()

  return (
    <>
      <ProductList
        games={actionGames}
        title="Acao"
        background="gray"
        id="action"
        isLoading={isLoadingAction}
      />
      <ProductList
        games={fightGames}
        title="Esportes"
        background="black"
        id="sports"
        isLoading={isLoadingSport}
      />
      <ProductList
        games={rpgGames}
        title="Luta"
        background="gray"
        id="fight"
        isLoading={isLoadingFight}
      />
      <ProductList
        games={simulationGames}
        title="RPG"
        background="black"
        id="rpg"
        isLoading={isLoadingRpg}
      />
      <ProductList
        games={sportGames}
        title="Simulacao"
        background="gray"
        id="simulation"
        isLoading={isLoadingSimulation}
      />
    </>
  )
}

export default Categories

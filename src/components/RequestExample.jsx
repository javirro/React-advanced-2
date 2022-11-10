import { Suspense } from "react"
import { useFetchPokemon } from "../hooks/useFetchSuspense"
import Loading from "./Loading"

const RequestExample = ({ pokemonName }) => {

  const response = useFetchPokemon(pokemonName)

  return (
    <div>
      <h1> This in an example </h1>
      <h3> Selected Pokemon: <b> {response.name} </b> </h3>
    </div>
  )
}

export const RequestExampleWrapper = (props) => (
  <Suspense fallback={<Loading />}>
    <RequestExample pokemonName={props.pokemonName} />
  </Suspense>
)

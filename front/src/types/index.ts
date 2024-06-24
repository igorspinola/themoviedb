//-- TYPEs
export type VoidFunction = () => void
export type FilterAny = (item: any) => void
export type FilterString = (item: string) => void
export type FilterNumber = (item: number) => void

//-- INTERFACEs
// Component Props
export interface CardProps {
  id: number
  poster?: any
  titulo: string
  ano: any
  idioma: string
  nota: number
}
export interface FavButtonProps {
  movieId: number,
  title: string,
  voteAverage: number,
  originalLanguage: string,
  posterPath: any
}
export interface HMenuProps {
  className?: string
}
export interface IdProps {
  className?: string
  desktop?: boolean
}
export interface NavBarProps {
  className?: string
}
export interface TextProps {
  as?: 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  tipo?: string
  className?: string
  children: React.ReactNode
}

// ContextProps
export interface ContextProps {
  children: React.ReactNode
}
export interface FiltroContextType {
  Idioma: string
  Genero: number
  Titulo: string
  Filmes: any[]
  filterIdioma: FilterString
  filterGenero: FilterNumber
  filterTitulo: FilterAny
}
export interface HMenuContextType {
  HMenuPrincipal: boolean
  HMenuIdiomas: boolean
  HMenuGeneros: boolean
  toggleHMenuPrincipal: VoidFunction
  toggleHMenuIdiomas: VoidFunction
  toggleHMenuGeneros: VoidFunction
}
export interface ModalContextType {
  ModalLogin: boolean
  ModalSignup: boolean
  toggleModalLogin: VoidFunction
  toggleModalSignup: VoidFunction
}
export interface UserContextType {
  Email: string | null
  Favoritos: boolean
  filterEmail: FilterAny
  filterFavoritos: VoidFunction
}
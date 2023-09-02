export interface Post {
  id : number
  titulo : string,
  texto : string,
  genero : string,
  imagem? : File,
  numeroCurtidas : number,
  comentarios : string[]
}

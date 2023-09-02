export interface Post {
  titulo : string,
  texto : string,
  genero : string,
  imagem? : File,
  numeroCurtidas : number,
  comentarios : string[]
}

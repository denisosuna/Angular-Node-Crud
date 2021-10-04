export interface UserLoginI {
  email:string,
  password:string
}

export interface UserRegisterI {
  mail:string,
  pass:string
  name:string,
  id_tipouser:number  
}

export interface UserTypesI{
    id: Number,
    name: string;
  }
let emailRegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
passwordRegExp = /\d/;

/*
passwordRegExp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm;
-at least 8 characters
- must contain at least 1 uppercase letter, 1 lowercase letter, and 1 number
- Can contain special characters
 */

export default function validation (obj) {
  let errors = {};
  console.log(!obj.email)
  if(!obj.email){
    errors.email = 'Se requiere un nombre';
  }
  if(obj.email && !emailRegExp.test(obj.email)) {
    errors.email = 'Debe ser un correo electrónico'
  }
  if(obj.email.length > 35) {
    errors.email = 'Mas de 36 characters'
  }

  if(obj.password.length < 6 || obj.password.length > 10) {
    errors.password = 'La longitud debe ser entre 6 y 10 caracteres'
  } else if (!passwordRegExp.test(obj.password)){
    errors.password = 'La contraseña debe tener un nro'
  } else {
  }
  
  return errors;
};
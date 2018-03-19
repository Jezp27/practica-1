import Controller from '@ember/controller';
import{ get } from '@ember/object';

export default Controller.extend({
  actions:{
    login(){
      const name= this.get(nombre);
      const pass= this.get(pass);
      this.get('usuario').forEach((usuario) => {
        if (usuario.nombre=== name) {
          if(usuario.contraseña===pass){
             /*usuario valido*/
          }else{
            /*contraseña no valida*/
          }
        } else {
          /*usuario no creado*/
        }
      })

      console.log("well!!");
      window.alert(name);
    }
  }
});

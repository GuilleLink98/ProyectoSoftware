import * as core from "@angular/core";
import { Router, RouterModule } from "@angular/router";
import { PostProvider } from "../../../providers/post-provider";
import { ToastController } from "@ionic/angular";
import { Storage } from "@ionic/Storage";


@core.Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements core.OnInit {

  Nombre: string;
  password: string;

  constructor(
    public router: Router,
    private postPvdr: PostProvider,
    public storage: Storage,
    public toastCtrl: ToastController
    
    ) { }
    
  ngOnInit() {
  }
  async prosesLogin() {
    if (this.Nombre != "" && this.password != "") {
      let body = {
        Nombre: this.Nombre,
        password: this.password,
        aksi: "loginP"
      };

      this.postPvdr.postData(body, 'proses-api.php').subscribe(async data =>{ //Llamada del metodo postData en post-provider, recibe como parametros
                                                                              //El cuerpo con los datos de la tabla a consultar y el nombre de 
                                                                              //proses-api.php donde se realizan los queris.
        var alertpesan = data.msg;
        if (data.success) {
          this.storage.set("session_storage", data.result);
          this.router.navigate(["/home"]); ///Navegacion hacia home una vez verificados los datos
          const toast = await this.toastCtrl.create({
            message: "Login Succesfully.",
            duration: 2000
          });
          toast.present();
          this.Nombre = "";
          this.password = "";
          console.log(data);
        } else {
          const toast = await this.toastCtrl.create({
            message: alertpesan,
            duration: 2000
          });
          toast.present();
        }
      });
    } else {
      const toast = await this.toastCtrl.create({
        message: "Nombre or password Invalid.",
        duration: 2000
      });
      toast.present();
    }
  }

}
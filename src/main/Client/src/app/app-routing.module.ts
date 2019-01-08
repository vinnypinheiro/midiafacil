import {LoginComponent} from "./security/login/login.component";
import {LogoutComponent} from "./security/logout/LogoutComponent";
import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {AuthGuard} from "./security/auth.guard";

const routes: Routes = [
  {path: '', redirectTo: '/sample', pathMatch: 'full', canActivate: [AuthGuard]},
  {path: 'login', component: LoginComponent},
  {path: 'logout', component: LogoutComponent, canActivate: [AuthGuard]},

  {path: 'usuario', loadChildren: './entidades/usuario/usuario.module#UsuarioModule'},


  {path: 'agencia', loadChildren: './entidades/agencia/agencia.module#AgenciaModule'},
  {path: 'campanha', loadChildren: './entidades/campanha/campanha.module#CampanhaModule'},
  {path: 'cliente', loadChildren: './entidades/cliente/cliente.module#ClienteModule'},
  {path: 'faturamentopadrao', loadChildren: './entidades/faturamentopadrao/faturamentopadrao.module#FaturamentoPadraoModule'},
  {path: 'formato', loadChildren: './entidades/formato/formato.module#FormatoModule'},
  {path: 'formatorevista', loadChildren: './entidades/formatorevista/formatorevista.module#FormatoRevistaModule'},
  {path: 'mailpi', loadChildren: './entidades/mailpi/mailpi.module#MailPiModule'},
  {path: 'material', loadChildren: './entidades/material/material.module#MaterialModule'},
  {path: 'peca', loadChildren: './entidades/peca/peca.module#PecaModule'},
  {path: 'pedidoinsercao', loadChildren: './entidades/pedidoinsercao/pedidoinsercao.module#PedidoInsercaoModule'},
  {path: 'pedidoinsercaoitem', loadChildren: './entidades/pedidoinsercaoitem/pedidoinsercaoitem.module#PedidoInsercaoItemModule'},
  {path: 'planomidia', loadChildren: './entidades/planomidia/planomidia.module#PlanoMidiaModule'},
  {path: 'planomidiainsersao', loadChildren: './entidades/planomidiainsersao/planomidiainsersao.module#PlanoMidiaInsersaoModule'},
  {path: 'planomidiainsersaoitem', loadChildren: './entidades/planomidiainsersaoitem/planomidiainsersaoitem.module#PlanoMidiaInsersaoItemModule'},
  {path: 'produto', loadChildren: './entidades/produto/produto.module#ProdutoModule'},
  {path: 'programa', loadChildren: './entidades/programa/programa.module#ProgramaModule'},
  {path: 'tipomidia', loadChildren: './entidades/tipomidia/tipomidia.module#TipoMidiaModule'},
  {path: 'tipomidiadigital', loadChildren: './entidades/tipomidiadigital/tipomidiadigital.module#TipoMidiaDigitalModule'},
  {path: 'tipoproduto', loadChildren: './entidades/tipoproduto/tipoproduto.module#TipoProdutoModule'},
  {path: 'veiculo', loadChildren: './entidades/veiculo/veiculo.module#VeiculoModule'},
  {path: 'vencimentopadrao', loadChildren: './entidades/vencimentopadrao/vencimentopadrao.module#VencimentoPadraoModule'},


];
@NgModule({  exports: [RouterModule],  imports: [RouterModule.forRoot(routes)]})export class AppRoutingModule {}

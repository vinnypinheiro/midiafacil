import {Component, OnInit} from '@angular/core'; 
import {ActivatedRoute, Router} from '@angular/router'; 
import { FormBuilder, FormGroup, FormArray, Validators, FormControl } from '@angular/forms';
import { fuseAnimations } from '@fuse/animations';

import {DomainBase, Operation} from '../../../utils/utils';


import {CommonsForm} from '../../../commons-form'; 
import {FilterData} from '../../../components/interfaces'; 
import {CommonsService} from '../../../commons-service'; 
import {Cliente} from '../cliente'; 
import {ClienteService} from '../cliente.service';

@Component({
 selector: 'gov-cliente-form', 
 templateUrl: './cliente-form.component.html', 
 animations   : fuseAnimations,
 styleUrls: ['./cliente-form.component.scss'] 
}) 
export class ClienteFormComponent extends CommonsForm<Cliente>  implements OnInit { 

  

    constructor(private fb: FormBuilder,
                apiService: ClienteService,
                route: ActivatedRoute, 
                router: Router ) { 
     
         super(apiService, route, router); 
     } 

     ngOnInit() { 
         
        this.beanSubscribe = this.route.params.subscribe(params => {
            this.beanId = params['id'];
            if(this.beanId === "novo"){
              this.beanId = "";
              this.operation = Operation.CREATE;
            }else {
              this.operation = Operation.SELECT;
              this.apiService.findById(this.beanId).subscribe(response => {
                this.activeBean = (<any>response);

                console.log(this.activeBean)

                this.activeForm.patchValue({
                    id: this.activeBean.id,
                    nomefantasia: this.activeBean.nomefantasia, 
                    cnpj: this.activeBean.cnpj,
                    cpf: this.activeBean.cpf,
                    data_cadastro: this.activeBean.data_cadastro,
                    inscricaoestadual: this.activeBean.inscricaoestadual,
                    inscricaomunicipal: this.activeBean.inscricaomunicipal,
                    obs: this.activeBean.obs,
                    razaosocial: this.activeBean.razaosocial,
                                       
                  });

                  this.setEnderecosArray();
                
              });
            }
           

        });

                
                              
     } 

     setEnderecosArray(){
        let control = <FormArray>this.activeForm.controls.enderecoList;
        this.activeBean.enderecoList.forEach(x => {
          control.push(this.fb.group({
              endereco: x.endereco,
              cidade: x.cidade,
              bairro: x.bairro
        }))
        })
      }
     
   
  
     //Cliente reactive form
     activeForm = this.fb.group({
        id: [''],
        data_cadastro:  [''],
        nomefantasia: [''],
        razaosocial:  [''], 
        inscricaoestadual:  [''],
        inscricaomunicipal: [''],
        cnpj: [''],
        cpf:  [''],     
        obs:  [''],
       
       
        contaBancariaList: this.fb.array([this.addContasBancariasGroup()]),
        contatoList: this.fb.array([this.addContatoGroup()]),
        siteList: this.fb.array([this.addSiteGroup()]),
        telefoneList: this.fb.array([this.addTelefoneGroup()]),
        emailList: this.fb.array([this.addEmailGroup()]),
        enderecoList: this.fb.array([this.addAddressGroup()]),
      
    });

      addAddressGroup() {
       return this.fb.group({
         endereco: [null],
         bairro: [null],
         cidade: [null],
         estado: [null]
       });
     }

     addContasBancariasGroup() {
        return this.fb.group({
            banco:  [null],
            agencia:  [null],
            conta:  [null],
            cnpjcpf: [null],
            operacao:  [null],
            tipoconta:  [null],
            favorecido: [null]
        });
      }

      addContatoGroup() {
        return this.fb.group({
          contato: [null],
          email: [null],
          telefone: [null]
        });
      }

      addSiteGroup() {
        return this.fb.group({
          tiposite: [null],
          site: [null]
        });
      }

      addTelefoneGroup() {
        return this.fb.group({
          tipotelefone: [null],
          telefone: [null]
        });
      }

      addEmailGroup() {
        return this.fb.group({
          tipoemail: [null],
          email: [null]
        });
      }

      ////// Endereço List //////////
     addAddress() {
       this.addressArray.push(this.addAddressGroup());
     }
     removeAddress(index) {
       this.addressArray.removeAt(index);
     }
     get addressArray() {
       return <FormArray>this.activeForm.get('enderecoList');
     }

     ////// Endereço List fim /////////////////////////////////////////////////////////////////////

       ////// Contas Bancarias List //////////
       addContasBancarias() {
        this.contasBancariasArray.push(this.addContasBancariasGroup());
      }
      removeContasBancarias(index) {
        this.contasBancariasArray.removeAt(index);
      }
      get contasBancariasArray() {
        return <FormArray>this.activeForm.get('contaBancariaList');
      }
      ////// Contas Bancarias List fim /////////////////////////////////////////////////////////////

        ////// Contato List //////////
     addContato() {
        this.contatoArray.push(this.addContasBancariasGroup());
      }
      removeContato(index) {
        this.contatoArray.removeAt(index);
      }
      get contatoArray() {
        return <FormArray>this.activeForm.get('contatoList');
      }
      ////// Contato List fim ///////////////////////////////////////////////////////////////////////////////

        ////// Site List //////////
     addSite() {
        this.siteArray.push(this.addSiteGroup());
      }
      removeSite(index) {
        this.siteArray.removeAt(index);
      }
      get siteArray() {
        return <FormArray>this.activeForm.get('siteList');
      }
      ////// Site List fim /////////////////////////

        ////// Telefone List //////////
     addTelefone() {
        this.telefoneArray.push(this.addTelefoneGroup());
      }
      removeTelefone(index) {
        this.telefoneArray.removeAt(index);
      }
      get telefoneArray() {
        return <FormArray>this.activeForm.get('telefoneList');
      }
      ////// Telefone List fim /////////////////////////

        ////// Email List //////////
     addEmail() {
        this.emailArray.push(this.addEmailGroup());
      }
      removeEmail(index) {
        this.emailArray.removeAt(index);
      }
      get emailArray() {
        return <FormArray>this.activeForm.get('emailList');
      }

      ////// Email List fim /////////////////////////



     saveCliente() {
        // TODO: Use EventEmitter with form value
        console.warn(this.activeForm.value);
        this.activeBean = this.activeForm.value;
        this.save();
        //this.apiService.save(this.clienteForm.value);
      }





     getLookupService(lookupName: string): CommonsService<any> {
         switch (lookupName) { 
             case 'uf': {
             } 

             default: { 
                 console.log('serviço não disponibilizado para ', lookupName) 
                 return this.apiService; 
             } 
         } 
     } 

     getDeLookupFilter(lookupValue: any): FilterData {
         switch (lookupValue.name) { 
             case 'uf': { 
                 return this.buildLookupFilter('uf'); 
             }

             default: { 
                 console.log('filtro não disponibilizado para ', lookupValue.name) 
             } 
         } 
         return null; 
     } 

     onButtonActionClick(): void { 
         //console.log(this.activeBean.cliente.id); 
     } 
} 


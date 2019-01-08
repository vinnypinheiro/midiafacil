import {Component, OnInit} from '@angular/core'; 
import {ActivatedRoute, Router} from '@angular/router'; 
import { FormBuilder, FormGroup, FormArray, Validators, FormControl } from '@angular/forms';
import { fuseAnimations } from '@fuse/animations';


import {DomainBase, Operation} from '../../../utils/utils';

import {CommonsForm} from '../../../commons-form'; 
import {FilterData} from '../../../components/interfaces'; 
import {CommonsService} from '../../../commons-service'; 
import {Veiculo} from '../veiculo'; 
import {VeiculoService} from '../veiculo.service'; 
import {UfService} from '../../uf/uf.service'; 
import {TipoMidiaService} from '../../tipomidia/tipomidia.service'; 

@Component({
 selector: 'gov-veiculo-form', 
 templateUrl: './veiculo-form.component.html',
    animations   : fuseAnimations,
    styleUrls: ['./veiculo-form.component.scss']
}) 
export class VeiculoFormComponent extends CommonsForm<Veiculo> implements OnInit { 

   

    constructor(
                          private fb: FormBuilder,
                            apiService: VeiculoService, 
                            private ufService: UfService, 
                            private tipomidiaService: TipoMidiaService, 
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
                  this.setEmailArray();
                  this.setTelefoneListArray();
                  this.setContatoListArray();
                  this.setSiteListArray();
                  this.setcontaBancariaArray();

                
              });
            }
           

        });


       
     }

    setcontaBancariaArray(){
        let control = <FormArray>this.activeForm.controls.contabancariaList;
        this.activeBean.contaBancariaList.forEach(x => {
            control.push(this.fb.group({
                id: x.id,
                agencia: x.agencia,
                banco: x.banco,
                cnpjcpf: x.cnpjcpf,
                conta: x.conta,
                favorecido: x.favorecido,
                operacao: x.operacao,
                tipoconta: x.tipoconta
            }))
        })

    }

     setEnderecosArray(){
        let control = <FormArray>this.activeForm.controls.enderecoList;
        this.activeBean.enderecoList.forEach(x => {
          control.push(this.fb.group({
              id: x.id,
              endereco: x.endereco,
              cidade: x.cidade,
              bairro: x.bairro,
              estado: x.estado,
              cep: x.cep
        }))
        })
      }

      setEmailArray(){
        let control = <FormArray>this.activeForm.controls.emailList;
        this.activeBean.emailList.forEach(e => {
          control.push(this.fb.group({
              id: e.id,
              tipoemail: e.tipoemail,
              email: e.email
        }))
        })
      }

    setTelefoneListArray(){
        let control = <FormArray>this.activeForm.controls.telefoneList;
        this.activeBean.telefoneList.forEach(t => {
            control.push(this.fb.group({
                id: t.id,
                tipotelefone: t.tipotelefone,
                numero: t.numero

            }))
        })
    }

    setContatoListArray(){
        let control = <FormArray>this.activeForm.controls.contatoList;
        this.activeBean.contatoList.forEach(c => {
            control.push(this.fb.group({
                contato: c.contato,
                email: c.email,
                telefone: c.telefone,
                tipocontato: c.tipocontato,
            }))
        })
    }

    setSiteListArray(){
        let control = <FormArray>this.activeForm.controls.siteList;
        this.activeBean.siteList.forEach(s => {
            control.push(this.fb.group({
                id: s.id,
                tiposite: s.tiposite,
                site: s.site
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
           cep: [null],
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
          telefone: [null],
            tipocontato: [null]
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



    saveVeiculo() {
       // TODO: Use EventEmitter with form value
       console.warn(this.activeForm.value);
       this.activeBean = this.activeForm.value;
       this.save();
       //this.apiService.save(this.clienteForm.value);
     }




     getLookupService(lookupName: string): CommonsService<any> {
         switch (lookupName) { 
             case 'uf': { 
                 return this.ufService; 
             } 

             case 'tipomidia': { 
                 return this.tipomidiaService; 
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

             case 'tipomidia': { 
                 return this.buildLookupFilter('tipomidia'); 
             }

             default: { 
                 console.log('filtro não disponibilizado para ', lookupValue.name) 
             } 
         } 
         return null; 
     } 

     onButtonActionClick(): void { 
         //console.log(this.activeBean.veiculo.id); 
     } 
} 


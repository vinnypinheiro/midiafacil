import {Router} from "@angular/router";
import {SharedService} from "../shared/shared.service";
import {HostListener, OnInit, ViewChild} from "@angular/core";
import {ReportFilterComponent} from "../report-filter/report-filter.component";
import {Report} from "../shared/report";
import {StateButons} from "../components/componentsClass";

declare var $: any;

export abstract class CommonReports implements OnInit{

  @ViewChild(ReportFilterComponent) modalFilter;

  protected stickyMenu: boolean = false;
  protected reports: Report[];
  protected report: Report;
  protected reportName: string;
  protected stateButons: StateButons;


  protected constructor(protected router?: Router, public sharedService?: SharedService){}

  ngOnInit(): void{
    this.stateButons = new StateButons();
    this.stateButons.filter = false;
    this.stateButons.print = false;

    this.iCheckGreenLoad();
  }


  abstract setReportList(): void


  @HostListener('window:scroll', ['$event'])
  handleScroll() {
    const windowScroll = window.pageYOffset;
    if (windowScroll >= 150) {
      this.stickyMenu = true;
    } else {
      this.stickyMenu = false;
    }
  }

  iCheckGreenLoad(){
    $('.i-checks').iCheck({
      checkboxClass: 'icheckbox_square-green',
      radioClass: 'iradio_square-green',
    });
  }

  closeScreen(){
    this.router.navigateByUrl('/');
  }

  onButtonActionClick(button: string): void{
    switch (button) {
      case 'filter':
        this.modalFilter.showDialog('modalReportFilter');
        break;

      case 'print':
        this.report = this.reports.find(r => r.nome == this.reportName);
        this.sharedService.printReport("",0);
        break;
    }
  }

  onSelectedChange(): void{
    this.stateButons.filter = true;

    if(this.reportName != null || this.reportName != undefined){
      let rpt: Report;

      if((rpt = this.reports.find(r => r.nome == this.reportName)) != null){

        if(rpt.needFilter){
          this.stateButons.filter = true;
        }
        else {
          this.stateButons.filter = true;
          this.stateButons.print = true;
        }
      }
      else{
        alert('Ocorreu um erro interno!')
      }
    }

    return null;
  }
}

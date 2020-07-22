import { Component, OnInit } from '@angular/core';
import { LoanInfoService } from '../loan-info.service';
import { ActivatedRoute } from '@angular/router';
import { faPiggyBank, faDollarSign } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-business-info',
  templateUrl: './business-info.component.html',
  styleUrls: ['./business-info.component.scss']
})
export class BusinessInfoComponent implements OnInit {

  faPiggyBank = faPiggyBank;
  faDollarSign = faDollarSign
  businessInfo;
  params;

  constructor(private loanService: LoanInfoService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.params = params['id']
    });
    this.loanService.getBusiness(this.params).subscribe(res => {
      this.businessInfo = res.data;
    })
  }

}

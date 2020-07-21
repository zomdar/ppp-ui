import { Component, OnInit } from '@angular/core';
import { LoanInfoService } from '../loan-info.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  page = 1;
  pageSize = 10;
  collectionSize;
  loans;
  searchForm

  constructor(
    private loanService: LoanInfoService,
    private formBuilder: FormBuilder
  ) {
    this.searchForm = this.formBuilder.group({
      businessName: ["", [Validators.required]],
    });
  }

  ngOnInit(): void {
    this.loanService.getAllLoans(this.page, this.pageSize).subscribe((res) => {
      this.loans = res.loans;
      this.page = res.current;
      this.collectionSize = res.pages;
    });
  }

  refreshLoans(page?) {
    if (page) {
      this.loanService.getAllLoans(page, this.pageSize).subscribe((res) => {
        this.loans = res.loans;
      });
    }
  }

  refreshPageSize() {
      this.loanService.getAllLoans(this.page, this.pageSize).subscribe((res) => {
        this.loans = res.loans;
      });
  }

  handleSubmit(businessName, valid) {
    console.log(businessName, valid)
  }
}

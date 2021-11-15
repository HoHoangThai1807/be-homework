export type BankOutputModel = {
  branch: string;
  account_number: string;
  account_name: string;
  content: string;
};

export enum Payment {
  ACCOUNT = "account",
  TRANSFER = "transfer",
}

export enum BankTitles {
  branch = "Chi nhánh ngân hàng",
  account_number = "Số tài khoản",
  account_name = "Tên tài khoản",
  content = "Nội dung chuyển tiền",
}

import { Payment } from "../widgets/main.type";

export const methods: {
  img: string;
  content: string;
  width: string;
  type: Payment;
}[] = [
  {
    img: "/images/visa.png",
    content: "Visa ...2725",
    width: "24px",
    type: Payment.ACCOUNT,
  },
  {
    img: "/images/bank.png",
    content: "Chuyển khoản ngân hàng",
    width: "20px",
    type: Payment.TRANSFER,
  },
];

export const amountArr: number[] = [
  100000, 200000, 300000, 500000, 800000, 1000000,
];

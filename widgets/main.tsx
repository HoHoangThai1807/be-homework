import type { NextPage } from "next";
import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import { amountArr, methods } from "../mock";
import { BankOutputModel, BankTitles, Payment } from "./main.type";

const MainPresenter: NextPage = () => {
  const [payment, setPayment] = useState<string>(Payment.TRANSFER);
  const [amount, setAmount] = useState<number>(100000);
  const [successVisible, setSuccessVisible] = useState<boolean>(false);
  const [bankInfo, setBankInfo] = useState<BankOutputModel>({
    branch: "",
    account_number: "",
    account_name: "",
    content: "",
  });

  const getBankInfo = async () => {
    const response = await fetch(`/api/bank`);
    if (response.status === 200) {
      const items = response && (await response.json());
      setBankInfo(items);
    } else console.log(response.statusText);
  };

  const handleSubmit = async (amount: number) => {
    const response = await fetch(`/api/card`, {
      method: "POST",
      body: JSON.stringify({ amount }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.status === 200) {
      setSuccessVisible(true);
    } else console.log(response.statusText);
  };

  useEffect(() => {
    getBankInfo();
  }, []);

  return (
    <div className={styles.charity}>
      <div className={styles.header}>Ủng hộ chống dịch Covid-19</div>

      <div className={styles.methods}>
        <span className={styles.methods__title}>Chọn hình thức quyên góp</span>
        <div>
          {methods.map((method, idx) => {
            return (
              <div
                key={idx}
                className={styles.methods__btn}
                onClick={(e) => setPayment(method.type)}
              >
                <div className={styles.methods__imgs}>
                  <Image
                    width={method.width}
                    height={method.width}
                    objectFit="contain"
                    src={method.img}
                  />
                </div>
                <span className={styles.methods__content}>
                  {method.content}
                </span>
                {method.type === payment && (
                  <Image
                    width={16}
                    height={16}
                    objectFit="contain"
                    src="/images/check.png"
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>

      {payment === Payment.ACCOUNT && (
        <div className={styles.transfer}>
          <span className={styles.transfer__title}>Chọn số tiền quyên góp</span>
          <div className={styles.transfer__amounts}>
            {amountArr.map((element, idx) => {
              return (
                <button
                  className={`${styles.transfer__amounts_card} ${
                    element === amount ? styles.active : ""
                  }`}
                  key={idx}
                  onClick={(e) => setAmount(element)}
                >
                  {Intl.NumberFormat("en-US").format(element)}
                  <u>đ</u>
                </button>
              );
            })}
          </div>
          <button
            className={`${styles.transfer__confirm} ${styles.animate}`}
            onClick={(e) => handleSubmit(amount)}
          >
            Tiến hành thanh toán
          </button>
        </div>
      )}

      {payment === Payment.TRANSFER && (
        <div className={styles.bank}>
          {Object.entries(bankInfo).map(([key, value], idx) => {
            return (
              <div key={idx} className={styles.bank__row}>
                <div className={styles.bank__row_text}>
                  <span className={styles.bank__title}>
                    {(BankTitles as any)[key]}
                  </span>
                  <span className={styles.bank__content}>{value}</span>
                </div>
                {key === "account_number" && (
                  <button className={styles.bank__copyBtn}>Copy STK</button>
                )}
              </div>
            );
          })}
        </div>
      )}

      <div
        style={successVisible ? { display: "block" } : { display: "none" }}
        className={styles.success_popup}
        onClick={(e) => setSuccessVisible(false)}
      />
      <div
        style={successVisible ? { display: "flex" } : { display: "none" }}
        className={styles.success_popup__card}
      >
        <Image
          src="/images/success.png"
          width={56}
          height={56}
          objectFit="contain"
          className={styles.success_popup__icon}
        />
        <span className={styles.success_popup__title}>
          Thanh toán thành công
        </span>
        <span className={styles.success_popup__content}>
          Xin chân thành cảm ơn sự ủng hộ của Quý khách hàng
        </span>
        <button
          onClick={(e) => setSuccessVisible(false)}
          className={`${styles.success_popup__btn} ${styles.animate}`}
        >
          OK
        </button>
      </div>
    </div>
  );
};

export default MainPresenter;

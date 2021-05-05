import React from "react";

function Content({ activeItem }) {
  const content = [
    {
      title: "register",
      p: [
        "Please visit CryptoIEX official website and click the Sign Up button on the top right-hand side. On the registration page, please follow the on-screen instructions and insert the email address and password that you’ll use for your account",
        "Confirm your email address to sing up to CryptoIEX",
      ],
    },
    {
      title: "ID VERIFICATION",
      p: [
        "Visit the CryptoIEX website and LogIn to account, go to the Verification page and easily get verified through our verification partners to gain access to all the CryptoIEX services",
      ],
    },
    {
      title: "CARD VERIFICATION",
      p: [
        "Deposit or withdraw your funds in minutes using your debit or credit card",
        "In order to make card transaction you need to link your debit or credit card to your CryptoIEX account via Verification Page. It takes a few minutes",
      ],
    },
    {
      title: "ACCESS TO WALLET",
      p: [
        "A crypto wallet is a secure place where you store your crypto funds. Wallets are created using private and public keys. With access to a crypto wallet, you can check your crypto balance and transaction history and move funds around the world using the blockchain",
      ],
    },
    {
      title: "GET STARTED",
      p: [
        "Complete our basic steps and start buying or selling cryptocurrencies",
        "We made it fast and easy!",
      ],
    },
  ];

  return (
    <>
      <h1>{content[activeItem].title}</h1>
      {content[activeItem].p.map((item, key) => (
        <p key={key}>{item}</p>
      ))}
    </>
  );
}

export default Content;

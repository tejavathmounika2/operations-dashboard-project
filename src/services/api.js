import axios from "axios";

export const getCrypto = async () => {
  try {
    const res = await axios.get(
      "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum&vs_currencies=usd"
    );

    return {
      bitcoin: res.data.bitcoin.usd,
      ethereum: res.data.ethereum.usd,
    };
  } catch (error) {
    console.log(error);

    return {
      bitcoin: "108452.35",
      ethereum: "2524.78",
    };
  }
};
import {
  Marcellus as MainFont,
  Teko as Font1,
} from "next/font/google";

const mainFont = MainFont({
  weight: ["400"],
  subsets: ["latin"],
  fallback: ["sans-serif"],
});
const font1 = Font1({
  weight: ["400" , "300" , "500" , "600" , "700"],
  subsets: ["latin"],
  fallback: ["sans-serif"],
});

const fonts = {
  mainFont: mainFont.className,
  font1: font1.className,
};

export default fonts;

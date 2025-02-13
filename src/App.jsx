import Header from "./components/Header";
import Introduction from "./components/Introduction";
import Main from "./components/Main";
import TimesWork from "./components/TimesWork";
import "./style/index.css";
import OurWork from "./components/OurWork";
import ContactUs from "./components/ContactUs";
export const App = () => {
  return (
    <div>
      <Header />
      <Main />
      <Introduction />
      <TimesWork />
      <OurWork />
      <ContactUs />
    </div>
  );
};

import React from "react";
import Header from "../components/Header";
import Drawer from "../components/Drawer";
import Footer from "../components/Footer";

function Main() {
  return (
    <div>
      <Header />
      <Drawer />
      <body>
        <div>Retail Sales</div>
        <div>
          <table>
            <tr></tr>
          </table>
        </div>
      </body>
      <Footer />
    </div>
  );
}

export default Main;

import React, { createContext } from "react";
import BusinessCard from "./views/business-card";
import Header from "./views/header";
// import LikeButton from "./views/like-button";

interface ThemeProps {
  [key: string]: { background: string; color: string };
}

const Theme: ThemeProps = {
  light: {
    background: "#fff",
    color: "#333",
  },
  dark: {
    background: "#333",
    color: "#fff",
  },
  danger: {
    background: "#dc3545",
    color: "#fff",
  },
};

export const ThemeContext = createContext(Theme.light);

function App() {
  return (
    <div className="App">
      <ThemeContext.Provider value={Theme.danger}>
        <Header title="React Test" />
        <BusinessCard
          data={{
            name: "南天",
            intro: "三好青年",
            avatar:
              "https://images.dog.ceo/breeds/poodle-standard/n02113799_6715.jpg",
            mobile: "18211067697",
            post: "前端开发工程师",
            company: "北京南天信息工程有限公司",
          }}
          style={{ margin: "20px" }}
        ></BusinessCard>
        {/* <LikeButton></LikeButton> */}
      </ThemeContext.Provider>
    </div>
  );
}

export default App;

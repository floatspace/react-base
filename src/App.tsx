import BusinessCard from "./views/business-card";
// import LikeButton from "./views/like-button";

function App() {
  return (
    <div className="App">
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
    </div>
  );
}

export default App;

import Comments from "./comments/Comments";

const App = () => {
  return (
    <div style={{ "marginLeft" : "200px", "margin-right": "200px"}}>
      <h1 style={{ "marginLeft" : "350px", "margin-right": "200px"}}>Business Associated Solutions</h1>
      <Comments
        commentsUrl="http://localhost:3004/comments"
        currentUserId="1"
      />
    </div>
  );
};

export default App;

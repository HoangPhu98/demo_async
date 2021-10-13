import React from "react";
import Card from "./Card";
import axios from "axios";

class App extends React.Component {
  constructor(props) {
    super();
    this.state = {
      data: null,
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  // fetchData = () => {
  //   axios
  //     .get("https://jsonplaceholder.typicode.com/users")
  //     .then((userRes) => {
  //       const users = userRes.data;
  //       users.forEach((user) => {
  //         axios
  //           .get(`https://jsonplaceholder.typicode.com/posts?userId=${user.id}`)
  //           .then((postRes) => {
  //             const posts = postRes.data;
  //             // console.log(`List posts of user ${user.id}`);
  //             // console.log(posts);
  //             posts.forEach((post) => {
  //               axios
  //                 .get(
  //                   `https://jsonplaceholder.typicode.com/posts/${post.id}/comments`
  //                 )
  //                 .then((commentRes) => {
  //                   const comments = commentRes.data;
  //                   console.log(`List comments of post ${post.id}`);
  //                   console.log(comments)
  //                   let { data } = this.state;
  //                   if (!data) {
  //                     data = [];
  //                   }
  //                   this.setState({
  //                     data: [...data, comments],
  //                   });
  //                 });
  //             });
  //           });
  //       });
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };

  // Promise
  // fetchData = () => {
  //   axios
  //     .get("https://jsonplaceholder.typicode.com/userss")
  //     .then((userRes) => {
  //       const users = userRes.data;
  //       // console.log("List Users: ");
  //       // console.log(users);
  //       const postsPromises = users.map((user) =>
  //         axios.get(
  //           `https://jsonplaceholder.typicode.com/posts?userId=${user.id}`
  //         )
  //       );
  //       postsPromises.push(users);
  //       return Promise.all(postsPromises);
  //     })
  //     .then((listPostRes) => {
  //       // console.log("List Post Response: ");
  //       // console.log(listPostRes);
  //       let commentsPromises = [];
  //       const users = listPostRes.slice(-1);
  //       let allPost = [];
  //       listPostRes.slice(0, -1).forEach((postRes) => {
  //         const posts = postRes.data;
  //         // console.log(posts)
  //         posts.forEach((post, index) => {
  //           if (index === posts.length) return;
  //           commentsPromises.push(
  //             axios.get(
  //               `https://jsonplaceholder.typicode.com/posts/${post.id}/comments`
  //             )
  //           );
  //         });
  //         allPost = [...allPost, posts];
  //       });
  //       commentsPromises.push(users);
  //       commentsPromises.push(allPost);
  //       // console.log("Comment Promise")
  //       // console.log(commentsPromises)
  //       return Promise.all(commentsPromises);
  //     })
  //     .then((listCommentRes) => {
  //       console.log("List Comment Response: ");
  //       console.log(listCommentRes);
  //       let allComment = [];
  //       listCommentRes.slice(0, -2).forEach((commentRes) => {
  //         const comments = commentRes.data;
  //         allComment = [...allComment, ...comments];
  //       });

  //       // this.setState({
  //       //   data: allComment,
  //       // });
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };

  fetchData = async () => {
    try {
      const userRes = await axios.get(
        `https://jsonplaceholder.typicode.com/users`
      );
      
      const users = userRes.data;
      // console.log(users);

      const postsPromises = users.map((user) =>
        axios.get(
          `https://jsonplaceholder.typicode.com/posts?userId=${user.id}`
        )
      );
      console.log(postsPromises)


      const listPostRes = await Promise.all(postsPromises);
      console.log(listPostRes)
      let commentsPromises = [];
      // Duyet qua 10 user
      listPostRes.forEach((postRes) => {
        const posts = postRes.data;
        // duyet qua cac post cua 1 user
        posts.forEach((post, index) => {
          commentsPromises.push(
            axios.get(
              `https://jsonplaceholder.typicode.com/posts/${post.id}/comments`
            )
          );
        });
      });

      // const listCommentRes = await Promise.all(commentsPromises);
      // console.log("List comment Result")
      // console.log(listCommentRes);

      // let listComments = [];
      // listCommentRes.forEach((commentRes) => {
      //   const comments = commentRes.data;
      //   listComments = [...listComments, ...comments];
      // });
      // console.log("List comment")
      // console.log(listComments);
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    // const { cards, count } = this.state;
    console.log(this.state.data);
    return (
      <>
        {/* <div>Count = {count} </div>
        <input type="number" onChange={this.onChange} />
        <button onClick={this.increase}>Increase</button>
        {cards &&
          cards.map((card) => (
            <Card
              key={card.id}
              id={card.id}
              color={card.background}
              changeBackground={(color) =>
                this.changeBackground(color, card.id)
              }
            />
          ))} */}
        <div style={{ textAlign: "center", fontWeight: 'bold', fontSize: '20px' }}>Hello Async/Await</div>
      </>
    );
  }
}

export default App;

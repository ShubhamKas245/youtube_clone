import React from "react";
import { RxAvatar } from "react-icons/rx";

const commentData = [
  {
    name: "Shubham",
    text: "wow whata series of react js",
    replies: [],
  },
 
  {
    name: "Shubham",
    text: "wow whata series of react js",
    replies: [
      {
        name: "Shubham",
        text: "wow whata series of react js",
        replies: [
          {
            name: "Shubham",
            text: "wow whata series of react js",
            replies: [],
          },
          {
            name: "Shubham",
            text: "wow whata series of react js",
            replies: [],
          },
        ],
      },
      {
        name: "Shubham",
        text: "wow whata series of react js",
        replies: [
          {
            name: "Shubham",
            text: "wow whata series of react js",
            replies: [
              {
                name: "Shubham",
                text: "wow whata series of react js",
                replies: [],
              },
            ],
          },

          {
            name: "Shubham",
            text: "wow whata series of react js",
            replies: [],
          },
        ],
      },
    ],
  },
  {
    name:"Shubham",
    text:"wow whata series of react js",
    replies:[]
},
];

const Comment = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div className="flex shadow-sm bg-gray-100 p-2 rounded-lg my-2">
      <RxAvatar className="w-10 h-8" />
      <div className="px-3">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

const CommentList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div key={index} >
      <Comment data={comment} />
      <div className="pl-5 border border-l-black ml-5">
        <CommentList comments={comment.replies} />
      </div>
    </div>
  ));
};

const CommentsPage = () => {
  return (
    <div className="m-4 p-2">
      <h1 className="text-xl font-bold">Comments :</h1>
      <CommentList comments={commentData} />
    </div>
  );
};

export default CommentsPage;

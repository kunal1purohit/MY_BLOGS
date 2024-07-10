import { React, useEffect, useState } from "react";
import service from "../appwrite/config";
import { Container, Postcard } from "../comp";

function Allposts() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    service.getposts([]).then((posts) => {
      if (posts) {
        setPosts(ppsts.document);
      }
    });
  }, []);

  return (
    <div className="w-full py-8">
      <Container>
        <div className="flex flex-wrap"></div>
        {posts.map((post) => {
          <div key={post.$id} className="p-2 w-1/4">
            <Postcard post={post} />
          </div>;
        })}
      </Container>
    </div>
  );
}

export default Allposts;

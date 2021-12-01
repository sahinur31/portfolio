import React from 'react';
import Zoom from "react-reveal/Zoom";
const Blog = () => {
    return (
        <div
      id="blog"
      className="blog-area py-5 text-white"
      style={{ backgroundColor: "#222" }}
    >
      <Zoom>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="blog text-center">
                <h2 className="text-center py-5 theme-color">Blog</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="blog text-center">
                <h2 className="text-center py-5 theme-color">Blog are coming soon</h2>
              </div>
            </div>
          </div>
          
        </div>
      </Zoom>
    </div>
    );
};

export default Blog;
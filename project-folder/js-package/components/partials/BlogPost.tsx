import '../../styles/fonts.css';
import '../../styles/tailwind.css';

import React from 'react';

function BlogPost(props) {
  return (
    <div className="flex flex-col items-center pb-24">
      <p>{JSON.stringify(props)}</p>
    </div>
  );
}

export default BlogPost;

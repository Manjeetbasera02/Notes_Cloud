// import React from 'react'
// import Allnotes from './Allnotes'
// import Addnote from './Addnote'
// import Logout from './Logout'

// function Home() {
//   return (
//     <>
//       <Allnotes />
//       <Logout />
//     </>
//   )
// }

// export default Home

import React from 'react';
import Allnotes from './Allnotes';
import Logout from './Logout';

function Home() {
  return (
    <div className="container mt-5">
      {/* <h2 className="text-center mb-4">Your Notes</h2> */}
      <Allnotes />
      <div className="text-center mt-4">
        <Logout />
      </div>
    </div>
  );
}

export default Home;

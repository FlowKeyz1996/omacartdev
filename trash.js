// "use client";
// import React from 'react';
// import { useState } from 'react';
// import Form from '@/components/Form';


  
// const page  = () => {
  
// //   const [firstname, setFirstname] = useState('');
// //   const [email, setEmail] = useState('');
// //   const [password, setPassword] = useState('');

// //   const handleSignUp = async (e) => {
// //     e.preventDefault();

// //     try {
// //       const response = await fetch('https://devapi.omacart.com/signup', {
// //         method: 'POST',
// //         headers: {
// //           'Content-Type': 'application/json',
// //         },
// //         body: JSON.stringify({ firstname, email, password }),
// //       });

// //       const data = await response.json();

// //       // Assuming your server responds with a token upon successful signup
// //       if (data.token) {
// //         // Save the token to local storage or a state management solution
// //         // For simplicity, let's use localStorage here
// //         localStorage.setItem('token', data.token);

// //         // Redirect to the dashboard using Next.js router
// //         router.push('/dashboard');
// //       } else {
// //         console.error('Signup failed:', data.error);
// //       }
// //     } catch (error) {
// //       console.error('Error:', error);
// //     }
//   };

//   return (
//     <div>
//         <Form isRegisterPage={true}/>
//       {/* <h2>Sign Up</h2>
//       <form onSubmit={handleSignUp}>
//         <label htmlFor="firstname">Firstname:</label>
//         <input
//           type="text"
//           id="firstname"
//           name="firstname"
//           value={firstname}
//           onChange={(e) => setFirstname(e.target.value)}
//           required
//         />
//         <br />
//         <label htmlFor="email">Email:</label>
//         <input
//           type="email"
//           id="email"
//           name="email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//         />
//         <br />
//         <label htmlFor="password">Password:</label>
//         <input
//           type="password"
//           id="password"
//           name="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//         />
//         <br />
//         <button type="submit">Sign Up</button>
//       </form> */}
//     </div>
//   );
// };

// export default page
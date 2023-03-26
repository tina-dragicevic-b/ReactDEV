// export const inputFields = () => ({
//   firstName: {
//     required: "Name is required. ",
//   },
//   lastName: {
//     required: "Last name is required. ",
//   },
//   email: {
//     required: "Email is required.",
//     pattern: {
//       value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
//       message: "Email is not valid.",
//     },
//   },
//   address: {
//     required: "Address is required.",
//   },
// });
 
export const inputFields = () => [
  {
    field: {
      firstName: {
        required: "Name is required. ",
      },
    },
  },
  {
    field: {
      lastName: {
        required: "Last name is required. ",
      },
    },
  },
  {
    field: {
      email: {
        required: "Email is required.",
        pattern: {
          value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
          message: "Email is not valid.",
        },
      },
    },
  },
  {
    field: {
      address: {
        required: "Address is required.",
      },
    },
  },
];
  
const vars = () => [
  firstName, lastName, email, address
]
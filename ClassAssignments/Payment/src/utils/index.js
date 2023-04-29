export const inputFieldsDefinition = () => [
  {
    name: "firstName",
    label: "First Name",
    type: "text",
    required: {
      value: true,
      message: "First name is required. ",
    },
    pattern: null,
  },
  {
    name: "lastName",
    label: "Last Name",
    type: "text",
    required: {
      value: true,
      message: "Last name is required. ",
    },
    pattern: null,
  },
  {
    name: "email",
    label: "Email",
    type: "email",
    required: {
      value: true,
      message: "Name is required. ",
    },
    pattern: {
      value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
      message: "Email is not valid.",
    },
  },
  {
    name: "address",
    label: "Address",
    type: "text",
    required: {
      value: true,
      message: "Address is required. ",
    },
    pattern: null,
  },
];

export const countriesDefinition = () => [
  "Croatia", "Italy", "Slovenia", "Hungary"
]

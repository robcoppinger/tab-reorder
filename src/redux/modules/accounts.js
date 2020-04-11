// ------------------------= Initial state -----------------------------
const initialState = {
  email: {},
};

// ----------------------------- Reducer -----------------------------
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case 'CREATE_EMAIL':
      return {...state, email: action.payload.email};

    default:
      return state;
  }
}

// ----------------------------- Actions -----------------------------

export const actions = {
  createEmailRequest: ({email, name, password}) => ({
    type: 'CREATE_EMAIL_REQUEST',
    payload: {
      email,
      name,
      password,
    },
  }),
  createEmailSuccess: ({email}) => ({
    type: 'CREATE_EMAIL_SUCCESS',
    payload: {
      email,
      name,
      password,
    },
  }),
  createEmail: ({email}) => ({
    type: 'CREATE_EMAIL',
    payload: {
      email,
      name,
      password,
    },
  }),
};

// ----------------------------- Selectors -----------------------------

export const selectors = {
  getEmail: globalState => globalState.email,
};

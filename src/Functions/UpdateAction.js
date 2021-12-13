export default function updateAction(state, payload) {
    return {
      ...state,
      some_questions: {
        ...state.some_questions,
        ...payload
      }
    };
  }
  
import {
  ARTICLE_REQUEST,
  ARTICLE_SUCCESS,
  ARTICLE_FAIL,
  CLEAR_ERRORS,
} from "../Constants/Articles";

export const articles = (state = { articles: [] }, action) => {
  switch (action.type) {
    case ARTICLE_REQUEST:
      return {
        loading: true,
        articles: [],
      };
    case ARTICLE_SUCCESS:
      return {
        loading: false,
        status: action.payload.status,
        total: action.payload.total,
        currentPage: action.payload.currentPage,
        countPage: action.payload.countPage,
        articles: action.payload.articles["hits"]["hits"],
        aggregations: action.payload.aggregations,
      };

    case ARTICLE_FAIL:
      return {
        loading: false,
        status: "error",
        error: action.payload,
      };

    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};

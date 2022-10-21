import {
  ARTICLE_REQUEST,
  ARTICLE_SUCCESS,
  ARTICLE_FAIL,
  CLEAR_ERRORS,
} from "../Constants/Articles";
import axios from "axios";

export const articles =
  (page, size, filterByJournal, filterByTopic, search, range, sortBy) =>
  async (dispatch) => {
    try {
      dispatch({ type: ARTICLE_REQUEST });

      let link = `/search?`;

      if (page) {
        link += `page=${page}`;
      }
      if (size) {
        link += `&size=${size}`;
      }
      if (filterByJournal) {
        link += `&filterByJournal=${filterByJournal}`;
      }
      if (filterByTopic) {
        link += `&filterByTopic=${filterByTopic}`;
      }

      if (range) {
        link += `&range=${range}`;
      }

      if (sortBy) {
        if (sortBy === "sortByRelevance") {
          link += `&sortByRelevance=true`;
        }

        if (sortBy === "sortByDateDESC") {
          link += `&sortByDate=DESC`;
        }

        if (sortBy === "sortByDateASC") {
          link += `&sortByDate=ASC`;
        }

        if (sortBy === "sortByCited") {
          link += `&sortByCited=DESC`;
        }

        if (sortBy === "sortByTitleASC") {
          link += `&sortByTitle=ASC`;
        }

        if (sortBy === "sortByTitleDESC") {
          link += `&sortByTitle=DESC`;
        }
      }
      if (search) {
        link += `&search=${search}`;
      }

      const { data } = await axios({
        method: "GET",
        url: link,
      });

      dispatch({ type: ARTICLE_SUCCESS, payload: data });
    } catch (error) {
      dispatch({
        type: ARTICLE_FAIL,
        payload: error.response.data.message,
      });
    }
  };

export const clearErrors = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};

import Vue from "vue";
import {
  API_ROOT_URL
} from "../../settings";
import axios from "axios";

const state = {
  chapters: [],
  chapter: {},
  chapterNames: []
};

const getters = {
  chapterNames: state => {
    return state.chapterNames;
  },

  chapters: state => {
    return state.chapters;
  },

  chapter: state => {
    return state.chapter;
  }
};

const mutations = {
  chapterNames: (state, chapterNames) => {
    state.chapterNames = chapterNames;
  },

  numPages: (state, numPages) => {
    state.numPages = numPages;
  },

  chapter: (state, chapter) => {
    state.chapter = chapter;
  },

  chapterTitle: (state, title) => {
    state.chapterTitle = title;
  },

  chapters: (state, chapters) => {
    state.chapters = chapters;
  },

  currentChapter: (state, currentChapter) => {
    state.currentChapter = currentChapter;
  }
};

const actions = {
  createChapter({
    commit
  }, chapter) {
    let url = `${API_ROOT_URL}/chapter`;
    axios
      .post(url, chapter)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  },

  getChapterNames({
    commit
  }) {
    let url = `${API_ROOT_URL}/chapternames`;
    axios
      .get(url)
      .then(res => {
        commit("chapterNames", res.data.names);
        commit("resetPage");
      })
      .catch(err => {
        console.log(err);
      });
  },

  getChapterById({
    commit
  }, id) {
    let url = `${API_ROOT_URL}/chapters/${id}`;
    axios
      .get(url)
      .then(res => {
        commit("chapter", res.data.chapter);
        commit("numPages", res.data.chapter.pages.length);
        commit("resetPageNumber");
        commit("nextPageNumber", res.data.chapter.pages.length + 1);
      })
      .catch(err => {
        console.log(err);
      });
  },

  getCurrentChapter({
    commit
  }) {
    const id = state.currentChapter._id;
    console.log("*** Get Current Chapter *** " + id);
    let url = `${API_ROOT_URL}/chapters/${id}`;
    axios
      .get(url)
      .then(res => {
        console.log("GET CHAPTER BY ID", res.data);
        commit("chapter", res.data.chapter);
      })
      .catch(err => {
        console.log(err);
      });
  },

  getChapters({
    commit
  }) {
    let url = `${API_ROOT_URL}/chapters`;
    console.log(url);
    axios
      .get(url)
      .then(res => {
        commit("chapters", res.data.chapters);
      })
      .catch(err => {
        console.log(err);
      });
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};

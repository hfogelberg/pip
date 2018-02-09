import VueRouter from "vue-router";
import Index from "./components/Index";
import Login from "./components/Login";
import Admin from "./components/admin/Admin";
import AdminChapter from "./components/admin/AdminChapter";
import AdminChapters from "./components/admin/AdminChapters";
import AdminCharacters from "./components/admin/AdminCharacters";
import CreateChapter from "./components/admin/CreateChapter";
import CreateCharacter from "./components/adminCreateCharacter";
import CreatePage from "./components/admin/CreatePage";
import EditChapter from "./components/admin/EditChapter";
import EditCharacter from "./components/admin/EditCharacter.vue";
import EditPage from "./components/admin/EditPage";
import Chapter from "./components/book/Chapter";
import Chapters from "./components/book/Chapters";
import Character from "./components/book/Character";
import Characters from "./components/book/Characters";

function redirectIfNotAuth(to, from, next) {
  const cookie = document.cookie.match(
    "(^|;) ?" + "peckling" + "=([^;]*)(;|$)"
  );

  if (!cookie) {
    router.push("/login");
  }
  next();
}

const router = new VueRouter({
  mode: "history",
  routes: [
    { path: "/", component: Index },
    { path: "/login", component: Login },
    { path: "/admin", component: Admin, beforeEnter: redirectIfNotAuth },
    { path: "/admin/characters", component: AdminCharacters, beforeEnter: redirectIfNotAuth},
    { path: "/admin/editcharacter", component: EditCharacter, beforeEnter: redirectIfNotAuth },
    { path: "/admin/characters/create", component: CreateCharacter, beforeEnter: redirectIfNotAuth },
    { path: "/admin/chapters", component: AdminChapters, beforeEnter: redirectIfNotAuth },
    { path: "/admin/chapters/create", component: CreateChapter, beforeEnter: redirectIfNotAuth },
    { path: "/admin/editchapter", component: EditChapter, beforeEnter: redirectIfNotAuth },
    { path: "/admin/addPage/:id", component: CreatePage, beforeEnter: redirectIfNotAuth },
    { path: "/admin/editpage", component: EditPage, beforeEnter: redirectIfNotAuth },
    { path: "/characters", component: Characters, beforeEnter: redirectIfNotAuth },
    { path: "/character/:id", component: Character, beforeEnter: redirectIfNotAuth },
    { path: "/chapters", component: Chapters, beforeEnter: redirectIfNotAuth },
    { path: "/chapter", component: Chapter, beforeEnter: redirectIfNotAuth }
  ]
});

// router.beforeEnter((to, from, next) => {
//   console.log("Before enter hook");

//   // if (!store.getters.token) {
//   //   router.push("/login");
//   // }
//   next();
// });

export default router;

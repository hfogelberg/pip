import VueRouter from "vue-router";
import Index from "./components/Index";
import Login from "./components/Login";
import Admin from "./components/Admin";
import AdminCharacters from "./components/AdminCharacters";
import CreateCharacter from "./components/CreateCharacter";
import AdminChapters from "./components/AdminChapters";
import CreateChapter from "./components/CreateChapter";
import EditChapter from "./components/EditChapter";
import Characters from "./components/Characters";
import Callback from "./components/Callback";
import CreatePage from "./components/CreatePage";
import Chapters from "./components/Chapters";
import Chapter from "./components/Chapter";

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
    { path: "/callback/google", component: Callback },
    {
      path: "/admin",
      component: Admin,
      beforeEnter: redirectIfNotAuth
    },
    {
      path: "/admin/characters",
      component: AdminCharacters,
      beforeEnter: redirectIfNotAuth
    },
    {
      path: "/admin/characters/create",
      component: CreateCharacter,
      beforeEnter: redirectIfNotAuth
    },
    {
      path: "/admin/chapters",
      component: AdminChapters,
      beforeEnter: redirectIfNotAuth
    },
    {
      path: "/admin/chapters/create",
      component: CreateChapter,
      beforeEnter: redirectIfNotAuth
    },
    {
      path: "/admin/editchapter",
      component: EditChapter,
      beforeEnter: redirectIfNotAuth
    },
    {
      path: "/characters",
      component: Characters,
      beforeEnter: redirectIfNotAuth
    },
    {
      path: "/admin/addPage/:id",
      component: CreatePage,
      beforeEnter: redirectIfNotAuth
    },
    {
      path: "/chapters",
      component: Chapters,
      beforeEnter: redirectIfNotAuth
    },
    {
      path: "/chapter/:id",
      component: Chapter,
      beforeEnter: redirectIfNotAuth
    }
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

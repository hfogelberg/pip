import VueRouter from "vue-router";
import Index from "./components/Index";
import Login from "./components/Login";
import Admin from "./components/admin/Admin";
import AddArtwork from "./components/admin/art/AddArtwork";
import AdminArtworks from "./components/admin/art/AdminArtworks";
import AdminChapter from "./components/admin/book/AdminChapter";
import AdminChapters from "./components/admin/book/AdminChapters";
import AdminCharacters from "./components/admin/book/AdminCharacters";
import CreateChapter from "./components/admin/book/CreateChapter";
import CreateCharacter from "./components/admin/book/CreateCharacter";
import CreatePage from "./components/admin/book/CreatePage";
import EditChapter from "./components/admin/book/EditChapter";
import EditCharacter from "./components/admin/book/EditCharacter.vue";
import EditPage from "./components/admin/book/EditPage";
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
    { path: "/admin/art", component: AdminArtworks },
    { path: "/admin/createart", component: AddArtwork },
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

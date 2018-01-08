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

const router = new VueRouter({
  mode: "history",
  routes: [
    { path: "/", component: Index },
    { path: "/login", component: Login },
    { path: "/callback/google", component: Callback },
    { path: "/admin", component: Admin },
    { path: "/admin/characters", component: AdminCharacters },
    { path: "/admin/characters/create", component: CreateCharacter },
    { path: "/admin/chapters", component: AdminChapters },
    { path: "/admin/chapters/create", component: CreateChapter },
    { path: "/admin/chapters/:id", component: EditChapter },
    { path: "/characters", component: Characters },
    { path: "/admin/chapters/:id/pages/add", component: CreatePage },
    { path: "/chapters", component: Chapters },
    { path: "/chapter/:id", component: Chapter }
  ]
});

export default router;

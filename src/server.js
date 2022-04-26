import { Server, Model, RestSerializer } from "miragejs";
import {
  loginHandler,
  signupHandler,
} from "./backend/controllers/AuthController";
import { users } from "./backend/db/users";
import { quizzes } from "./backend/db/quiz";
import {
  getAllQuizzesHandler,
  getQuizHandler,
} from "./backend/controllers/QuizController";
import { initialUserData } from "./backend/utils/authUtils";

export function makeServer({ environment = "development" } = {}) {
  let server = new Server({
    serializers: {
      application: RestSerializer,
    },
    environment,
    models: {
      user: Model,
      quiz: Model
    },

    // Runs on the start of the server
    seeds(server) {
      quizzes.forEach((item) => 
        server.create("quiz", { 
          ...item 
        })
      );
      users.forEach((item) =>
        server.create("user", {
          ...item,
          ...initialUserData,
        })
      );
    },

    routes() {
      this.namespace = "api";
      // auth routes (public)
      this.post("/auth/signup", signupHandler.bind(this));
      this.post("/auth/login", loginHandler.bind(this));
      
      // Quizzes routes (public)
      this.get("/quizzes", getAllQuizzesHandler.bind(this));
      this.get("/quizzes/:quizId", getQuizHandler.bind(this));
    },
  });
  return server;
}

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { store } from "./store/store.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <div
        className="min-h-screen flex items-center justify-center
                   bg-gradient-to-br from-slate-950 via-slate-900 to-black
                   p-6"
      >
        <div
          className="w-full max-w-5xl bg-white/5 backdrop-blur-xl
                     border border-white/10 rounded-3xl
                     shadow-[0_18px_45px_rgba(0,0,0,0.7)]
                     p-8 sm:p-10 transition-all duration-300
                     hover:shadow-[0_22px_55px_rgba(0,0,0,0.8)]"
        >
          <App />
        </div>
      </div>
    </Provider>
  </StrictMode>
);

// @refresh reload
import { Suspense } from "solid-js";
import {
  useLocation,
  A,
  Body,
  ErrorBoundary,
  FileRoutes,
  Head,
  Html,
  Meta,
  Routes,
  Scripts,
  Title,
} from "solid-start";
import "./root.css";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCtqXlgsGz9kWtneC_ywop75r0VrNs0SnA",
  authDomain: "text-georgia.firebaseapp.com",
  projectId: "text-georgia",
  storageBucket: "text-georgia.appspot.com",
  messagingSenderId: "404765711929",
  appId: "1:404765711929:web:73d6aa37508aca879537e8",
  measurementId: "G-P7K64540X1",
  // databaseURL: "https://text-georgia-default-rtdb.asia-southeast1.firebasedatabase.app/",
};

// Initialize Firebase

const firebase = initializeApp(firebaseConfig);
const db = getDatabase(firebase);
// const analytics = getAnalytics(app);

export default function Root() {
  const location = useLocation();
  const active = (path: string) =>
    path == location.pathname
      ? "border-sky-600"
      : "border-transparent hover:border-sky-600";
  return (
    <Html lang="en">
      <Head>
        <Title>younme</Title>
        <Meta charset="utf-8" />
        <Meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Body>
        <Suspense>
          <ErrorBoundary>
            <nav class="bg-sky-800">
              <ul class="container flex items-center p-3 text-gray-200">
                <li class={`border-b-2 ${active("/")} mx-1.5 sm:mx-6`}>
                  <A href="/">Home</A>
                </li>
                <li class={`border-b-2 ${active("/chat")} mx-1.5 sm:mx-6`}>
                  <A href="/chat">Chat</A>
                </li>
              </ul>
            </nav>
            <Routes>
              <FileRoutes />
            </Routes>
          </ErrorBoundary>
        </Suspense>
        <Scripts />
      </Body>
    </Html>
  );
}

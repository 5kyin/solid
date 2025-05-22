import { A } from "solid-start";
import { createSignal,For } from "solid-js";

import Counter from "~/components/Counter";

export default function Home() {
  return (
    <main class="dark text-center mx-auto text-gray-700 p-4 bg-midnight min-h-max relative">
      <h1 class="max-6-xs text-6xl text-sky-700 font-thin uppercase my-16">
        You Truly are my beginning my middle and end!
      </h1>
      {/* <Counter /> */}
        <img src="https://tailwindcss.com/_next/static/media/docs@tinypng.d9e4dcdc.png" alt="" class="w-[71.75rem] flex-none max-w-none dark:hidden" decoding="async"></img>
    </main>
  );
}

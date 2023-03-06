import { A } from "solid-start";
import { createSignal,For } from "solid-js";

import Counter from "~/components/Counter";

type MessageType = { text: string; me: boolean};

export default function Home() {
  const [messages, setMessages] = createSignal([] as MessageType[]);

  const HandelUserMessageInput = (key: any) =>{
    const message = (document.querySelector("#userMessageInput") as HTMLInputElement).value
    if(key?.code === "Enter" && message)HandelUserMessage(message) 
  }

  const HandelUserMessage = (message: string) =>{
    const userVariable = parseInt(Math.random() * 10) < 5 ? false : true
    let newMessage :MessageType = {text:message, me: userVariable}
    setMessages([...messages(),newMessage]); 
    (document.querySelector("#userMessageInput") as HTMLInputElement).value = ""
    const scroolElemen = (document.querySelector("#MessageArea") as HTMLInputElement)
    scrollTo(0, scroolElemen.scrollHeight);
  }

  return (
    <main class="text-center mx-auto text-gray-700 p-4">
      <h1 class="max-6-xs text-6xl text-sky-700 font-thin uppercase my-16">
        Hello Georgia!
      </h1>
      {/* <Counter /> */}
      <div class="mt-8 overflow-auto" id="MessageArea">
        <ul>
          <For each={messages()}>
            {(message,index)=>(
              <li class="mt-8">
                <p 
                  class={message.me ? "text-right" : "text-left"}
                  style={{
                    "background": message.me ? "skyblue" : "#F9629F",
                    "border": `5px solid ${message.me ? "skyblue" : "#F9629F"}`,
                    "border-radius": message.me ? "10px 20px 0px 30px": "20px 10px 30px 0px",
                    "padding": "0px 12px",
                  }}
                >{message.text}</p>
              </li>
            )}
          </For>
        </ul>
      </div>
      <br />
      <br />
      <div class="my-4"
      style={{
        position: "fixed",
        bottom:0,
        width:"95%"
      }}>
      <input 
            id="userMessageInput"
            onKeyDown={HandelUserMessageInput}
            placeholder="What's on your mind"
            style={{
              width: "100%",
              height: "30px",
              padding: "0px 15px",
              border:"1px solid black",
              "border-radius": "15px",
            }}
          />   
      </div>
    </main>
  );
}

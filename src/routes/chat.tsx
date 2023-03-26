import { createSignal,For } from "solid-js";

type MessageType = { text: string; me: boolean};
const safeKey: string[] = ["cls","clear","rescue","crush"]

export default function Chat() {

const [messages, setMessages] = createSignal([] as MessageType[]);

const HandelUserMessageInput = (key: any) =>{
    const message = (document.querySelector("#userMessageInput") as HTMLInputElement).value
    if(key?.code === "Enter" && message)HandelUserMessage(message) 
  }

  const HandelUserMessage = (message: string) =>{
    const userVariable = Math.random() * 10 < 5 ? false : true
    let newMessage :MessageType = {text:message, me: userVariable}
    setMessages([...messages(),newMessage]); 
    (document.querySelector("#userMessageInput") as HTMLInputElement).value = ""
    const scroolElemen = (document.querySelector("#MessageArea") as HTMLInputElement)
    scrollTo(0, scroolElemen.scrollHeight);
    if(safeKey.includes(message)) clearUpConsoleAndUi()
  }



  const clearUpConsoleAndUi = () => {
    setMessages([])
  }

  return (
    <>
    <div class="overflow-auto" id="MessageArea">
        <ul>
          <For each={messages()}>
            {(message,index)=>(
              <li class="mt-1">
                <div class={message.me ? "flex flex-row-reverse" : "flex flex-row"}>
                  <div
                  style={{
                    "background": message.me ? "skyblue" : "#F9629F",
                    "border": `5px solid ${message.me ? "skyblue" : "#F9629F"}`,
                    "border-radius": message.me ? "10px 20px 0px 30px": "20px 10px 30px 0px",
                    "padding": "0px 12px",
                  }}>
                    {message.text}
                    </div>
                </div>
              </li>
            )}
          </For>
        </ul>
      </div>
      <br />
      <br />
      <div class="my-4 flex flex-row absolute inset-x-0 bottom-0 h-30 gap-4 ">  
      <input 
            class="basis-1/1 w-full ml-5"
            id="userMessageInput"
            onKeyDown={HandelUserMessageInput}
            placeholder="What's on your mind"
            style={{
              height: "30px",
              padding: "0px 15px",
              border:"1px solid black",
              "border-radius": "15px",
            }}
          />
      <div class="basis-1/4 first:text-white hover:bg-sky-600 mr-5" 
      style={{
        border:"1px solid skyblue",
        "border-radius": "15px",
      }}
      >
        <button class="">Submit</button> 
      </div>
      </div>
    </>
  )
}

import './body.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'
import { ChatInterface } from './ChatsConversation.jsx'


export function Body (){
  return (
    <ChatInterface></ChatInterface>
    // <h1>GOL</h1>
    // <section className='App'>
    //       <TwitterFollowCard userName="midudev" name="Miguel Ángel Durán" />
    //       <TwitterFollowCard initialIsFollowing={false} userName="niallodev" name="Nicolás Alexander Loor" />
    //       <TwitterFollowCard userName="elmisajo" name="Elian Joel Minaya" />
    //       <TwitterFollowCard userName="edurvi" name="Edgar Uriel Villavicencio" />
    //   </section>
  )
}
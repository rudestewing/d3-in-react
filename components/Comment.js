const Comment = (props) => {
  const { id, user, time, clap, body, children } = props

  return (
    <div class="flex">
      <div>
        <div class="w-10 h-10 rounded-full">
          <img
            src="https://as2.ftcdn.net/v2/jpg/02/79/29/55/1000_F_279295576_S9z2jO3fKPLuq41dxoWqYWgJLMW6r6F9.jpg"
            alt="..."
            class="w-full h-full object-center object-cover"
          />
        </div>
      </div>
    </div>
  )
}

export default Comment
